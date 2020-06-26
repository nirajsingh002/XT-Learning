let configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds149146.mlab.com:49146/nodetodosample';
    }
}