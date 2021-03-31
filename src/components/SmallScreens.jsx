import { NavLink as Link } from "react-router-dom";
import { useContext } from "react";
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
    <div className={`background bkg-${theme}`}>
      <div className="content">
        <div className={`nameBox nameStyle-${theme}`}>
          <Link to="/" className="homeLink"><NameIcon/></Link>
        </div>
        <div className="componentBox">
          <AboutMe />
          <Handletterer />
          <GraphicDesign />
          <WebDeveloper />
        </div>
        <Footer />
      </div>
    </div> 
  );
}
 
export default SmallScreens;
