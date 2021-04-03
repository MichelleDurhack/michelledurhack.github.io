import { useEffect, useState } from 'react';
import { ThemeContext } from "./ThemeContext";
import { LocalContext } from './LocalContext';
import BigScreens from "./components/BigScreens";
import SmallScreens from "./components/SmallScreens";


function App() {
  let storage = "";
  if (localStorage.getItem("darkmode") === "true") {
    storage = "dark";
  }
  else {
    storage = "light"
  }

  let langStorage ="";
  if (localStorage.getItem("english") === "true") {
    langStorage = "english";
  }
  else {
    langStorage = "german";
  }

  const [isDesktop, setDesktop] = useState(window.innerWidth > 599);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 599);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  console.log(isDesktop);

  const [ theme, setTheme ] = useState(storage);
  const [ localENG, setLocalENG] = useState(langStorage);

  useEffect(
    () => {
      if (localENG === "english") {
        localStorage.setItem("english", true);
      }
      else {
        localStorage.setItem("english", false);
      }
    }
  )

  useEffect(
    () => {
      if (theme === "light") {
        localStorage.setItem("darkmode", false);
      }
      else {
        localStorage.setItem("darkmode", true);
      }
    },
    [theme]
  )

  return (
    <LocalContext.Provider value={{ localENG, setLocalENG }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {isDesktop ? <BigScreens/> : <SmallScreens />}
      </ThemeContext.Provider>
    </LocalContext.Provider>
  );
}

export default App;
