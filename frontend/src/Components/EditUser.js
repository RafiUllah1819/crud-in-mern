import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const EditUser = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("param id", id);
  const [state, setState] = useState({
    name: "",
    address: "",
    contact: "",
  });

  const onChangeName = (e) => {
    const copy = { ...state };
    copy.name = e.target.value;
    setState(copy);
  };
  const onChangeAddress = (e) => {
    const copy = { ...state };
    copy.address = e.target.value;
    setState(copy);
  };
  const onChangeContact = (e) => {
    const copy = { ...state };
    copy.contact = e.target.value;
    setState(copy);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/" + id)
      .then((response) => {
        setState({
          name: response.data.name,
          address: response.data.address,
          contact: response.data.contact,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const obj = {
      name: state.name,
      address: state.address,
      contact: state.contact,
    };
    console.log("obj data", obj);
    axios
      .post("http://localhost:5000/users/update/" + id, obj)
      .then((res) => console.log("updated data ", res.data));
    setState({
      name: "",
      address: "",
      contact: "",
    });
    navigate("/userlist");
  };

  return (
    <div className="app">
      <div className="form-section ">
        <div className="form-group mb-2">
          <input
            type="email"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            value={state.name}
            onChange={onChangeName}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter Address"
            value={state.address}
            onChange={onChangeAddress}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="number"
            className="form-control"
            id="contact"
            placeholder="Enter contact"
            value={state.contact}
            onChange={onChangeContact}
          />
        </div>
        <div className="user-btn">
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Update
          </button>
          <Link to="/userlist" className="listbtn">
            UsersList
          </Link>
        </div>
      </div>
    </div>
  );
};
