const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db1.db');

db.serialize(() => {
    db.each(`SELECT * FROM COMPANY WHERE SALARY > 30000;`, (err, row) => {
        if (err) {
            console.log(err);
        }
        else {
            console.table(row);
        }
    });
});