import { Fragment, useContext } from "react";
import { ThemeContext } from "./../ThemeContext";
import { LocalContext } from "./../LocalContext";

const GraphicDesign = () => {
  const { theme } = useContext(ThemeContext);
  const { localENG } = useContext(LocalContext);

  const header =
    localENG === "true" ? "My print works" : "Meine Print Arbeiten";
  const freeWork = localENG === "true" ? "Free Work" : "Freie Arbeit";
  const newspaper =
    localENG === "true" ? "Student Newspaper" : "Schülerzeitung";
  const worksample = localENG === "true" ? "Work Sample" : "Arbeitsproben";
  const application = localENG === "true" ? "Application" : "Bewerbung";
  const work1 =
    localENG === "true"
      ? "First attempt at creating a vaporwave collage."
      : "Mein erster Versuch eine Vaporwave Collage zu kreieren.";
  const work2 =
    localENG === "true"
      ? "Continuing to explore the vaporwave genre."
      : "Weiter Erkundung des Genres.";
  const work3 =
    localENG === "true"
      ? "Creating an editorial collage."
      : "Kreation einer Editorial Collage.";
  const work4 =
    localENG === "true"
      ? "The first 2 pages of my 4 page article about the philosophy of Virtual Reality."
      : "Die ersten beiden Seiten eines 4-seitigen Artikels über die Philosophie von Virtual Reality";
  const work5 =
    localENG === "true"
      ? "The final 2 pages of my 4 page article about the philosophy of Virtual Reality."
      : "Die letzten beiden Seiten eines 4-seitigen Artikels über die Philosophie von Virtual Reality";
  const work6 =
    localENG === "true"
      ? "An article about the genre vaporwave and explaining my fascination for it."
      : "Ein Artikel über das Genre Vaporwave und eine Erklärung meiner Faszination für das Genre.";
  const work7 =
    localENG === "true"
      ? "A photo I took in the `Landschaftspark Duisburg` as part of a series."
      : "Ein Bild aus einer Serie, aufgenommen im Landschaftspark Duisburg.";
  const work8 =
    localENG === "true"
      ? "A work sample, created for an apprenticeship position."
      : "Eine Arbeitsprobe für eine Ausbildungsstelle.";
  const work9 =
    localENG === "true"
      ? "A collage inspired by Graphic Designer Magdiel Lopez."
      : "Eine Collage inspiriert durch den Graphic Designer Magdiel Lopez.";
  const work10 =
    localENG === "true"
      ? "Application for an apprenticeship"
      : "Ausbildungsbewerbung";

  return (
    <Fragment>
      <div className="headerbox">
        <h2 id={`designCaption-${theme}`}>{header}</h2>
      </div>

      <div className="main">
        <div className="imageGrid">
          <div id="booklet1" className="imageCard">
            <img
              alt="Cover Crop from a booklet"
              className="image frontfacing"
              src="media/cover.png"
            />
            <div className={`image no10-${theme} backfacing`}></div>
          </div>
          <div className="imageText image10">
            <div className="textBox">
              <span className={`headerText text9-${theme}`}>{application}</span>
              <span className={`subheaderText mainText9-${theme}`}>
                Hyperwave
              </span>
              <p className={`mainText9-${theme}`}>{work10}</p>
              <p className={`mainText9-${theme}`}>
                <a
                  id={`bookletLink-${theme}`}
                  className={`mainText9${theme}`}
                  href="https://michelle-booklet.netlify.app"
                >
                  Link
                </a>
              </p>
            </div>
          </div>

          <div id="vapor1" className="imageCard">
            <img
              alt="something"
              className="image frontfacing"
              src="media/vapor1.jpg"
            />
            <div className={`image no1-${theme} backfacing`}></div>
          </div>
          <div className="imageText image1">
            <div className="textBox">
              <span className={`headerText text1-${theme}`}>{freeWork}</span>
              <span className={`subheaderText mainText1-${theme}`}>
                Vaporwave
              </span>
              <p className={`mainText1-${theme}`}>{work1}</p>
            </div>
          </div>

          <div id="vapor2" className="imageCard">
            <img
              alt="something"
              className="image frontfacing"
              src="media/vapor2.jpg"
            />
            <div className={`image no2-${theme} backfacing`}></div>
          </div>
          <div className="imageText image2">
            <div className="textBox">
              <span className={`headerText text2-${theme}`}>{freeWork}</span>
              <span className={`subheaderText mainText2-${theme}`}>
                Vaporwave
              </span>
              <p className={`mainText2-${theme}`}>{work2}</p>
            </div>
          </div>

          <div id="vapor3" className="imageCard">
            <img
              alt="something"
              className="image frontfacing"
              src="media/vapor3.jpg"
            />
            <div className={`image no3-${theme} backfacing`}></div>
          </div>
          <div className="imageText image3">
            <div className="textBox">
              <span className={`headerText text3-${theme}`}>{freeWork}</span>
              <span className={`subheaderText mainText3-${theme}`}>
                Vaporwave
              </span>
              <p className={`mainText3-${theme}`}>{work3}</p>
            </div>
          </div>

          <div id="article1" className="imageCard imageCardDouble">
            <img
              className="imageDouble ffacingDouble1"
              src="media/vrphilosophy1.jpg"
              alt="first page of the article"
            />
            <img
              className="imageDouble ffacingDouble2"
              src="media/vrphilosophy2.jpg"
              alt="second page of the article"
            />
            <div className={`imageDouble bfacingDouble double-${theme}`}></div>
          </div>
          <div className="imageText image4">
            <div className="textBox">
              <span className={`headerText text4-${theme}`}>{newspaper}</span>
              <span className={`subheaderText mainText4-${theme}`}>
                Article
              </span>
              <p className={`mainText4-${theme}`}>{work4}</p>
            </div>
          </div>

          <div id="article2" className="imageCard imageCardDouble">
            <img
              className="imageDouble ffacingDouble1"
              src="media/vrphilosophy3.jpg"
              alt="first page of the article"
            />
            <img
              className="imageDouble ffacingDouble2"
              src="media/vrphilosophy4.jpg"
              alt="second page of the article"
            />
            <div className={`imageDouble bfacingDouble double-${theme}`}></div>
          </div>
          <div className="imageText image5">
            <div className="textBox">
              <span className={`headerText text4-${theme}`}>{newspaper}</span>
              <span className={`subheaderText mainText4-${theme}`}>
                Article
              </span>
              <p className={`mainText4-${theme}`}>{work5}</p>
            </div>
          </div>

          <div id="article3" className="imageCard">
            <img
              alt="something"
              className="image frontfacing"
              src="media/vaporwave.jpg"
            />
            <div className={`image no4-${theme} backfacing`}></div>
          </div>
          <div className="imageText image6">
            <div className="textBox">
              <span className={`headerText text5-${theme}`}>{newspaper}</span>
              <span className={`subheaderText mainText5-${theme}`}>
                Article
              </span>
              <p className={`mainText5-${theme}`}>{work6}</p>
            </div>
          </div>

          <div id="photo1" className="imageCard">
            <img
              alt="something"
              className="image frontfacing"
              src="media/tinyplant.jpg"
            />
            <div className={`image no5-${theme} backfacing`}></div>
          </div>
          <div className="imageText image7">
            <div className="textBox">
              <span className={`headerText text6-${theme}`}>{freeWork}</span>
              <span className={`subheaderText mainText6-${theme}`}>
                Photography
              </span>
              <p className={`mainText6-${theme}`}>{work7}</p>
            </div>
          </div>

          <div id="exercise1" className="imageCard">
            <img
              alt="something"
              className="image seriesImage frontfacing"
              src="media/uebersicht.jpg"
            />
            <div className={`image no6-${theme} backfacing`}></div>
          </div>
          <div id="exercise2" className="imageCard">
            <img
              alt="something"
              className="image seriesImage frontfacing"
              src="media/lernkarte1.jpg"
            />
            <div className={`image no7-${theme} backfacing`}></div>
          </div>
          <div id="exercise3" className="imageCard">
            <img
              alt="something"
              className="image seriesImage frontfacing"
              src="media/lernkarte2.jpg"
            />
            <div className={`image no8-${theme} backfacing`}></div>
          </div>
          <div className="imageText image8">
            <div className="textBox">
              <span className={`headerText text7-${theme}`}>{worksample}</span>
              <span className={`subheaderText mainText7-${theme}`}>
                Graphic Design
              </span>
              <p className={`mainText7-${theme}`}>{work8}</p>
            </div>
          </div>

          <div id="graphic1" className="imageCard">
            <img
              alt="something"
              className="image frontfacing"
              src="media/girlcollage.png"
            />
            <div className={`image no9-${theme} backfacing`}></div>
          </div>
          <div className="imageText image9">
            <div className="textBox">
              <span className={`headerText text8-${theme}`}>{freeWork}</span>
              <span className={`subheaderText mainText8-${theme}`}>
                Vaporwave
              </span>
              <p className={`mainText8-${theme}`}>{work9}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GraphicDesign;
