module.exports = function(app) {

    app.get('/api/person/:id', function(req, res) {
        // get the data from the database
        res.json({firstName: 'John', lastName: 'Doe'});
    })

    app.post('/api/person', function(req, res) {
        // save to the database
    });

    app.delete('/api/person/:id', function(req, res) {
        // delete from the database
    });
}