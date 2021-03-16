import { Fragment } from 'react';
const AboutMe = () => {
  return (
    <Fragment>
      <div className="headerbox">
        <h2 id="aboutCaption">About me and my skills</h2>
      </div>

      <div className="main">
        <div className="container">

        <div className="card">
          <div className="face face1">
            <div className="content">
              <h2 className="handlettering list">Handlettering</h2>
              <ul className="handlettering">
                <li>Brushlettering</li>
                <li>Calligraphy</li>
                <li>Faux Calligraphy</li>
                <li>Creative Lettering</li>
              </ul>
            </div>
          </div>
          <div className="face face2">
            <h2>HA</h2>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <h2 className="webdev">Web Development</h2>
              <ul className="webdev">
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
          <div className="face face2">
            <h2>WD</h2>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <h2 className="devskills">Development Skills</h2>
              <ul className="devskills">
                <li>NPM</li>
                <li>RestAPI</li>
                <li>Git</li>
                <li>C</li>
                <li>Python</li>
                <li>Visual Studio Code</li>
              </ul>
            </div>
          </div>
          <div className="face face2">
            <h2>DS</h2>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <h2 className="design">Design</h2>
              <ul className="design">
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>Adobe InDesign</li>
                <li>Adobe XD</li>
                <li>Adobe Dimension</li>
              </ul>
            </div>
          </div>
          <div className="face face2">
            <h2>DE</h2>
          </div>
        </div>

        </div>
      </div>
    </Fragment>
  );
}
 
export default AboutMe; 
