import "./App.css";
import Header from "./pages/Header";
import MainList from "./pages/MainList";

import season1Data from "./assets/season1.json";
import season2Data from "./assets/season2.json";
import { useEffect, useState } from "react";

function App() {
  const [s1Data, setS1Data] = useState(season1Data);
  const [displayData, setDisplayData] = useState(s1Data.slice(0, 11));
  const [displayCount, setDisplayCount] = useState(11);

  useEffect(() => {
    setDisplayData(s1Data.slice(0, displayCount));
  }, [displayCount]);

  const loadMore = (e) => {
    e.preventDefault();
    setDisplayCount(displayCount + 11);
  };

  return (
    <>
      <Header />
      <div className="mainListWrap">
        {displayData.map((elem) => {
          return <MainList elem={elem} key={elem.Brand} />;
        })}
      </div>
      <button className="loadMore" onClick={loadMore}>
        {displayCount <= s1Data.length ? "Load More" : "All Deal Loaded"}
      </button>
    </>
  );
}

export default App;
