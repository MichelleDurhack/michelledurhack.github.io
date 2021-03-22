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
          <div className="imageText">
            <div className="textBox">
              <span className="headerText image1">Free Work</span>
              <span className="subheaderText image1">Genre-Vaporwave</span>
              <p className="image1">First attempt at creating a vaporwave collage.</p>
            </div>
          </div>

          

        </div>
      </div>      

    </Fragment>
  );
}
 
export default GraphicDesign;
