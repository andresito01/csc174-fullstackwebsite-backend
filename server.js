const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "be459f5c0486e5",
  host: "us-cdbr-east-06.cleardb.net",
  password: "b705de92",
  database: "heroku_4f0b5e799dde084",
});

app.get("/register", (req, res) => {
  const empID = req.body.empID;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  const username = req.body.username;
  const password = req.body.password;
  const role = req.body.role;
  const department = req.body.department;
  const cID = 1000;
  const mID = null;

  db.query(
    "INSERT INTO EMPLOYEE (empID, fname, lname, email, phone, username, password, role, dept, cID, mID) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
    [
      empID,
      firstName,
      lastName,
      email,
      phoneNumber,
      username,
      password,
      role,
      department,
      cID,
      mID,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Values Inserted");
      }
    }
  );
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000");
});
