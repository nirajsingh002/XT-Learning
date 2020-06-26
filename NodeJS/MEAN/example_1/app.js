const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

var people = [
    {
        name: 'John Doe'
    },
    {
        name: 'Jane Doe'
    },
    {
        name: 'Jim Doe'
    }
]

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index', { serverPeople: people });
})

app.listen(port, () => {
    console.log('Server running on PORT ' + port)
});