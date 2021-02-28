import React from "react";
import Banner1 from "../assets/Banner1.jpg";
import News from "./News";
import Business from "./Business";

class Home extends React.Component {
  render() {
    return (
      <div className="row">
        <div>
          <img src={Banner1} style={{ width: "100%", objectFit: "contain" }} />
        </div>
        <div className="container p-4">
          {/* <News height="200px" /> */}
          <Business />
        </div>
      </div>
    );
  }
}

export default Home;
