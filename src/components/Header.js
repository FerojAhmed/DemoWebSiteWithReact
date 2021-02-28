import React from "react";
import Logo from "../assets/companyLogo.png";
class Header extends React.Component {
  render() {
    return (
      <div
        className="row sticky-top "
        style={{
          background: "#fff",
          minHeight: 70,
          maxHeight: 100,
          alignItems: "center",
          borderBottom: "1px dotted #ddd",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12 text-center text-md-left">
              <a
                href="/"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "#1e60a9",
                }}
              >
                <img src={Logo} style={{ width: "30%" }} />
              </a>
            </div>
            <div
              className="col-lg-5 col-md-7 col-sm-12 d-flex flex-row justify-content-center justify-content-md-end"
              style={{
                alignItems: "center",
              }}
            >
              <a href="/" style={{ color: "#1e60a9" }}>
                Home
              </a>
              <a href="/news" style={{ color: "#1e60a9", marginLeft: "2em" }}>
                News
              </a>
              <a
                href="/business"
                style={{ color: "#1e60a9", marginLeft: "2em" }}
              >
                Business
              </a>
              <a
                href="/company"
                style={{ color: "#1e60a9", marginLeft: "2em" }}
              >
                Company
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
