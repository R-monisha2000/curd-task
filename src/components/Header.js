import React from "react";
import "./Header.css";
import Logo from "../Assets/logo.png";

const Header = () => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <nav className="navbar navbar-expand-sm navbar-dark fixed-top ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/Home">
            {" "}
            <img src={Logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav">
              <li className="nav-item mx-auto">
                <a
                  className="nav-link"
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bolder",
                  }}
                  href="/Create"
                ></a>
              </li>
              <li className="nav-item mx-auto">
                <a
                  className="nav-link"
                  href="/Read"
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bolder",
                  }}
                >
                  {" "}
                  All Employee Details
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
