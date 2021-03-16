import React, { useContext } from 'react';
import { ThemeContext } from "../ThemeContext";


const Footer = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const moonClassName = theme === "light" ? "far fa-moon" : "fas fa-cloud-moon";

  return (
    <div className="main">
      <div className={"footer ftmain-" + theme}>
        <div className={"ftIcons fticons-" + theme}>
          <span id="fticon-instagram" className="fab fa-instagram icon"></span>
          <span id="fticon-behance" className="fab fa-behance icon"></span>
          <span id="fticon-linkedin" className="fab fa-linkedin-in icon"></span>
        </div>
        <div className={"ftText fttext-" + theme}>
          <div className={"ftItem ftitem-" + theme} onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")}>
            <span id={"mn mnicon-" + theme} className={moonClassName}></span>
          </div>
          <div className={"ftItem ftitem-" + theme} onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")}>
            <p className={"btn btnText-" + theme}>Change up the mood</p>
            {console.log(theme)}
          </div>
        </div>
      </div>
    </div>

  );
}
 
export default Footer;
