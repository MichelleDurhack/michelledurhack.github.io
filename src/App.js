import { useEffect, useState } from 'react';
import { ThemeContext } from "./ThemeContext";
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
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {isDesktop ? <BigScreens/> : <SmallScreens />}
    </ThemeContext.Provider>
  );
}

export default App;
