import { useState } from 'react';
import { Route, Switch } from "react-router-dom";
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
      <div className={`content content-${theme}`}>
        <p>Michelle Durhack</p>
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
    </ThemeContext.Provider>
  );
}

export default App;
