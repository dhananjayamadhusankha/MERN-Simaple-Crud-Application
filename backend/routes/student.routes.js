const express = require("express");
const studentRouter = express.Router();

const {
    regStudent,
    getStudents,
    getStudent,
    updateStd,
    deleteStudent
} = require("../controller/student.controller");

studentRouter.post("/save", regStudent);
studentRouter.get('/getAllStudents', getStudents);
studentRouter.get('/get/:id', getStudent);
studentRouter.put('/alter/:id', updateStd);
studentRouter.delete('/delete/:id', deleteStudent);

module.exports = studentRouter;