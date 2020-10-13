const router  = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

router.post("/register", async(req, res)=>{
    try {
    let {email, password, passwordCheck, displayName} = req.body;

    //validate
    if(!email || !password || !passwordCheck) 
        return res.status(400).json({msg:"Not all fields have been entered."});
    if (password.length < 5 )
        return res.status(400).json({msg:"The password needs to be atleast 5 characters long"});
    if (password !== passwordCheck)
        return res
            .status(400).json({msg: "The passwords do not match"});
    
    const existingUser = await User.findOne({email : email});
    if (existingUser)
        return res
            .status(400)
            .json({msg: "Email already exists"});
    
    if (!displayName) displayName = email;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    
    const newUser = new User({
        email,
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
        const {email, password} = req.body;
        const process = "tG{cXZ45#Y^]}(H~5SZ3+?=HG)K)n2CmmD&C^M:n3G+z.Uu*<g";

        //validate
        if (!email || !password)
            return res.status(400).json({msg: "Not all fields have been entered."});

        const user = await User.findOne({email:email});
        if(!user)
        return res.status(400).json({msg: "No account with this email has been registered."});

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({msg: "Invalid credentials"});
        
        const token = jwt.sign({id: user._id}, process);
        res.json ({
            token,
            user:{
                id: user._id,
                displayName: user.displayName,
                email: user.email,
            },
        });


    } catch (err) {
        res.status(500).json({ error: err.message});
    }
});

module.exports = router;