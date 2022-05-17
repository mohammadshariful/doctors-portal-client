import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ index, doctor, refetch }) => {
  const { img, name, email, speciality } = doctor;

  //delete doctors
  const handleDelete = (email) => {
    const url = `http://localhost:5000/doctor/${email}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount) {
          toast.success(`Doctor ${name} is deleted`);
          refetch();
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className=" w-10 lg:w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{speciality}</td>
      <td>
        <button
          onClick={() => handleDelete(email)}
          className="btn btn-sm text-white btn-error"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DoctorRow;
