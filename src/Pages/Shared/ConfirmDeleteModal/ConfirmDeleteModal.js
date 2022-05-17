import React from "react";
import { toast } from "react-toastify";
const ConfirmDeleteModal = ({ deleteDoctor, refetch, setDeleteDoctor }) => {
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
          toast.success(`Doctor ${deleteDoctor.name} is deleted`);
          setDeleteDoctor(null);
          refetch();
        }
      });
  };

  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure want to delete {deleteDoctor.name}
          </h3>
          <p className="py-4">
            You've been selected {deleteDoctor.name} ! If you delete once time
            you can't back back dorctor.
          </p>
          <div className="modal-action">
            <button
              onClick={() => handleDelete(deleteDoctor.email)}
              className="btn btn-sm text-white btn-error"
            >
              Delete
            </button>
            <label htmlFor="delete-confirm-modal" className="btn btn-sm">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
