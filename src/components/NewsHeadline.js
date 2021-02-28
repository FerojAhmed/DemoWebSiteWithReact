import React from "react";

class NewsHeadline extends React.Component {
  render() {
    return (
      <div
        className="row p-1"
        style={{
          borderBottom: "1px dotted #ccc",
          display: "flex",
          fontSize: ".9rem",
        }}
      >
        <div
          className="col-lg-2 col-md-3 col-sm-12 text-justify"
          style={{ minWidth: "13%" }}
        >
          {this.props.date}
        </div>
        <div className="col-lg-10 col-md-9 col-sm-12 text-justify">
          {this.props.headline}
        </div>
      </div>
    );
  }
}

export default NewsHeadline;
