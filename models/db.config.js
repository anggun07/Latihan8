const mysql = require('mysql2');

// Komfirmasi koneksi database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Sesuaikan password MySQL kamu
    database: 'dbpraktikum8'
});

// Coba koneksi
db.connect(err => {
    if (err) {
        console.error('Koneksi database gagal:', err);
    } else {
        console.log('Terhubung ke database MySQL');
    }
});

module.exports = db;