import React from "react";
import Business1Image from "../assets/Research and Development.png";
import Business2Image from "../assets/Training & Outsousing.png";
class Business extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="container pt-4 pb-4">
          <h3>Business</h3>
          <div
            className="row"
            style={{
              margin: "3em 0",
              padding: "1em",
              borderRadius: 6,
              border: ".5px solid #efefef",
            }}
          >
            <h5
              style={{ display: "block", width: "100%", marginBottom: "2em" }}
            >
              Lorem ipsum dolor sit amet.
            </h5>
            <div
              className="col-lg-6 col-md-6 col-sm-12"
              style={{ alignItems: "center", display: "flex" }}
            >
              <img src={Business1Image} style={{ width: "90%" }} />
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-12 pt-4 pt-md-0 text-left"
              style={{
                alignItems: "center",
                display: "flex",
                fontSize: ".9rem",
              }}
            >
              <ol>
                <li>
                Mauris ultrices porttitor arcu in placerat. 
                </li>
                <li className="mt-2">
                Mauris ultrices porttitor arcu in placerat. 
                </li>
                <li className="mt-2">
                Mauris ultrices porttitor arcu in placerat. 
                </li>
                <li className="mt-2">
                Mauris ultrices porttitor arcu in placerat. 
                </li>
              </ol>
            </div>
          </div>
          <div
            className="row"
            style={{
              margin: "3em 0",
              padding: "1em",
              borderRadius: 6,
              border: ".5px solid #efefef",
            }}
          >
            <h5
              style={{ display: "block", width: "100%", marginBottom: "2em" }}
            >
              Mauris ultrices 
            </h5>
            <div
              className="col-lg-6 col-md-6 col-sm-12"
              style={{ alignItems: "center", display: "flex" }}
            >
              <img src={Business2Image} style={{ width: "90%" }} />
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-12 pt-4 pt-md-0 text-left"
              style={{
                alignItems: "center",
                display: "flex",
                fontSize: ".9rem",
              }}
            >
              <ol>
                <li>Mauris ultrices porttitor arcu in placerat. </li>
                <li className="mt-2">
                Mauris ultrices porttitor arcu in placerat. 
                </li>
                <li className="mt-2">Mauris ultrices porttitor arcu in placerat. 
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
