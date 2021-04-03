import { Fragment, useContext } from 'react';
import { ThemeContext } from './../ThemeContext';
import { LocalContext } from './../LocalContext';

const AboutMe = () => {
  const { theme } = useContext(ThemeContext);
  const { localENG } = useContext(LocalContext);

  const header = localENG === "true" ? "My skills" : "Meine Kenntnisse";
  const devskills = localENG === "true" ? "Development Skills" : "Entwicklungs Fähigkeiten";
  return (
    <Fragment>
      <div className="headerbox">
        <h2 id={`aboutCaption-${theme}`}>{header}</h2>
      </div>

      <div className="main">
        <div className="container">

        <div className="card card1">
          <div className="face face1">
            <div className="cardcontent">
              <h2 className={`handlettering-${theme}`}>Handlettering</h2>
              <ul className={`handlettering-${theme}`}>
                <li>Brushlettering</li>
                <li>Calligraphy</li>
                <li>Faux Calligraphy</li>
                <li>Creative Lettering</li>
              </ul>
            </div>
          </div>
          <div className={`face face2 face2-${theme}`}>
            <h2>HA</h2>
          </div>
        </div>

        <div className="card card2">
          <div className="face face1">
            <div className="cardcontent">
              <h2 className={`webdev-${theme}`}>Web Development</h2>
              <ul className={`webdev-${theme}`}>
                <li>MongoDB</li>
                <li>ExpressJS</li>
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>PHP</li>
                <li>MySQL</li>
                <li>Flask</li>
                <li>HTML</li>
                <li>CSS/SASS</li>
              </ul>
            </div>
          </div>
          <div className={`face face2 face2-${theme}`}>
            <h2>WD</h2>
          </div>
        </div>

        <div className="card card3">
          <div className="face face1">
            <div className="cardcontent">
              <h2 className={`devskills-${theme}`}>{devskills}</h2>
              <ul className={`devskills-${theme}`}>
                <li>NPM</li>
                <li>RestAPI</li>
                <li>Git</li>
                <li>C</li>
                <li>Python</li>
                <li>Visual Studio Code</li>
              </ul>
            </div>
          </div>
          <div className={`face face2 face2-${theme}`}>
            <h2>DS</h2>
          </div>
        </div>

        <div className="card card4">
          <div className="face face1">
            <div className="cardcontent">
              <h2 className={`design-${theme}`}>Design</h2>
              <ul className={`design-${theme}`}>
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>Adobe InDesign</li>
                <li>Adobe XD</li>
                <li>Adobe Dimension</li>
              </ul>
            </div>
          </div>
          <div className={`face face2 face2-${theme}`}>
            <h2>DE</h2>
          </div>
        </div>

        </div>
      </div>
    </Fragment>
  );
}
 
export default AboutMe; 
