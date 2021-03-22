import { Fragment } from "react";

const GraphicDesign = () => {
  return (
    <Fragment>
      <div className="main">
        <div className="imageGrid">

          <div id="vapor1" className="imageCard">
            <img alt="something" className="image frontfacing" src="/vapor1.jpg" />         
            <div className="image backfacing"></div>
          </div>
          <div className="imageText image1">
            <div className="textBox">
              <span className="headerText">Free Work</span>
              <span className="subheaderText">Genre-Vaporwave</span>
              <p>First attempt at creating a vaporwave collage.</p>
            </div>
          </div>

          <div id="vapor2" className="imageCard">
            <img alt="something" className="image frontfacing" src="/vapor2.jpg" />         
            <div className="image backfacing"></div>
          </div>
          <div className="imageText image2">
            <div className="textBox">
              <span className="headerText">Free Work</span>
              <span className="subheaderText">Genre-Vaporwave</span>
              <p>First attempt at creating a vaporwave collage.</p>
            </div>
          </div>

        </div>
      </div>      

    </Fragment>
  );
}
 
export default GraphicDesign;
