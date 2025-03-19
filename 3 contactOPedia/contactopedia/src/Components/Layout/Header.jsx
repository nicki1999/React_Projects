import logo from "../../Images/ReactLogo.png";
export default function Header() {
  return (
    <div style={{ backgroundColor: "black", borderBottom: "5px white solid" }}>
      <img
        src={logo}
        alt=""
        style={{ height: "120px", width: "120px" }}
        className="p-2"
      />
      <span
        style={{ color: "grey", fontSize: "40px", verticalAlign: "middle" }}
        className="px-4"
      >
        ContactOPedia
      </span>
    </div>
  );
}
