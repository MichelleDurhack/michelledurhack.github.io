import React, { useContext, Fragment } from 'react';
import { ThemeContext } from "../ThemeContext";
import { LocalContext } from './../LocalContext';
import Local from "./Local";


const Footer = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { localENG } = useContext(LocalContext);
  const moonClassName = theme === "light" ? "far fa-moon" : "fas fa-cloud-moon";
  const textClass = localENG === "true" ? "Change up the mood" : "Verändere die Stimmung";

  return (
    <Fragment>
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
            <p>{textClass}</p>
          </button>
        </div>
      </div>
      <div className="licenses">
        <a className={`anchorText anchor-${theme}`} href="https://www.flaticon.com/authors/freepik">Flag Credits</a>
      </div>
      <Local />
    </div>
    
    </Fragment>
  );
}
 
export default Footer;
