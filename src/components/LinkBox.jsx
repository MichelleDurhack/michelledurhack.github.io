import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from './../ThemeContext';
import { ReactComponent as Koi } from "../svg/Koi.svg";

const LinkBox = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="main">
      <div className={`links links-${theme}`}>
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
            <Link to="/webdev">FULLSTACK WEB DEVELOPER</Link>
          </li>
        </ul>
      </div>
      <div className={`koiStyle koiStyle-${theme}`}>
        <Koi />
      </div>
    </div>
  );
}
 
export default LinkBox;
