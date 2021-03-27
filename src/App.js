import { useState } from 'react';
import { Route, Switch, NavLink } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import WebDeveloper from './components/WebDeveloper';
import GraphicDesign from './components/GraphicDesign';
import Handletterer from './components/Handletterer';
import AboutMe from './components/AboutMe';
import LinkBox from './components/LinkBox';
import Footer from './components/Footer';
import { ReactComponent as Koi } from "./svg/Koi.svg";

function App() {
  const [ theme, setTheme ] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`background bkg-${theme}`}>
        <div className="content">
          <div className="nameBox">
            <NavLink to="/" className={`mainpageLink homeLink-${theme}`}>Michelle Durhack</NavLink>
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
      <div className={`koiStyle koiStyle-${theme}`}>
        <Koi />
      </div>  
    </ThemeContext.Provider>
  );
}

export default App;
