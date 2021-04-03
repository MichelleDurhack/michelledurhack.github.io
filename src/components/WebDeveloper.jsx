import { Fragment, useContext } from "react";
import { ThemeContext } from './../ThemeContext';
import { LocalContext } from './../LocalContext';
import { ReactComponent as Monstera} from "../svg/Monsterra.svg"; 

const WebDeveloper = () => {
  const { theme } = useContext(ThemeContext);
  const { localENG } = useContext(LocalContext);

  const text = localENG === "true" ? "There isn't a lot to show yet. Have you seen my website tho? Pretty cool huh? Made with React, SASS and cool gradients. Check back here later, more projects to come. Make sure to check out my skills page, where you can see what my other skills are! To check out this websites GitHub repository click" : "Es gibt noch nicht viel zu zeigen, aber hast du meine Website schon gesehen? Gemacht mit React, Sass und coolen Verläufen. Schau doch später nochmal vorbei, hier werden bald mehr Projekte zu finden sein. Auf meiner Kenntnisse Seite findest du die ganzen Fähigkeiten die ich habe. Den Link zu dem GitHub Repository gibt es ";
  const anchor = localENG === "true" ? "here.": "hier.";
  return (
    <Fragment>
      <div className="headerbox">
        <h1 id={`devCaption-${theme}`}>Fullstack Web Developer</h1>
      </div>

      <div className="main">
        <div className="textBlock">
          <p className={`textarea-${theme}`}>
            {text}
            <a className={`repoLink-${theme}`} href="https://github.com/MichelleDurhack/michelledurhack.github.io">{anchor}</a>
          </p>
          <img src="https://media.giphy.com/media/111ebonMs90YLu/giphy.gif" className="webdevGif" alt="Thumbs up gif"/>
        </div>
      </div> 
      <div className={`monsteraStyle monsteraStyle-${theme}`}>
        <Monstera />
      </div>
    </Fragment>
  );
}
 
export default WebDeveloper;
