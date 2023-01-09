const Student = require('../models/student.models');

// Create a new Student
const regStudent = async (req, res) => {

    try {
        const existingStudent = req.body.stdName;

        const std = await Student.findOne({stdName: existingStudent});

        if(!std){
            const { stdName, age, address } = req.body;

            const newStudent = {
                stdName: stdName,
                age: age,
                address: address
            };

            const newStd = new Student(newStudent);
            await newStd.save();

            return res.status(200).send({
                status: true,
                message: 'Student saved successfully',
            })
        }
        else{
            return res.status(500).send({
                status: false,
                message: 'Student already exists'
            })
        }
        
    } catch (err) {
        return res.status(500).send({
            status: false,
            message: err.message
        })
    }    
}

// retrieve all student
const getStudents = async (req, res) => {
    
    try {
        const studentsList = await Student.find()

        return res.status(200).send({
            status: true,
            message: "retrive all students",
            allStudents: studentsList
        })
    } catch (err) {
        return res.status(500).send({
            status: false,
            message: err.message
        })
    }
}

// get a student
const getStudent = async (req, res) => {
    
    try {
        const stdID = req.params.id
        const getStd = await Student.findById(stdID)

        return res.status(200).send({
            status: true,
            message: 'Retrive student details',
            getstd: getStd
        })
    } catch (err) {
        return res.status(500).send({
            status: false,
            message: err.message
        })
    }
}

// update student
const updateStd = async (req, res) => {
    
    try {
        const { stdName } = req.body;

        const existingStudent = await Student.findOne({stdName: stdName})

        if(!existingStudent) {
            const stdId = req.params.id
        
            const { stdName, age, address } = req.body;
            
            const alteredStd = ({
                stdName: stdName,
                age: age,
                address: address
            })

            const alterStudent = await Student.findByIdAndUpdate(stdId, alteredStd)
            
            return res.status(200).send({
                status: true,
                message: "Student updated successfully",
                updateStudent: alterStudent
            })
        }
        else {
            return res.status(500).send({
                status: false,
                message: 'Username is already exixts, enter unique username'
            })
        }
        
    } catch (err) {
        return res.status(500).send({
            status: false,
            message: err.message
        })
    }
}

const deleteStudent = async (req, res) => {

    try {
        const stdId = req.params.id;
        await Student.findByIdAndDelete(stdId);

        return res.status(200).send({
            status: true,
            message: 'Student deleted successfully'
        })
    } catch (err) {
        return res.status(500).send({
            status: false,
            message: err.message
        })
    }
}
module.exports = { 
    regStudent,
    getStudents,
    getStudent,
    updateStd,
    deleteStudent
}