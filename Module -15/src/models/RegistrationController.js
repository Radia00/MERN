
const { default: mongoose } = require('mongoose')
const RegisterModel = require('../models/RegistrationModel')

// student registration
exports.register = async (req, res) => {
    const { firstName, lastName, gender, dateOfBirth, nationality, address, email, phone, admissionDate, courses } = req.body
    if (!firstName || !lastName || !gender || !dateOfBirth || !nationality || !address || !email || !phone || !admissionDate || !courses) {
        return res.status(400).json({ msg: 'Please enter all fields' })
    }
    try {
        const newStudent = new RegisterModel({
            firstName,
            lastName,
            gender,
            dateOfBirth,
            nationality,
            address,
            email,
            phone,
            admissionDate,
            courses
        })
        const student = await newStudent.save()
        if (student) {
            return res.status(200).json({ msg: 'Student Registered Successfully', data: student })
        }
        return res.status(400).json({ msg: 'Student Registration Failed' })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
}


// read all students
exports.getdata = async (req, res) => {
    try {
        const students = await RegisterModel.find()
        res.json(students)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
}

// read single student
exports.singleStudent = async (req, res) => {
    const id = req.params.id
    const query = { _id: id }
    try {
        const student = await RegisterModel.findById(query)
        if (!student) {
            return res.status(404).json({ msg: 'Student not found' })
        }
        res.json(student)
    } catch (err) {
        console.error(err.message)
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Student not found' })
        }
        res.status(500).send('Server Error')
    }
}

// update student
exports.update = async (req, res) => {
    const id = req.params.id
    const query = { _id: id }
    const newData = req.body
    try {
        const student = await RegisterModel.findByIdAndUpdate(query, newData)
        if (!student) {
            return res.status(404).json({ msg: 'Student not found' })
        }
        res.json(student)
    } catch (err) {
        console.error(err.message)
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Student not found' })
        }
        res.status(500).send('Server Error')
    }
}

// delete student
exports.delete = async (req, res) => {
    const id = req.params.id
    const query = { _id: id }
    try {
        const student = await RegisterModel.findByIdAndDelete(query)
        if (!student) {
            return res.status(404).json({ msg: 'Student not found' })
        }
        res.json(student)
    } catch (err) {
        console.error(err.message)
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Student not found' })
        }
        res.status(500).send('Server Error')
    }
}

