import React from "react";
class Instructor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="p-3">
        <br />
        Name: {this.props.instructor?.name || "Loading..."} <br />
        Email: {this.props.instructor?.email || "Loading..."} <br />
        Phone: {this.props.instructor?.phone || "Loading..."}
      </div>
    );
  }
}
export default Instructor;
