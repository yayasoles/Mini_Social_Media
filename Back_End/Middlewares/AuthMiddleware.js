const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
    const accessToken = req.header("accessToken");
    if (!accessToken) {
        return res.json({ error: "Login First" });
    } 
        try {
            const validToken = verify(accessToken, "importantsecrete");
            if (validToken) {
                return next();
            }
        } catch (error) {
            return res.json({ error: error });
        }
    
};

module.exports = { validateToken }