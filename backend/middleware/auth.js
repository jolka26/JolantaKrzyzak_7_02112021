const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.RANDOM_TOKEN_SECRET);
        const userId = decodedToken.id;
        console.log(userId);
        if(req.body.id && req.body.id !== userId) {
            throw 'User ID non valable';
        } else {
            next();
        }
    }
    catch (error) {
    res.status(401).json({ error: error | 'Requete non authentifiee'})
    }
};