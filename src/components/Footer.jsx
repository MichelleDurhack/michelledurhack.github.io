import React, { useContext } from 'react';
import { ThemeContext } from "../ThemeContext";


const Footer = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const moonClassName = theme === "light" ? "far fa-moon" : "fas fa-cloud-moon";

  return (
    <div className="main">
      <div className={"footer ftmain-" + theme}>
        <div className={"ftItem ftIcons fticons-" + theme}>
          <a href="https://www.linkedin.com/in/michelle-durhack-33849520a/"><span id="fticon-linkedin icon-top1" className="fab fa-linkedin-in icon"></span></a> 
          <a href="https://www.behance.net/michelledurhack"><span id="icon-top2" className="fab fa-behance icon"></span></a>
          <a href="https://www.instagram.com/thedeadellie/"><span id="icon-bottom1" className="fab fa-instagram icon"></span></a>
          <a href="https://github.com/MichelleDurhack"><span id="icon-bottom2" className="fab fa-github icon-bottom"></span></a>
        </div>
        <div className={"ftItem"}>
          <button name="Dark mode" className="buttonBox" onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")}>
            <span id={"mn mnicon-" + theme} className={moonClassName}></span>
            <p>Change up the mood</p>
          </button>
        </div>
      </div>
    </div>

  );
}
 
export default Footer;
