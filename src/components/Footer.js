import React from "react";
import FBImg from "../assets/facebook_logo.png";
import InstaImg from "../assets/instagram_logo.png";
import YBImg from "../assets/youtube_logo.png";
import Logo from "../assets/companyLogo.png";

class Footer extends React.Component {
  render() {
    return (
      <div
        className="row"
        style={{
          background: "#f8f8f8",
          alignItems: "center",
          padding: "2em 1em",
          borderTop: "1px solid #eee",
          color: "#444",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 text-center text-md-left ">
              <img src={Logo} style={{ width: "40%" }} />

              <p style={{ fontSize: ".9rem", marginTop: 5 }}>
                Mohammadpur, Dhaka
                <br />
                Bangladesh
                <br />
                Phone: +880 71000000
                <br />
                Email: info@example.com
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <h4 className="text-center text-md-left">Who we are?</h4>
              <p className="text-justify" style={{ fontSize: ".9rem" }}>
              Mauris volutpat a nunc tempor pharetra. Vestibulum sagittis semper varius. Phasellus facilisis nunc vitae porta semper. 
              </p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 text-center text-md-left "></div>
            <div className="col-lg-2 col-md-2 col-sm-12 text-center text-md-left ">
              <h4>Other Links</h4>
              <p style={{ fontSize: ".9rem" }}>
                <a href="/contact" style={{ display: "block" }}>
                  Contact
                </a>
                <a href="/career" style={{ display: "block" }}>
                  Career
                </a>
                <a href="/gallery" style={{ display: "block" }}>
                  Gallery
                </a>
              </p>
              <p>
                <a
                  href="https://www.facebook.com/"
                  style={{ display: "inline-block" }}
                  title="Facebook Page"
                >
                  <img src={FBImg} style={{ height: "24px" }} />
                </a>
                <a
                  href="https://www.instagram.com/"
                  style={{
                    display: "inline-block",
                  }}
                  title="Insagram Page"
                >
                  <img
                    src={InstaImg}
                    style={{ height: "24px", marginLeft: 10 }}
                  />
                </a>
                <a
                  href="https://www.youtube.com/"
                  style={{ display: "inline-block" }}
                  title="YouTube Channel"
                >
                  <img src={YBImg} style={{ height: "24px", marginLeft: 10 }} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
