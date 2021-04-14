const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234tt789',
    database: 'company'
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('Db is conected');
    }
});

module.exports = mysqlConnection;