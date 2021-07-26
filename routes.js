const express = require("express")
const Post = require("./models/Post")
const router = express.Router()

router.get("/posts", async (req, res) => {
    const posts = await Post.find()
    res.send(posts)
})

router.post("/posts", async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
    })
    await post.save()
    res.send(post)
})

router.get("/posts/delete", async (req, res) => {
    const allPost = await Post.find();
    allPost.forEach( async element => {
        await Post.deleteOne(element)
    });
    res.send("success").status(200);
})

module.exports = router