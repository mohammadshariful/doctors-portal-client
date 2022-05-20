import React, { useState } from "react";
import { useQuery } from "react-query";
import ConfirmDeleteModal from "../Shared/ConfirmDeleteModal/ConfirmDeleteModal";
import Loading from "../Shared/Loading/Loading";
import DoctorRow from "./DoctorRow";
const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("https://doctorsprotal2022.herokuapp.com/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-2xl text-center">
        Manage Doctors( {doctors?.length})
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>List</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Speciality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorRow
                key={doctor._id}
                doctor={doctor}
                index={index}
                setDeleteDoctor={setDeleteDoctor}
              />
            ))}
          </tbody>
        </table>
      </div>
      {deleteDoctor && (
        <ConfirmDeleteModal
          deleteDoctor={deleteDoctor}
          refetch={refetch}
          setDeleteDoctor={setDeleteDoctor}
        />
      )}
    </div>
  );
};

export default ManageDoctors;
