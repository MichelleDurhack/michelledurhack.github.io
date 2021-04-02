import { NavLink as Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { ReactComponent as NameIcon } from "../svg/Name.svg";
import WebDeveloper from './WebDeveloper';
import GraphicDesign from './GraphicDesign';
import Handletterer from './Handletterer';
import AboutMe from './AboutMe';
import Footer from './Footer';

const SmallScreens = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Fragment>
      <div className="content">
        <div className={`nameBox nameStyle-${theme}`}>
          <Link to="/" className="homeLink"><NameIcon/></Link>
        </div>
        <div className="componentBox">
          <div className="placeholder"></div>
          <AboutMe />
          <Handletterer />
          <GraphicDesign />
          <WebDeveloper />
        </div>
        <Footer />
      </div>
      <div className={`background bkg-${theme}`}></div> 
    </Fragment>
  );
}
 
export default SmallScreens;
