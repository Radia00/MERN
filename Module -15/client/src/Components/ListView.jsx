import { useState, useEffect } from "react";
import { Delete, Read } from "../API/APIRequest";
import Loader from "./Common/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { errorToast, successToast } from "../Helper/ValidationHelper";
import { Link } from "react-router-dom";

const ListView = () => {
  let [DataList, SetDataList] = useState([]);

  useEffect(() => {
    Read().then((res) => {
        console.log(res.data);
      SetDataList(res.data);
    });
  }, []);

  // delete item
  const DeleteItem = (id) => {
    // console.log(id);
    Delete(id).then((res) => {
        // console.log(id);
      if (res === true) {
        successToast("Data deleted successfully");
        Read().then((res) => {
          SetDataList(res.data);
        });
      } else {
        errorToast("Data not deleted");
      }
    });
  };

  if (DataList.length > 0) {
    return (
      <div className="container mx-auto">
        <table className="table-auto w-full table-columns">
          <thead className="table-header-group ">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Date Of Birth</th>
              <th>Nationality</th>
              <th>Address</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Admission Date</th>
              <th>Courses</th>
            </tr>
          </thead>
          <tbody className="table-row-group text-center">
            {DataList.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.gender}</td>
                  <td>{data.dateOfBirth}</td>
                  <td>{data.nationality}</td>
                  <td>{data.address}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.admissionDate}</td>
                  <td>{data.courses}</td>
                  <td className="flex gap-3 justify-center w-auto">
                    <button
                      onClick={DeleteItem.bind(this, data._id)}
                      className="py-2 px-4 bg-red-500 text-white rounded-md"
                    >
                      Delete
                    </button>
                    <Link
                      // onClick={UpdateItem.bind(this, data._id)}
                      to={`/update/${data._id}`}
                      className="py-2 px-4 bg-blue-500 text-white rounded-md"
                    >
                      Update
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ToastContainer />
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default ListView;
