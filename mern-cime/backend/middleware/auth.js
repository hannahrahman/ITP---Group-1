const jwt = require ("jsonwebtoken");

const auth =  (req, res, next) => {
    try {
    const token = req.header("x-auth-token");
    if (!token)
    return res
    .status(401)
    .json({msg: "No authenthication toke, authorization denied"});

    const process = "tG{cXZ45#Y^]}(H~5SZ3+?=HG)K)n2CmmD&C^M:n3G+z.Uu*<g";
    const verified = jwt.verify(token, process);

        if (!verified)
            return res
            .status(401)
            .json({ msg : "Token verification failed, authorization denied"});

        res.user = verified.id;
        next();
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};

module.exports = auth;