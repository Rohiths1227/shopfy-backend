const pool = require('./config/db');

pool.query('SELECT NOW()', (err, result) => {
    if (err) {
        console.log('Database Connection Failed');
        console.log(err);
    } else {
        console.log('Database Connected Successfully');
        console.log(result.rows);
    }
});