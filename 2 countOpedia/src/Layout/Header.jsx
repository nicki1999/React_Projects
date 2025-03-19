import logo from "../images/react.png";
function MainHeader() {
  return (
    <div
      className="pt-2 py-2"
      style={{
        backgroundColor: "black",
        color: "grey",
        fontSize: "40px",
      }}
    >
      <img src={logo} style={{ height: "80px", paddingLeft: "10px" }} />
      <span style={{ paddingLeft: "40px" }}>REACT COURSE - TaskOPedia</span>
    </div>
  );
}

const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgrey",
  padding: "0",
};

function SubHeader() {
  return <p style={subHeaderStyle}>This will be an exciting course!</p>;
}

const Header = () => {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
};

export default Header;
