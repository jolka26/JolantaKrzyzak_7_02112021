const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
const fs = require('fs');

const User = db.user;
require('dotenv').config();

/// Find all users 
exports.findAll = (req, res) => {

    User.findAll()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(400).json({message: "USERS not found"}));
}

// Find one user
exports.getOneUser= (req, res, next) => {
    const id = req.params.id;
  User.findByPk(id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          message: "user not found",
        });
      }
      res.status(200).json({
        id: user.id,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        profile_image: user.profil_image,
        password: user.password
      });
    })
    .catch((err) => res.status(500).json({ err }));
  }; 



// // Création d'un utilisateur
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User({
            email: req.body.email,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: hash,
            profil_image: req.body.profil_image,
            is_admin: req.body.is_admin

        });
        user.save()
        .then(() => res.status(200).json({message : 'utilisateur cree' }))
        .catch(error => res.status(500).json({ error }))
    })
    .catch(error => res.status(500).json({ error }));
};


// Connexion d'un utilisateur
exports.login = (req, res, next) => {
    User.findOne({ where: { email: req.body.email } })
    .then(user => {
        if(!user) {
            return res.status(401).json({error: 'utilisateur non trouve'})
        }
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if (!valid) {
                return res.status(401).json({error: 'mot de passe incorrect'})
            }
            res.status(200).json({
                userId: user.id,
                token: jwt.sign(
                    { id: user.id },
                    process.env.RANDOM_TOKEN_SECRET,
                    { expiresIn: '24h'}
                ),
                message: "utilisateur connecte"
            });
        })
        .catch(error => res.status(500).json({ error: "ici" }))
    })
    .catch(error => res.status(500).json({error: "ici ici"}))
};

// Modification d'un utilisateur
exports.modifyUser = (req, res, next) => {
    let password;
    if (req.body.password) {
      bcrypt.hash(req.body.password, 10)
      .then((hash) => {
        password = hash;
      });
    }
    const user = {
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password,
        profil_image: req.body.profil_image,
        is_admin: req.body.is_admin
    };
    // if (req.file) {
    //     user.profil_image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
    //   }

      User.update(user, { where: { id: req.params.id }})
        .then(() =>res.status(200).json({ message: 'User modifiee!' }))
        .catch((err) => res.status(500).json({ err }));
    };


  // Supprimer/ desactivation d'un utilisateur

  exports.deleteUser = (req, res, next) => {
    User.update({
        email: "anonim",
        is_admin: 0,
        // profil_image: "http://localhost:3000/images/random_photo.png",

    },
    { 
        where: { id: req.params.id },
    })
    .then(() =>res.status(200).json({ message: 'User desactivee!' }))
    .catch((err) => res.status(500).json({ err }));
  };

