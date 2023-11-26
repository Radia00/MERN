import axios from "axios"

// register a new student
export const Create = (firstName, lastName, gender, nationality, dateOfBirth, address, email, phone, admissionDate, courses) => {
    let URL = "api/v1/register"
    let data = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        nationality: nationality,
        dateOfBirth: dateOfBirth,
        address: address,
        email: email,
        phone: phone,
        admissionDate: admissionDate,
        courses: courses
    }
    return axios.post(URL, data)
        .then((res) => {
            if (res.status === 200) {
                return true
            } else {
                return false
            }
        })
        .catch((err) => {
            console.log(err);
            return false
        })
}

// read all students
export const Read = () => {
    let URL = "api/v1/getdata"
    return axios.get(URL)
        .then((res) => {
            if (res.status === 200) {
                return res
            } else {
                return false
            }
        })
        .catch((err) => {
            console.log(err);
            return false
        })
}

// read single student
export const ReadSingle = (id) => {
    let URL = `api/v1/singleStudent/${id}`
    return axios.get(URL)
        .then((res) => {
            if (res.status === 200) {
                return res
            } else {
                return false
            }
        })
        .catch((err) => {
            console.log(err);
            return false
        })
}

// update student
export const Update = (id, firstName, lastName, gender, nationality, dateOfBirth, address, email, phone, admissionDate, courses) => {
    let URL = `api/v1/update/${id}`
    let data = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        nationality: nationality,
        dateOfBirth: dateOfBirth,
        address: address,
        email: email,
        phone: phone,
        admissionDate: admissionDate,
        courses: courses
    }
    return axios.put(URL, data)
        .then((res) => {
            if (res.status === 200) {
                return true
            } else {
                return false
            }
        })
        .catch((err) => {
            console.log(err);
            return false
        })
}

// delete student
export const Delete = (id) => {
    let URL = `api/v1/delete/${id}`
    return axios.get(URL)
        .then((res) => {
            if (res.status === 200) {
                return true
            } else {
                return false
            }
        })
        .catch((err) => {
            console.log(err);
            return false
        })
}