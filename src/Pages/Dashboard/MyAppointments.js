import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
const MyAppointments = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      const url = `http://localhost:5000/booking?patient=${user?.email}`;
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/login");
          } else {
            return res.json();
          }
        })
        .then((data) => setAppointments(data));
    }
  }, [user]);
  return (
    <div>
      <h2>My Appointment {appointments?.length}</h2>
      <div className="overflow-x-auto mt-3">
        <table className="table w-full">
          <thead>
            <tr>
              <th>List</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {appointments?.map((appointment, index) => (
              <tr key={appointment._id}>
                <th>{index + 1}</th>
                <td>{appointment.patinetName}</td>
                <td>{appointment.date}</td>
                <td>{appointment.slot}</td>
                <td>{appointment.treatment}</td>
                <td>
                  {appointment.price && appointment.paid ? (
                    <span className="text-success">Paid</span>
                  ) : (
                    <button
                      onClick={() =>
                        navigate(`/dashboard/payment/${appointment._id}`)
                      }
                      className="btn-success btn btn-sm text-white"
                    >
                      Pay
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
