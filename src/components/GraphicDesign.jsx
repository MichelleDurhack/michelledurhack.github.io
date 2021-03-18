import { Fragment } from "react";

const GraphicDesign = () => {
  return (
    <Fragment>
      <div className="headerbox">
        <h2>Graphic Design</h2>
      </div>
      <div className="main">

      <div className="graphCardContainer">
        <div id="vapor1" className="graphicCard">
          <div className="conFront front">
            <div className="mainContent">
            </div>
          </div>
          <div className="conFront back">
            <h2>Vaporwave</h2>
          </div>
        </div>
      </div>

      <div className="graphCardContainer">
        <div id="vapor2" className="graphicCard">
          <div className="conFront front">
            <div className="mainContent">
            </div>
          </div>
          <div className="conFront back">
            <h2>Vaporwave</h2>
          </div>
        </div>
      </div>

      <div className="graphCardContainer">
        <div id="vapor3" className="graphicCard">
          <div className="conFront front">
            <div className="mainContent">
            </div>
          </div>
          <div className="conFront back">
            <h2>Vaporwave</h2>
          </div>
        </div>
      </div>

      </div>
    </Fragment>
  );
}
 
export default GraphicDesign;
