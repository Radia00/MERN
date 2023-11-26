import { useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { errorToast, isEmpty, successToast } from "../Helper/ValidationHelper";
import { Create } from "../API/APIRequest";
import Loader from "./Common/Loader";

const CreateForm = () => {
  let firstName,
    lastName,
    gender,
    nationality,
    dateOfBirth,
    address,
    email,
    phone,
    admissionDate,
    courses,
    LoaderController = useRef();

  const saveData = async () => {
    // data validation
    let student_firstName = firstName.value;
    let student_lastName = lastName.value;
    let student_gender = gender.value;
    let student_nationality = nationality.value;
    let student_dateOfBirth = dateOfBirth.value;
    let student_address = address.value;
    let student_email = email.value;
    let student_phone = phone.value;
    let student_admissionDate = admissionDate.value;
    let student_courses = courses.value;

    if (isEmpty(student_firstName)) {
      errorToast("First Name is required");
      return;
    } else if (isEmpty(student_lastName)) {
      errorToast("Last Name is required");
      return;
    } else if (isEmpty(student_gender)) {
      errorToast("Gender is required");
      return;
    } else if (isEmpty(student_nationality)) {
      errorToast("Nationality is required");
      return;
    } else if (isEmpty(student_dateOfBirth)) {
      errorToast("Date of Birth is required");
      return;
    } else if (isEmpty(student_address)) {
      errorToast("Address is required");
      return;
    } else if (isEmpty(student_email)) {
      errorToast("Email is required");
      return;
    } else if (isEmpty(student_phone)) {
      errorToast("Phone is required");
      return;
    } else if (isEmpty(student_admissionDate)) {
      errorToast("Admission Date is required");
    } else if (isEmpty(student_courses)) {
      errorToast("Courses is required");
      return;
    }

    LoaderController.classList.remove("hidden");
    const res = await Create(
      student_firstName,
      student_lastName,
      student_gender,
      student_nationality,
      student_dateOfBirth,
      student_address,
      student_email,
      student_phone,
      student_admissionDate,
      student_courses
    );
    if (res) {
      LoaderController.classList.add("hidden");
      successToast("Student Registered Successfully");
      firstName.value = "";
      lastName.value = "";
      gender.value = "";
      nationality.value = "";
      dateOfBirth.value = "";
      address.value = "";
      email.value = "";
      phone.value = "";
      admissionDate.value = "";
      courses.value = "";
    } else {
      errorToast("Student Registration Failed");
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold text-center my-10">
        Student Admission Form Demo
      </h1>
      <form
        className="mt-5 grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 gap-5"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-group  items-center gap-5">
          <label className="mb-3 inline-block" htmlFor="firstName">
            First Name :
          </label>
          <input
            type="text"
            ref={(el) => (firstName = el)}
            className="form-control border border-success w-full p-3"
            id="firstName"
          />
        </div>
        <div className="form-group  items-center gap-5">
          <label className="mb-3 inline-block" htmlFor="lastName">
            Last Name :
          </label>
          <input
            type="text"
            ref={(el) => (lastName = el)}
            className="form-control border border-success w-full p-3"
            id="lastName"
          />
        </div>
        <div className="form-group  items-center gap-5">
          <label className="mb-3 inline-block" htmlFor="gender">
            Gender :
          </label>
          <input
            type="text"
            ref={(el) => (gender = el)}
            className="form-control border border-success w-full p-3"
            id="gender"
          />
        </div>
        <div className="form-group  items-center gap-5">
          <label className="mb-3 inline-block" htmlFor="nationality">
            Nationality :
          </label>
          <input
            type="text"
            ref={(el) => (nationality = el)}
            className="form-control border border-success w-full p-3"
            id="nationality"
          />
        </div>
        <div className="form-group  items-center gap-5">
          <label className="mb-3 inline-block" htmlFor="dateOfBirth">
            Date Of Birth :
          </label>
          <input
            type="text"
            ref={(el) => (dateOfBirth = el)}
            className="form-control border border-success w-full p-3"
            id="dateOfBirth"
          />
        </div>
        <div className="form-group  items-center gap-5">
          <label className="mb-3 inline-block" htmlFor="address">
            Address :
          </label>
          <input
            type="text"
            ref={(el) => (address = el)}
            className="form-control border border-success w-full p-3"
            id="address"
          />
        </div>
        <div className="form-group  items-center gap-5">
          <label className="mb-3 inline-block" htmlFor="email">
            Email :
          </label>
          <input
            type="text"
            ref={(el) => (email = el)}
            className="form-control border border-success w-full p-3"
            id="email"
          />
        </div>
        <div className="form-group  items-center gap-5">
          <label className="mb-3 inline-block" htmlFor="phone">
            phone :
          </label>
          <input
            type="text"
            ref={(el) => (phone = el)}
            className="form-control border border-success w-full p-3"
            id="phone"
          />
        </div>
        <div className="form-group  items-center gap-5">
          <label className="mb-3 inline-block" htmlFor="admissionDate">
            Admission Date :
          </label>
          <input
            type="text"
            ref={(el) => (admissionDate = el)}
            className="form-control border border-success w-full p-3"
            id="admissionDate"
          />
        </div>
        <div className="form-group  items-center gap-5">
          <label className="mb-3 inline-block" htmlFor="courses">
            Courses :
          </label>
          <input
            type="text"
            ref={(el) => (courses = el)}
            className="form-control border border-success w-full p-3"
            id="courses"
          />
        </div>
      </form>
      <button
        type="submit"
        onClick={saveData}
        className="btn btn-primary bg-purple-950 py-3 text-white text-2xl rounded-2xl w-full mt-5"
      >
        Submit
      </button>
      <ToastContainer />
      <div className="hidden" ref={(el) => (LoaderController = el)}>
        <Loader />
      </div>
    </div>
  );
};

export default CreateForm;
