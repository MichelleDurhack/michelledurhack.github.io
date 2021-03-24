import React, { useContext } from 'react';
import { ThemeContext } from "../ThemeContext";


const Footer = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const moonClassName = theme === "light" ? "far fa-moon" : "fas fa-cloud-moon";

  return (
    <div className="main">
      <div className={"footer ftmain-" + theme}>
        <div className={"ftIcons fticons-" + theme}>
          <a href="https://www.instagram.com/thedeadellie/"><span id="fticon-instagram" className="fab fa-instagram icon"></span></a>  
          <a href="https://www.behance.net/michelledurhack"><span id="fticon-behance" className="fab fa-behance icon"></span></a>
          <a href="https://www.linkedin.com/in/michelle-durhack-33849520a/"><span id="fticon-linkedin" className="fab fa-linkedin-in icon"></span></a>  
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
