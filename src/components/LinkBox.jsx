import { Link } from "react-router-dom";

const LinkBox = () => {
  return (
    <div className="links-light">
    <ul className="links-list">
      <li className="links-list-item">
        <Link to="/me">ME</Link>
      </li>
      <li className="links-list-item">
        <Link to="/lettering">HANDLETTERER</Link>
      </li>
      <li className="links-list-item">
        <Link to="/design"> GRAPHIC DESIGNER</Link>
      </li>
      <li className="links-list-item">
        <Link to="/webdev">FULLSTACK WEBDEVELOPER</Link>
      </li>
    </ul>
  </div>
  );
}
 
export default LinkBox;
