import { Route, Switch, NavLink as Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { ReactComponent as NameIcon } from "../svg/Name.svg";
import WebDeveloper from './WebDeveloper';
import GraphicDesign from './GraphicDesign';
import Handletterer from './Handletterer';
import AboutMe from './AboutMe';
import LinkBox from './LinkBox';
import Footer from './Footer';


const BigScreens = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`background bkg-${theme}`}>
      <div className="content">
        <div className={`nameBox nameStyle-${theme}`}>
          <Link to="/" className="homeLink"><NameIcon/></Link>
        </div>
        <div className="componentBox">
          <Switch>
            <Route path="/webdev" component={WebDeveloper}/>
            <Route path="/design" component={GraphicDesign}/>
            <Route path="/lettering" component={Handletterer}/>
            <Route path="/me" component={AboutMe}/>
            <Route path="/" exact component={LinkBox}/>
          </Switch>
        </div>
        <Footer />
      </div>
    </div> 
  );
}
 
export default BigScreens;
