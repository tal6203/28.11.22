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

// const user = [6, "Moshe", 29, "USA", 70000];

// function insert(db,user,err){
// const insert_user = `INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
//                      VALUES(?, ?, ?, ?, ?);`
// db.run(insert_user, user, (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(user);
//     }
// });
// }
function up(db, id, new_salary) {
    const sql_update = `UPDATE COMPANY
                        SET SALARY = ?
                        WHERE id = ? ;`;
    db.run(sql_update, [new_salary, id], err => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(new_salary);
        }
    });

}

function delete_by_id(db, id) {
    const sql_delete = `DELETE FROM COMPANY WHERE ID = ?;`
    db.run(sql_delete, [id], err => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(`id ${id} delete`);
        }
    });
}



setTimeout(() => up(db, 6, 45000), 1000);

setTimeout(() => delete_by_id(db, 6), 1000);


// db.close((err) => {
//     if (err) {
//         console.log(err.message);
//     }
//     else {
//         console.log("Database connection close!");
//     }
// })