import React, { useState, useEffect } from "react";
import DesktopHeader from "./HeaderComponents/desktop-header.component";
import PhoneHeader from "./HeaderComponents/phone-header.component";

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 600);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 699);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return isDesktop ? <DesktopHeader /> : <PhoneHeader />;
};

export default Header;
