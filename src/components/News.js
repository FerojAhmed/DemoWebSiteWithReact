import React from "react";
import NewsHeadline from "./NewsHeadline";

class News extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="container p-4">
          <h3 style={{ display: "block", marginBottom: "2em" }}>News</h3>
          <div
            style={{
              height: this.props.height ? this.props.height : "",
              overflow: "scroll",
              padding: ".5em",
            }}
          >
            <NewsHeadline
              date="12/02/2020"
              headline="Lorem ipsum dolor sit ametLorem ipsum dolor sit amet"
            />
            <NewsHeadline
              date="02/12/2020"
              headline="Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
