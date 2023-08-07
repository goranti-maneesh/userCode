const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "furation_db",
  port: 3001,
});

// db.connect((err) => {
//   if (err) {
//     console.error("An error occurred while connecting to the DB:", err);
//     return;
//   }
//   console.log("Connected successfully to the DB");
// });

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//db.connect(function(err) {
//  if (err) throw err;
//  const insrtData = "INSERT INTO contact_db (name,email,contact) VALUES ('sr1','srinuk@gmail.com','2222222')";
//  db.query(insrtData , function (err, result, fields) {
//    if (err) throw err;
//    console.log(result);
// });
//});

//https://github.com/srinuk1122/fullstcksql-all-crude-operation/blob/main/server/index.js

app.get("/api/get", (req, res) => {
  console.log("12345");
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
});

con.connect(function (err) {
  if (err) throw err;
  //Select all customers and return the result object:
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
});

app.get("/api/get/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM products WHERE id=?", id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.post("/api/post", (req, res) => {
  const { name, price, imeage } = req.body;
  const sqlInsert = "INSERT INTO products (name,price,imeage) VALUES (?,?,?)";
  db.query(sqlInsert, [name, price, imeage], (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

app.delete("/api/remove/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM products WHERE id = ?";
  db.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

app.put("/api/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, price, imeage } = req.body;
  const sqlupdateData =
    "UPDATE products SET name =? ,price=?,imeage=? WHERE id =?";
  db.query(sqlupdateData, [name, price, imeage, id], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("server is running on port 3001");
});
