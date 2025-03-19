import React from "react";
import Logo from "../../Images/ReactLogo.png";

function Header() {
  return (
    <div>
      <img src={Logo} alt="" />
      <span>ReduxOpedia</span>
    </div>
  );
}

export default Header;
