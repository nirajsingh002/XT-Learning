let express = require('express');
let app = express();
const mongoose = require('mongoose');
const mongodbURL = 'mongodb://nirajsingh002:nirajsingh$02@ds031417.mlab.com:31417/addressbook';
mongoose.connect(mongodbURL,  { useNewUrlParser: true, useUnifiedTopology: true, })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log(`DB Connection Error: ${err.message}`);
    });



const Schema = mongoose.Schema;

const personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String,
});

const Person = mongoose.model('Person', personSchema);

const john = Person({
    firstname: 'John',
    lastname: 'Doe',
    address: '555 Main St.'
})

john.save(function(err) {
    if(err) throw err;

    console.log('Person saved!')
})

const jane = Person({
    firstname: 'Jane',
    lastname: 'Doe',
    address: '555 Main St.'
})

jane.save(function(err) {
    if(err) throw err;

    console.log('Person saved!')
})

let apiController = require('./controllers/apiController');
let htmlController = require('./controllers/htmlController');
const port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log('Request URL: ' + req.url);


    Person.find({}, function(err, users) {
        if(err) throw err;

        // object of all the users
        console.log(users);
    });

    next(); 
});


htmlController(app);
apiController(app);

app.listen(port);