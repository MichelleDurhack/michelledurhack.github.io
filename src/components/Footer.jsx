import React, { useContext } from 'react';
import { ThemeContext } from "../ThemeContext";


const Footer = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const moonClassName = theme === "light" ? "far fa-moon" : "fas fa-cloud-moon";

  return (
    <div className={"footer-main-" + theme}>
      <div className={"footer-main-icons-" + theme}>
        <span id="footer-icon-instagram" className="fab fa-instagram icon"></span>
        <span id="footer-icon-behance" className="fab fa-behance icon"></span>
        <span id="footer-icon-linkedin" className="fab fa-linkedin-in icon"></span>
      </div>
      <div className={"footer-main-text-" + theme}>
        <div className={"footer-main-text-item-" + theme} onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")}>
          <span id={"moon-icon-" + theme} className={moonClassName}></span>
        </div>
        <div className={"footer-main-text-item-" + theme} onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")}>
          <p className={"darkModeText-" + theme}>Change up the mood</p>
          {console.log(theme)}
        </div>
      </div>
    </div>
  );
}
 
export default Footer;
