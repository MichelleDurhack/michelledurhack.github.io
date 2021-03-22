import { Fragment, useContext } from "react";
import { ThemeContext } from './../ThemeContext';

const GraphicDesign = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Fragment>
      <div className="headerbox">
        <h2 id={`designCaption-${theme}`}>My Print Works</h2>
      </div>

      <div className="main">
        <div className="imageGrid">

          <div id="vapor1" className="imageCard">
            <img alt="something" className="image frontfacing" src="media/vapor1.jpg" />         
            <div className={`image no1-${theme} backfacing`}></div>
          </div>
          <div className="imageText image1">
            <div className="textBox">
              <span className={`headerText text1-${theme}`}>Free Work</span>
              <span className={`subheaderText mainText1-${theme}`}>Vaporwave</span>
              <p className={`mainText1-${theme}`}>First attempt at creating a vaporwave collage.</p>
            </div>
          </div>

          <div id="vapor2" className="imageCard">
            <img alt="something" className="image frontfacing" src="media/vapor2.jpg" />         
            <div className={`image no2-${theme} backfacing`}></div>
          </div>
          <div className="imageText image2">
            <div className="textBox">
              <span className={`headerText text2-${theme}`}>Free Work</span>
              <span className={`subheaderText mainText2-${theme}`}>Vaporwave</span>
              <p className={`mainText2-${theme}`}>Continuing to explore the vaporwave genre.</p>
            </div>
          </div>

          <div id="vapor3" className="imageCard">
            <img alt="something" className="image frontfacing" src="media/vapor3.jpg" />         
            <div className={`image no3-${theme} backfacing`}></div>
          </div>
          <div className="imageText image3">
            <div className="textBox">
              <span className={`headerText text3-${theme}`}>Free Work</span>
              <span className={`subheaderText mainText3-${theme}`}>Vaporwave</span>
              <p className={`mainText3-${theme}`}>Creating an editorial collage.</p>
            </div>
          </div>

          <div id="article1" className="imageCard imageCardDouble">
            <img className="imageDouble ffacingDouble1" src="media/vrphilosophy1.jpg" alt="first page of the article" />
            <img className="imageDouble ffacingDouble2" src="media/vrphilosophy2.jpg" alt="second page of the article" />
            <div className={`imageDouble bfacingDouble double-${theme}`}></div>
          </div>
          <div className="imageText image4">
            <div className="textBox">
              <span className={`headerText text4-${theme}`}>Student Newspaper</span>
              <span className={`subheaderText mainText4-${theme}`}>Article</span>
              <p className={`mainText4-${theme}`}>The first 2 pages of my 4 page article about the philosophy of Virtual Reality.</p>
            </div>
          </div>

          <div id="article2" className="imageCard imageCardDouble">
            <img className="imageDouble ffacingDouble1" src="media/vrphilosophy3.jpg" alt="first page of the article" />
            <img className="imageDouble ffacingDouble2" src="media/vrphilosophy4.jpg" alt="second page of the article" />
            <div className={`imageDouble bfacingDouble double-${theme}`}></div>
          </div>
          <div className="imageText image5">
            <div className="textBox">
              <span className={`headerText text4-${theme}`}>Student Newspaper</span>
              <span className={`subheaderText mainText4-${theme}`}>Article</span>
              <p className={`mainText4-${theme}`}>The final 2 pages of my 4 page article about the philosophy of Virtual Reality.</p>
            </div>
          </div>

          <div id="article3" className="imageCard">
            <img alt="something" className="image frontfacing" src="media/vaporwave.jpg" />         
            <div className={`image no4-${theme} backfacing`}></div>
          </div>
          <div className="imageText image6">
            <div className="textBox">
              <span className={`headerText text5-${theme}`}>Student Newspaper</span>
              <span className={`subheaderText mainText5-${theme}`}>Article</span>
              <p className={`mainText5-${theme}`}>An article about the genre vaporwave and explaining my fascination for it.</p>
            </div>
          </div>

          <div id="photo1" className="imageCard">
            <img alt="something" className="image frontfacing" src="media/tinyplant.jpg" />         
            <div className={`image no5-${theme} backfacing`}></div>
          </div>
          <div className="imageText image7">
            <div className="textBox">
              <span className={`headerText text6-${theme}`}>Free Work</span>
              <span className={`subheaderText mainText6-${theme}`}>Photography</span>
              <p className={`mainText6-${theme}`}>A photo I took in the "Landschaftspark Duisburg" as part of a series.</p>
            </div>
          </div>

          <div id="exercise1" className="imageCard">
            <img alt="something" className="image seriesImage frontfacing" src="media/uebersicht.jpg" />       
            <div className={`image no6-${theme} backfacing`}></div>
          </div>
          <div id="exercise2" className="imageCard">
            <img alt="something" className="image seriesImage frontfacing" src="media/lernkarte1.jpg" />       
            <div className={`image no7-${theme} backfacing`}></div>
          </div>
          <div id="exercise3" className="imageCard">
            <img alt="something" className="image seriesImage frontfacing" src="media/lernkarte2.jpg" />       
            <div className={`image no8-${theme} backfacing`}></div>
          </div>
          <div className="imageText image8">
            <div className="textBox">
              <span className={`headerText text7-${theme}`}>Work Sample</span>
              <span className={`subheaderText mainText7-${theme}`}>Graphic Design</span>
              <p className={`mainText7-${theme}`}>A work sample, created for an apprenticeship position.</p>
            </div>
          </div>

        </div>
      </div>      

    </Fragment>
  );
}
 
export default GraphicDesign;
