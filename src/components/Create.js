import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../EmployeDetails/EmployeeAPI";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [eid, setEid] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API_URL, {
      name,
      eid,
      dob,
      address,
      email,
      mobile,
    });
    setAddress("");
    setDob("");
    setEid("");
    setEmail("");
    setName("");
    setMobile("");
    alert("New Employee Added Successfully");
    navigate("/Read");
  };
  const handleReset = () => {
    setAddress("");
    setDob("");
    setEid("");
    setEmail("");
    setName("");
    setMobile("");
  };

  return (
    <div className="container">
      <h1 className="text-center text-dark rounded-3 p-2">Add Details</h1>
      <div>
        <div className="card mx-auto p-2 mt-3">
          <form onSubmit={handleSubmit} className="mt-3 mx-3">
            <div className="row">
              <div className="col-12">
                <label
                  className="form-label ps-2"
                  style={{ fontWeight: "500" }}
                >
                  Name{" "}
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                  className="form-control"
                  placeholder="Employee Name"
                  required
                ></input>
              </div>
              <div className="col-12">
                <label
                  className="form-label ps-2 "
                  style={{ fontWeight: "500" }}
                >
                  ID{" "}
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setEid(e.target.value);
                  }}
                  value={eid}
                  className="form-control"
                  placeholder="Employee ID"
                  required
                ></input>
              </div>
              <div className="col-12">
                <label
                  className="form-label ps-2 "
                  style={{ fontWeight: "500" }}
                >
                  DOB{" "}
                </label>
                <input
                  type="date"
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                  value={dob}
                  className="form-control"
                ></input>
              </div>
              <div className="col-12">
                <label
                  className="form-label ps-2"
                  style={{ fontWeight: "500" }}
                >
                  Address{" "}
                </label>
                <input
                  type="text-area"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  value={address}
                  className="form-control"
                  placeholder="Employee Address"
                ></input>
              </div>
              <div className="col-12">
                <label
                  className="form-label ps-2 "
                  style={{ fontWeight: "500" }}
                >
                  Email{" "}
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  className="form-control"
                  placeholder=" Employee Email"
                ></input>
              </div>
              <div className="col-12">
                <label
                  className="form-label ps-2 "
                  style={{ fontWeight: "500" }}
                >
                  Mobile No{" "}
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                  value={mobile}
                  className="form-control"
                  placeholder="Employee Mobile No"
                ></input>
              </div>
              <div className="d-flex justify-content-center pt-2 pb-2 mt-3">
                <button type="submit" className="btn btn-primary me-4">
                  Submit
                </button>
                <button
                  type="reset"
                  onClick={handleReset}
                  className="btn btn-danger "
                >
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
