import React from "react";
const InstructorFunc = (props) => {
  return (
    <div className="p-3">
      <br />
      Name: {props.instructor?.name || "Loading..."} <br />
      Email: {props.instructor?.email || "Loading..."} <br />
      Phone: {props.instructor?.phone || "Loading..."}
    </div>
  );
};
export default InstructorFunc;
