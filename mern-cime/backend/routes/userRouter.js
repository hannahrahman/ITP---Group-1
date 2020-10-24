const router  = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth"); 

router.post("/register", async(req, res)=>{
    try {
    let {policeno, password, passwordCheck, displayName} = req.body;

    //validate
    if(!policeno || !password || !passwordCheck) 
        return res.status(400).json({msg:"Not all fields have been entered."});

    if (password.length < 5 )
        return res.status(400).json({msg:"The password needs to be atleast 5 characters long"});
        
    if (password != passwordCheck)
        return res
            .status(400).json({msg: "The passwords do not match"});
    
    const existingUser = await User.findOne({policeno : policeno});
    if (existingUser)
        return res
            .status(400)
            .json({msg: "Police Officer already exists"});
    
    if (!displayName) displayName = policeno;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    
    const newUser = new User({
        policeno,
        password: passwordHash,
        displayName,
    });

    const savedUser = await newUser.save();
    res.json(savedUser);

    } catch (err){
        res.status(500).json({error: err.message});
    }

});

router.post("/login", async (req, res) => {
    try {
        const {policeno, password} = req.body;
        const process = "tG{cXZ45#Y^]}(H~5SZ3+?=HG)K)n2CmmD&C^M:n3G+z.Uu*<g";

        //validate
        if (!policeno || !password)
            return res.status(400).json({msg: "Not all fields have been entered."});

        const user = await User.findOne({policeno:policeno});
        if(!user)
        return res.status(400).json({msg: "No account with this police number has been registered."});

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({msg: "Invalid credentials"});
        
        const token = jwt.sign({id: user._id}, process);
        res.json ({
            token,
            user:{
                id: user._id,
                displayName: user.displayName,
               
            },
        });


    } catch (err) {
        res.status(500).json({ error: err.message});
    }
});

router.delete("/delete", auth, async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.User);
        res.json(deletedUser);

    } catch (err) {
        res.status(500).json({ error: err.message});
    }
});

router.post ("/tokenIsValid", async ( req, res) => {
    try {
        const process = "tG{cXZ45#Y^]}(H~5SZ3+?=HG)K)n2CmmD&C^M:n3G+z.Uu*<g";
        const token =req.header ("x-auth-token");
        if (!token) return res.json (false);
        const verified = jwt.verify(token, process);
        if (!verified) return res.json(false);

        const user = await User.findById(verified.id);
        if (!user) return res.json(false);

        return res.json(true);

    } catch (err) {
        res.status(500).json ({ error: err.message});
    }
});

router.get("/", auth, async (req, res) => {
    const user = User.findById(req.user);
    res.json({
        displayName: user.displayName,
        id: user._id,
    });
});

module.exports = router;