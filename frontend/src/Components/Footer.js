import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-3">
      <div className="container-fluid text-center text-md-left">
        <div className="row justify-content-center">
          <div className="col-md-3 mb-md-0 mb-3">
            <h6 className="text-uppercase">Home</h6>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h6 className="text-uppercase">Address</h6>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h6 className="text-uppercase">Contact</h6>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-2">
        © 2020 Copyright:
        <Link to="/"> MERN App</Link>
      </div>
    </footer>
  );
};
