import React from "react";
import img1 from "./background.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container" style={{ marginTop: "140px" }}>
      <div className="d-flex justify-content-center mb-5">
        <i
          className="fa-solid fa-people-roof fa-2xl"
          style={{ color: "black", fontSize: "80px" }}
        ></i>
      </div>
      <div className="d-flex justify-content-end">
        <Link
          className="btn btn-#5f9ea0 mb-2 me-4"
          style={{ color: "black", fontWeight: "400" }}
          to={"/Create"}
        >
          <i className="fa-solid fa-plus"></i> Add New Employee
        </Link>
        <Link
          className="btn btn-#5f9ea0 mb-2"
          style={{ color: "black", fontWeight: "400" }}
          to={"/Read"}
        >
          <i class="fa-solid fa-list-check"></i> Employee Details
        </Link>
      </div>
      <h2 className="text-center bg-dark text-light py-3 rounded-3">
        Employee List
      </h2>
    </div>
  );
}

export default Home;
