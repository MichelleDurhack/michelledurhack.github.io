import { Fragment, useContext } from "react";
import { ThemeContext } from './../ThemeContext';

const WebDeveloper = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Fragment>
      <div className="headerbox">
        <h1 id={`devCaption-${theme}`}>Fullstack Web Developer</h1>
      </div>

      <div className="main">
        <div className="textBlock">
          <p className={`textarea-${theme}`}>There isn't a lot to show yet. Have you seen my website 
            tho? Pretty cool huh? Made with React, SASS/SCSS and cool 
            gradients. Check back here later, more projects to come.
            Also check out my skills page, where you can see what my 
            other skills are!</p>
          <img src="https://media.giphy.com/media/111ebonMs90YLu/giphy.gif" alt="Thumbs up gif"/>
        </div>
      </div>
    </Fragment>
  );
}
 
export default WebDeveloper;
