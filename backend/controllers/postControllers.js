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
    .then(() => res.status(200).json({message : 'new post cree!' }))
    .catch(error => res.status(500).json({ error }))
};
 
// Récupération de tous les posts
exports.getAllPosts = (req, res) => {

    Post.findAll()
    .then(post => res.status(200).json(post))
    .catch(error => res.status(400).json({message: "Post not found"}));
  }
  

// Récupération d'un post et son id
exports.getOnePostId= (req, res, next) => {
    const id = req.params.id;
  Post.findByPk(id)
    .then(post => { res.status(200).json(post)})
    .catch((err) => res.status(500).json({ err }));
  }
    

/// Récupération de tous les posts d'un utilisateur



//Modification d'un post
exports.modifyOnePost = (req, res, next) => {
    const post = {
      content: req.body.content,
    };
    const postObject = req.body;

    Post.update({...postObject,id: req.params.id},{ 
        where: {id: req.params.id},
        returning: true,
    })
    .then(() =>res.status(200).json({message: "Post modifiee!"}))
    .catch((err) => res.status(500).json({ err}));
  

};



//Suppression d'un post
exports.deleteOnePost = (req, res, next) => {
    Post.destroy({ where: { id: req.params.id,},})
      .then(() => res.status(200).json({ message: "post supprimee!" }))
      .catch((err) => res.status(404).json({ err }));
  };