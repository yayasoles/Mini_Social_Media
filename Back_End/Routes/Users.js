// because express has a routing system integrated into the framework 
const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

router.post('/', async (req, res) => {
    const { userName, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            userName: userName,
            password: hash
        });
        res.json("User Successfully Created");
    })

});

router.post('/login', async (req, res) => {
    const { userName, password } = req.body;
    const user = await Users.findOne({ where: { userName: userName } })
    if (!user) {
        res.json({ error: "User Name DoesNot Exist" });
    } else {
        bcrypt.compare(password, user.password).then((match) => {

            if (!match) {
                res.json({ error: "Wrong Password" });
            } else {
                const accessToken = sign({ userName: user.userName, id: user.id }, "importantsecrete");
                res.json(accessToken);
            }
        });
    }

});
module.exports = router