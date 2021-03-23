import { useState } from 'react';
import { Route, Switch, NavLink } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import WebDeveloper from './components/WebDeveloper';
import GraphicDesign from './components/GraphicDesign';
import Handletterer from './components/Handletterer';
import AboutMe from './components/AboutMe';
import LinkBox from './components/LinkBox';
import Footer from './components/Footer';

function App() {
  const [ theme, setTheme ] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`background bkg-${theme}`}>
        <div className={`content content-${theme}`}>
          <NavLink to="/" className="mainpageLink">Michelle Durhack</NavLink>
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
    </ThemeContext.Provider>
  );
}

export default App;
