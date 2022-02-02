const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
// const helmet = require('helmet');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');


const app = express();

const db = require('./models');
db.sequelize.sync()
// db.sequelize.sync({alter:true})
// db.sequelize.sync({force:true})
.then(() => console.log('Connexion à DB réussie !'))
.catch((error) => console.log(error + 'Connexion à DB échouée !'));


// app.use(helmet());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Content-Security-Policy', "default-src 'self'");    
    next();
  });

// app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/auth/login', userRoutes);

module.exports = app;