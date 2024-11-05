const Student = (props) => {
  return (
    <div className="Container p-1 col-4">
      <div className="row border">
        <div className="col-2">
          <img src={props.headshot} className="w-100"></img>
        </div>
        <div className="col-8">
          {" "}
          {props.name} <br /> coding experience {props.experience} years{" "}
        </div>
        <div className="col-2">{props.children}</div>
      </div>
    </div>
  );
};

export default Student;
