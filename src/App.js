import { Route, Switch } from "react-router-dom";
import WebDeveloper from './components/WebDeveloper';
import GraphicDesign from './components/GraphicDesign';
import Handletterer from './components/Handletterer';
import AboutMe from './components/AboutMe';
import LinkBox from './components/LinkBox';

function App() {
  return (
    <div className="content">
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
  );
}

export default App;
