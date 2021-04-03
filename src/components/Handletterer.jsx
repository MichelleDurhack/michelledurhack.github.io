import { Fragment, useContext } from "react";
import { ThemeContext } from "./../ThemeContext";
import { LocalContext } from './../LocalContext';

const Handletterer = () => {
  const { theme } = useContext(ThemeContext);
  const { localENG } = useContext(LocalContext);

  const header = localENG === "true" ? "My handlettering works" : "Meine Handlettering Arbeiten";
  const freeWork = localENG === "true" ? "Free Work" : "Freie Arbeit";
  const bujo1 = localENG === "true" ? "When starting my bulletjournal I experimented with a lot of different header styles." : "Zu beginn meines Bullet Journal habe ich mit verschiedenen Titel Stilen experimentiert";
  const bujo2 = localENG === "true" ? "Another one of my header experimentations." : "Hier ist ein weiteres Experiment.";
  const bujo3 = localENG === "true" ? "One of the pages in my calendar setup. By far my favourite typeface creation." : "Eine Seite meines Kalender Setups. Bis jetzt meine absolut liebste Typeface.";
  const bujo4 = localENG === "true" ? "Creating a jam etiquette for a fake, all natural farming company. The design was inspired by mordern start up companies that have a strong handmade feel." : "Ein Etiketten Design für eine Fake Bio-Farmer Firma. Das Design ist inspiriert von modernen Startup Firmen, mit einem starken Handmade Eindruck";

  return (
    <Fragment>
      <div className="headerbox">
        <h2 id={`handletterCaption-${theme}`}>{header}</h2>
      </div>

      <div className="main">
        <div className="letteringGrid">

          <div id="moodtracker1" className="letteringCard">
            <img className="lettering frontwards" src="media/moodtracker1.jpg" alt="Moodtracker Header"/>
            <div id="backwards1" className={`lettering journal-${theme} backwards`}></div>
          </div>
          <div id="letteringText1" className="letteringText">
            <div className={`letteringBox journalText-${theme}`}>
              <span className={`letHeader journalHeader-${theme}`}>{freeWork}</span>
              <span className="letSubheader">bulletjournal</span>
              <p className="letText">{bujo1}</p>
            </div>
          </div>

          <div id="moodtracker2" className="letteringCard">
            <img className="lettering frontwards" src="media/moodtracker2.jpg" alt="Moodtracker Header"/>
            <div id="backwards2" className={`lettering journal-${theme} backwards`}></div>
          </div>
          <div id="letteringText2" className="letteringText">
            <div className={`letteringBox journalText-${theme}`}>
              <span className={`letHeader journalHeader-${theme}`}>{freeWork}</span>
              <span className="letSubheader">bulletjournal</span>
              <p className="letText">{bujo2}</p>
            </div>
          </div>

          <div id="quote1" className="letteringCard">
            <img className="lettering frontwards" src="media/quote1.jpg" alt="Moodtracker Header"/>
            <div id="backwards3" className={`lettering journal-${theme} backwards`}></div>
          </div>
          <div id="letteringText3" className="letteringText">
            <div className={`letteringBox journalText-${theme}`}>
              <span className={`letHeader journalHeader-${theme}`}>{freeWork}</span>
              <span className="letSubheader">bulletjournal</span>
              <p className="letText">{bujo3}</p>
            </div>
          </div>

          <div id="worksample1" className="letteringCard">
            <img className="lettering etikette frontwards" src="media/ErdbeerEtikett.png" alt="Moodtracker Header"/>
            <div className={`lettering etikette-${theme} etiketteback backwards`}></div>
          </div>
          <div id="worksample2" className="letteringCard">
            <img className="lettering etikette frontwards" src="media/KirschEtikett.png" alt="Moodtracker Header"/>
            <div className={`lettering etikette-${theme} etiketteback backwards`}></div>
          </div>
          <div id="letteringText4" className="letteringText">
            <div className={`letteringBox etiketteText-${theme}`}>
              <span className={`letHeader etiketteHeader-${theme}`}>{freeWork}</span>
              <span className="letSubheader">etiquette design</span>
              <p className="letText">{bujo4}</p>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  );
}
 
export default Handletterer;
