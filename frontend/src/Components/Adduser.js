import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Adduser = () => {
  const navigate = useNavigate();
  const [valid, setValid] = useState(false);
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

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, address, contact } = state;
    if (name.length < 1 || address.length < 1 || contact.length < 1) {
      setValid(true);
    } else {
      const obj = { name, address, contact };
      console.log("obj data", obj);
      axios
        .post("http://localhost:5000/users/add", obj)
        .then((res) => console.log(res.data));
      setState({
        name: "",
        address: "",
        contact: "",
      });
      navigate("/userlist");
    }
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
          {valid && state.name === "" ? (
            <span className="text-danger">Field is required</span>
          ) : null}
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
          {valid && state.name === "" ? (
            <span className="text-danger">Address is required</span>
          ) : null}
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
          {valid && state.name === "" ? (
            <span className="text-danger">Contact is required</span>
          ) : null}
        </div>
        <div className="user-btn">
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Submit
          </button>
          <Link to="/userlist" className="listbtn">
            UsersList
          </Link>
        </div>
      </div>
    </div>
  );
};
