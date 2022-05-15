import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
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
      <h2 className="text-2xl text-center">All Users: ({users.length})</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>List</th>
              <th>Name</th>
              <th>Admin</th>
              <th>Romove Admin</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <UserRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
