// because express has a routing system integrated into the framework 
const express = require('express');
const router = express.Router();
const { Posts } = require('../models');
router.get('/', async (req, res) => {
    // res.json('Hello World');
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
});
router.get("/ById/:id",async (req,res)=>{
const id= req.params.id;
const result=await Posts.findByPk(id);
res.json(result);
});
router.post('/', async (req, res) => {
    const data = req.body;
    await Posts.create(data);
    res.json(data);
});

module.exports = router