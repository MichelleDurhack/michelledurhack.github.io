import { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import WebDeveloper from './components/WebDeveloper';
import GraphicDesign from './components/GraphicDesign';
import Handletterer from './components/Handletterer';
import AboutMe from './components/AboutMe';
import LinkBox from './components/LinkBox';

function App() {
  const [ theme, setTheme ] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`content-${theme}`}>
        <p>Michelle Durhack</p>
        <div className="main">
          <Switch>
            <Route path="/webdev" component={WebDeveloper}/>
            <Route path="/design" component={GraphicDesign}/>
            <Route path="/lettering" component={Handletterer}/>
            <Route path="/me" component={AboutMe}/>
            <Route path="/" exact component={LinkBox}/>
          </Switch>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
