import React from "react";

const Logo = ({ className, type = "default" }) => {
  return (
    <div>
      <a href="/">
        <img src={type == "light" ? process.env.PUBLIC_URL + "/logo/logo-light.png" : process.env.PUBLIC_URL + "/logo/logo.png"} alt="AllPS 로고" className={`${className}`} />
      </a>
    </div>
  );
};

export default Logo;
