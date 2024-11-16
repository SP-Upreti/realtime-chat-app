const jwt = require('jsonwebtoken');

const generateTokenSetCookie = (userid, res) => {
    const Token = jwt.sign({ userid }, process.env.token_secret, {
        expiresIn: "30d"
    });

    res.cookie("Token", Token, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'strict',
        seccure: process.env.node_env !== "development"
    })
}

module.exports = generateTokenSetCookie;