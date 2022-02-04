import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";

export const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((response) => {
      if (response) {
        setUsers(response.data);
      }
    });
  }, [users]);
  // console.log("users", users);

  const deleteData = (id) => {
    axios
      .delete(`http://localhost:5000/users/${id}`)
      // console.log("deleted id", id);
      .then((response) => console.log(response.data));
    setUsers(users.filter((user) => user._id !== id));
  };

  return (
    <div className="app">
      <div className="listwrapper">
        <div className="user-add-btn">
          <Link to="/">Add User</Link>
        </div>
        <div className="userslist">
          <table class="table table-striped">
            <thead>
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Contact</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user, i) => {
                  return (
                    <tr key={i}>
                      <td>{user.name}</td>
                      <td>{user.address}</td>
                      <td>{user.contact}</td>
                      <td>
                        <Link to={"/edit/" + user._id}>
                          <i className="fa fa-edit"></i>
                        </Link>
                      </td>
                      <td className="delete-data">
                        <button
                          onClick={() => {
                            if (window.confirm("DO you want to delete record"))
                              deleteData(user._id);
                          }}
                        >
                          <i
                            className="fa fa-trash"
                            style={{ color: "red" }}
                          ></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
