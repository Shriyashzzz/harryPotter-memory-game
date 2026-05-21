import { use, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { Board } from "./components/Board/Board";
import "./App.css";
import { getCharachters } from "./api/fetchApi";
import { Loading } from "./components/Loading/Loading";
function App() {
  const [charachterinfo, setCharachterInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadData() {
      try {
        setCharachterInfo(await getCharachters());
        setTimeout(() => {
          // just to show off the spinner to the user:p
          setLoading(false);
        }, 500);
      } catch (e) {
        setError(e.message);
      }
    }
    loadData();
  }, []);
  // show user
  if (error) {
    return <h1>Eroor:${error}</h1>;
  }
  if (loading) {
    return <Loading />;
  } else {
    return <Board hpInfo={charachterinfo} />;
  }
}

export default App;
