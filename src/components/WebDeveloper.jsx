import { Fragment, useContext } from "react";
import { ThemeContext } from './../ThemeContext';
import { ReactComponent as Monstera} from "../svg/Monsterra.svg"; 

const WebDeveloper = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Fragment>
      <div className="headerbox">
        <h1 id={`devCaption-${theme}`}>Fullstack Web Developer</h1>
      </div>

      <div className="main">

        <div className="devCards">

          <div className="devCard">
            <img className="devCardImage mainImage" src="/media/keyboardfrosted.jpg" alt="Background for first coding reference"/>
            <a className={`devCardImage textImage devCardImage-${theme}`} href="https://github.com/MichelleDurhack/michelledurhack.github.io">Portfolio Site -- Source Code</a>
          </div>

        </div>
         
      </div> 
      <div className={`monsteraStyle monsteraStyle-${theme}`}>
        <Monstera />
      </div>
    </Fragment>
  );
}
 
export default WebDeveloper;
