import React from "react";
import logo from "assets/images/logo.png";
import logoLight from "assets/images/logo-light.png";

const Logo = ({ className, type = "default" }) => {
  const logoSrc = type == "light" ? logoLight : logo;

  return (
    <div>
      <a href="/">
        <img src={logoSrc} alt="AllPS 로고" className={`${className}`} />
      </a>
    </div>
  );
};

export default Logo;
