const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const tenderRoutes = require('./routes/tenderRoutes');
const offerRoutes = require('./routes/offerRoutes');
const indexRoutes = require('./routes/index');
const { sequelize } = require('./models');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'mySecret', resave: false, saveUninitialized: true }));

app.use(express.static(path.join(__dirname, 'public')));

// Routing
app.use('/', indexRoutes);
app.use('/tenders', tenderRoutes);
app.use('/offers', offerRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

sequelize.sync()
    .then(result => {
        console.log('Database synchronized');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(err => {
        console.log(err);
    });

module.exports = app;
