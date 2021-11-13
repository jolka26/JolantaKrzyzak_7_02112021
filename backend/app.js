const express = require('express');
// const DB = require('./config/connection');

const bodyParser = require('body-parser');
// const { sequelize } = require('./models');
// const helmet = require('helmet');
const path = require('path');
// const cors = require('cors');


const userRoutes = require('./routes/userRoutes');
const postsRoutes = require('./routes/postRoutes');

require('dotenv').config();
const app = express();

const db = require('./models');
db.sequelize.sync()
.then(() => console.log('Connexion à DB réussie !'))
.catch((error) => console.log(error + 'Connexion à DB échouée !'));



// app.use(helmet());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// app.use(express.json());
app.use(bodyParser.json());
// app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/', userRoutes);
// app.use('/auth/login', userRoutes);

// app.use('/')
app.use('/posts/', postsRoutes);


module.exports = app;