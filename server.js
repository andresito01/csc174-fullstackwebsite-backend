const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "127.0.0.1",
  password: "Am246810:01",
  database: "CSC174DELIVERABLE3",
});

app.post("/register", (req, res) => {
  const empID = req.body.empID;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  const username = req.body.username;
  const password = req.body.password;
  const role = req.body.role;
  const department = req.body.department;
  const mID = null;

  db.execute(
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

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
