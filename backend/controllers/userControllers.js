const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");

const User = db.user;


/// find all users 
exports.findAll = (req, res) => {

    User.findAll()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(400).json({message: "tutaj kurwa"}));
}

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
            is_admin: req.body.is_admin,

        });
        user.save()
        .then(() => res.status(200).json({message : 'utilisateur cree' }))
        .catch(error => res.status(500).json({ error }))
    })
    .catch(error => res.status(500).json({ error }));
};


// // Connexion d'un utilisateur
// exports.login = (req, res, next) => {
//     User.findOne({ email: req.body.email })
//     .then(user => {
//         if(!user) {
//             return res.status(401).json({error: 'utilisateur non trouve'})
//         }
//         bcrypt.compare(req.body.password, user.password)
//         .then(valid => {
//             if (!valid) {
//                 return res.status(401).json({error: 'mot de passe incorrect'})
//             }
//             res.status(200).json({
//                 userId: user.id,
//                 token: jwt.sign(
//                     { userID: user.id },
//                     "process.env.RANDOM_TOKEN_SECRET,",
//                     { expiresIn: '24h'}
//                 )
//             });
//         })
//         .catch(error => res.status(500).json({ error }))
//     })
//     .catch(error => res.status(500).json({error}))
// };

