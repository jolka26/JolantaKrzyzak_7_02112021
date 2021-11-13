const db = require("../models");
const Post = db.post;



// // Création d'un post
exports.createNewPost = (req, res, next) => {
    const post = new Post({
        id: req.body.id,
        user_id: req.body.user_id,
        post_image: req.body.post_image,
        content: req.body.content,

    });
    post.save()
    .then(() => res.status(200).json({message : 'new post cree' }))
    .catch(error => res.status(500).json({ error }))
};
 
// Récupération de tous les posts
exports.getAllPosts = (req, res) => {

    Post.findAll()
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({message: "Post not found"}));
  }
  

// Récupération d'un post et son id
exports.getOnePostId= (req, res, next) => {
    const id = req.params.id;
  Post.findByPk(id)
    .then((data) => { res.status(200).json(data)})
    .catch((err) => res.status(500).json({ err }));
  }
    

/// Récupération de tous les posts d'un utilisateur


// exports.updateOnePost = (req, res) => {};
// exports.deleteOnePost = (req, res) => {};