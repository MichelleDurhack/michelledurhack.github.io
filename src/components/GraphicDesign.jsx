import { Fragment } from "react";

const GraphicDesign = () => {
  return (
    <Fragment>
      <div className="main">
        <div className="imageGrid">

          <div id="vapor1" className="imageCard">
            <img alt="something" className="image frontfacing" src="media/vapor1.jpg" />         
            <div className="image no1 backfacing"></div>
          </div>
          <div className="imageText image1">
            <div className="textBox">
              <span className="headerText">Free Work</span>
              <span className="subheaderText">Vaporwave</span>
              <p>First attempt at creating a vaporwave collage.</p>
            </div>
          </div>

          <div id="vapor2" className="imageCard">
            <img alt="something" className="image frontfacing" src="media/vapor2.jpg" />         
            <div className="image no2 backfacing"></div>
          </div>
          <div className="imageText image2">
            <div className="textBox">
              <span className="headerText">Free Work</span>
              <span className="subheaderText">Vaporwave</span>
              <p>Continuing to explore the vaporwave genre.</p>
            </div>
          </div>

          <div id="vapor3" className="imageCard">
            <img alt="something" className="image frontfacing" src="media/vapor3.jpg" />         
            <div className="image no3 backfacing"></div>
          </div>
          <div className="imageText image3">
            <div className="textBox">
              <span className="headerText">Free Work</span>
              <span className="subheaderText">Vaporwave</span>
              <p>Creating an editorial collage.</p>
            </div>
          </div>

          <div id="article1" className="imageCard imageCardDouble">
            <img className="imageDouble ffacingDouble1" src="media/vrphilosophy1.jpg" alt="first page of the article" />
            <img className="imageDouble ffacingDouble2" src="media/vrphilosophy2.jpg" alt="second page of the article" />
            <div className="imageDouble bfacingDouble"></div>
          </div>
          <div className="imageText image4">
            <div className="textBox">
              <span className="headerText">Student Newspaper</span>
              <span className="subheaderText">Article</span>
              <p>The first 2 pages of my 4 page article about the philosophy of Virtual Reality.</p>
            </div>
          </div>

          <div id="article2" className="imageCard imageCardDouble">
            <img className="imageDouble ffacingDouble1" src="media/vrphilosophy3.jpg" alt="first page of the article" />
            <img className="imageDouble ffacingDouble2" src="media/vrphilosophy4.jpg" alt="second page of the article" />
            <div className="imageDouble bfacingDouble"></div>
          </div>
          <div className="imageText image5">
            <div className="textBox">
              <span className="headerText">Student Newspaper</span>
              <span className="subheaderText">Article</span>
              <p>The final 2 pages of my 4 page article about the philosophy of Virtual Reality.</p>
            </div>
          </div>

          <div id="article3" className="imageCard">
            <img alt="something" className="image frontfacing" src="media/vaporwave.jpg" />         
            <div className="image no4 backfacing"></div>
          </div>
          <div className="imageText image6">
            <div className="textBox">
              <span className="headerText">Student Newspaper</span>
              <span className="subheaderText">Article</span>
              <p>An article about the genre vaporwave and explaining my fascination for it.</p>
            </div>
          </div>

          <div id="photo1" className="imageCard">
            <img alt="something" className="image frontfacing" src="media/tinyplant.jpg" />         
            <div className="image no5 backfacing"></div>
          </div>
          <div className="imageText image7">
            <div className="textBox">
              <span className="headerText">Free Work</span>
              <span className="subheaderText">Photography</span>
              <p>A photo I took in the "Landschaftspark Duisburg" as part of a series.</p>
            </div>
          </div>

        </div>
      </div>      

    </Fragment>
  );
}
 
export default GraphicDesign;
