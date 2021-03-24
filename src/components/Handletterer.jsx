import { Fragment } from "react";

const Handletterer = () => {
  return (
    <Fragment>
      <div className="headerbox">
        <h2 className="handletterCaption">My handlettering works</h2>
      </div>

      <div className="main">
        <div className="letteringGrid">

          <div id="moodtracker1" className="letteringCard">
            <img className="lettering frontwards" src="media/moodtracker1.jpg" alt="Moodtracker Header"/>
            <div id="backwards1" className="lettering backwards"></div>
          </div>
          <div id="letteringText1" className="letteringText">
            <div className="letteringBox">
              <span className="letHeader">Free Work</span>
              <span className="letSubheader">bulletjournal</span>
              <p className="letText">When starting my bulletjournal I experimented with a lot of different header styles.</p>
            </div>
          </div>

          <div id="moodtracker2" className="letteringCard">
            <img className="lettering frontwards" src="media/moodtracker2.jpg" alt="Moodtracker Header"/>
            <div id="backwards2" className="lettering backwards"></div>
          </div>
          <div id="letteringText2" className="letteringText">
            <div className="letteringBox">
              <span className="letHeader">Free Work</span>
              <span className="letSubheader">bulletjournal</span>
              <p className="letText">Another one of my header experimentations.</p>
            </div>
          </div>

          <div id="quote1" className="letteringCard">
            <img className="lettering frontwards" src="media/quote1.jpg" alt="Moodtracker Header"/>
            <div id="backwards3" className="lettering backwards"></div>
          </div>
          <div id="letteringText3" className="letteringText">
            <div className="letteringBox">
              <span className="letHeader">Free Work</span>
              <span className="letSubheader">bulletjournal</span>
              <p className="letText">One of the pages in my calendar setup. By far my favourite typeface creation.</p>
            </div>
          </div>

          <div id="worksample1" className="letteringCard">
            <img className="lettering etikette frontwards" src="media/ErdbeerEtikett.png" alt="Moodtracker Header"/>
            <div className="lettering etiketteback backwards"></div>
          </div>
          <div id="worksample2" className="letteringCard">
            <img className="lettering etikette frontwards" src="media/KirschEtikett.png" alt="Moodtracker Header"/>
            <div className="lettering etiketteback backwards"></div>
          </div>
          <div id="letteringText4" className="letteringText">
            <div className="letteringBox">
              <span className="letHeader">Free Work</span>
              <span className="letSubheader">etiquette design</span>
              <p className="letText">Creating a jam etiquette for a fake, all natural farming company. The design was inspired by mordern start up companies that have a strong handmade feel.</p>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  );
}
 
export default Handletterer;
