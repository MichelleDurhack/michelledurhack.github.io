import React, { useContext } from 'react';
import { LocalContext } from '../LocalContext';
import { ThemeContext } from './../ThemeContext';

const Local = () => {
  const { localENG, setLocalENG } = useContext(LocalContext);
  const { theme } = useContext(ThemeContext);
  const flagClass = localENG === "false" ? "media/germany.png" : "media/united-kingdom.png";
  return (
    <div className="main">
      <button className={`localBtn localBtn-${theme}`} onClick={() => localENG === "false" ? setLocalENG("true") : setLocalENG("false")}><img src={flagClass} alt="german flag icon"/></button>
    </div>
  );
}
 
export default Local;
