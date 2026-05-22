import { use, useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { Board } from "./components/Board/Board";
import "./App.css";
import { getCharachters } from "./api/fetchApi";
import { Loading } from "./components/Loading/Loading";
import Header from "./components/Header/Header";
function App() {
  const [charachterinfo, setCharachterInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  //-------------Dev code: to check how many time react is rendering-------------------
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log(`Component rendered ${renderCount.current} times`);
  });

  //*-------------Dev code: to check how many time react is rendering-------------------*

  useEffect(() => {
    async function loadData() {
      try {
        setCharachterInfo(await getCharachters());
        setTimeout(() => {
          // just to show off the spinner to the user:p
          setLoading(false);
        }, 200);
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
    return (
      <>
        {" "}
        <Header count={count} bestScore={bestScore} />
        <Board
          hpInfo={charachterinfo}
          count={count}
          setCount={setCount}
          sethpInfo={setCharachterInfo}
          setBestScore={setBestScore}
          bestScore={bestScore}
        />
      </>
    );
  }
}

export default App;
