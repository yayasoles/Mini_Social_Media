const express = require('express');
const router = express.Router();
const { Comments } = require('../models');
const{validateToken}=require("../Middlewares/AuthMiddleware");
router.get("/:postId", async (req, res) => {
    const postId = req.params.postId;
    const result = await Comments.findAll({
        where: {
            postId: postId
        }
    });
    res.json(result);
});

router.post("/", validateToken, async (req, res) => {
    const comment = req.body;
    await Comments.create(comment);
    // console.log(comment);
    res.json(comment);
});

module.exports = router;