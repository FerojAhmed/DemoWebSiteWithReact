import React from "react";
import ImgFeroj from "../assets/Feroj.jpg";
import ImgNone from "../assets/None.jpeg";

class Company extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="container p-4">
          <div className="row">
            <div className="col">
              <h3 style={{ display: "block", marginBottom: "1em" }}>Vision</h3>
              <h5
                style={{
                  textAlign: "center",
                  padding: "1em",
                  background: "#eee",
                  borderRadius: 6,
                  fontStyle: "italic",
                }}
              >
                Solving social problems using technology to get better
                livelihood
              </h5>
              <p
                style={{
                  textAlign: "justify",
                  marginBottom: ".5em",
                  marginTop: "1em",
                }}
              >Mauris ultrices porttitor arcu in placerat. Sed porttitor non tellus et tempus. Morbi velit tortor, malesuada at convallis nec, commodo sit amet dolor. Fusce facilisis metus et felis viverra, in fermentum justo maximus. Vivamus eget euismod nulla. Integer euismod blandit ligula, vel vestibulum orci ultricies nec. Curabitur egestas varius metus, sit amet malesuada est condimentum et. Maecenas cursus luctus est eget finibus.
                <br />
                <br />Mauris ultrices porttitor arcu in placerat. Sed porttitor non tellus et tempus. Morbi velit tortor, malesuada at convallis nec, commodo sit amet dolor. Fusce facilisis metus et felis viverra, in fermentum justo maximus. Vivamus eget euismod nulla. Integer euismod blandit ligula, vel vestibulum orci ultricies nec. Curabitur egestas varius metus, sit amet malesuada est condimentum et. Maecenas cursus luctus est eget finibus.
                <br />
                <br />Mauris ultrices porttitor arcu in placerat. Sed porttitor non tellus et tempus. Morbi velit tortor, malesuada at convallis nec, commodo sit amet dolor. Fusce facilisis metus et felis viverra, in fermentum justo maximus. Vivamus eget euismod nulla. Integer euismod blandit ligula, vel vestibulum orci ultricies nec. Curabitur egestas varius metus, sit amet malesuada est condimentum et. Maecenas cursus luctus est eget finibus.
              </p>
            </div>
          </div>
          <div className="row" style={{ marginTop: "4em" }}>
            <div className="col">
              <h3 style={{ display: "block", marginBottom: "1em" }}>
              Mauris ultrices porttitor 
              </h3>
              <p
                style={{
                  textAlign: "justify",
                  marginBottom: ".5em",
                }}
              >
                <ul style={{ padding: "1em" }}>
                  <li>Mauris ultrices porttitor arcu in placerat.</li>
                  <li>Mauris ultrices porttitor arcu in placerat.
                  </li>
                  <li>Mauris ultrices porttitor arcu in placerat.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="row" style={{ marginTop: "4em" }}>
            <div className="col">
              <h3 style={{ display: "block", marginBottom: "1em" }}>
                Corporate Profile
              </h3>
              <table
                className="table table-sm table-bordered table-responsive-sm"
                m-4
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        background: "#eee",
                        textAlign: "center",
                        padding: "0 1em",
                        verticalAlign: "middle",
                      }}
                    >
                      Compnay Name
                    </td>
                    <td>Mauris ultrices </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        background: "#eee",
                        textAlign: "center",
                        padding: "0 1em",
                        verticalAlign: "middle",
                      }}
                    >
                      Company Type
                    </td>
                    <td>Software Company</td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        background: "#eee",
                        textAlign: "center",
                        padding: "0 1em",
                        verticalAlign: "middle",
                      }}
                    >
                      Directors
                    </td>
                    <td>
                      Feroj Ahmed <br />
                     
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        background: "#eee",
                        textAlign: "center",
                        padding: "0 1em",
                        verticalAlign: "middle",
                      }}
                    >
                      No. of Employees
                    </td>
                    <td>100 people</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row" style={{ marginTop: "4em" }}>
            <div className="col">
              <img
                src={ImgFeroj}
                style={{ maxHeight: 200,maxWidth: 200, borderRadius: 100 }}
              />
              <span style={{ display: "block" }}>
                Feroj Ahmed
                <span style={{ fontSize: ".8rem", display: "block" }}>
                  CEO (Founder)
                </span>
              </span>
            </div>
            <div className="col">
              <img
                src={ImgNone}
                style={{ maxHeight: 200, borderRadius: 100 }}
              />
              <span style={{ display: "block" }}>
                XXXX
                <span style={{ fontSize: ".8rem", display: "block" }}>COO</span>
              </span>
            </div>
         
          </div>
        </div>
      </div>
    );
  }
}

export default Company;
