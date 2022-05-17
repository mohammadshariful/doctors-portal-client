import React from "react";

const DoctorRow = ({ index, doctor, setDeleteDoctor }) => {
  const { img, name, speciality } = doctor;

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
        <label
          onClick={() => setDeleteDoctor(doctor)}
          htmlFor="delete-confirm-modal"
          className="btn btn-sm btn-error text-white modal-button"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
