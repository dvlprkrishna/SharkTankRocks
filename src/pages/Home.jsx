import github from "/github.png";
import twitter from "/twitter.png";

import "../App.css";
import Header from "./Header";
import MainList from "./MainList";

import Season1 from "../assets/season1.json";
import Season2 from "../assets/season2.json";
import { useEffect, useState } from "react";

const Home = () => {
  const [season, setSeason] = useState("Season1");

  const [currentSeason, setCurrentSeason] = useState(Season1);
  const [displayData, setDisplayData] = useState(currentSeason.slice(0, 11));
  const [displayCount, setDisplayCount] = useState(11);

  useEffect(() => {
    setDisplayData(currentSeason.slice(0, displayCount));
  }, [displayCount, currentSeason]);

  const loadMore = (e) => {
    e.preventDefault();
    setDisplayCount(displayCount + 11);
  };

  function handleSeasonChange(newSeason) {
    if (newSeason === "Season 2") {
      setCurrentSeason(Season2);
      setSeason("Season2");
    } else {
      setCurrentSeason(Season1);
      setSeason("Season1");
    }
  }
  return (
    <>
      <Header onSeasonChange={handleSeasonChange} season={season} />
      <h3 style={{ textAlign: "center" }}>Showing Results for - {season}</h3>
      <div className="mainListWrap">
        {displayData.map((elem) => {
          return <MainList elem={elem} key={elem.Brand} />;
        })}
      </div>
      <button className="loadMore" onClick={loadMore}>
        {displayCount <= currentSeason.length ? "Load More" : "All Deal Loaded"}
      </button>
      <footer>
        <div style={{ textAlign: "left" }}>
          <small>
            &copy; All trademarks, logos and brand names are the property of
            their respective owners. <br />
          </small>
          <small>
            &copy; {new Date().getFullYear()} All Right Reserved. Created By -
            <a
              href="https://krishnasahu.in"
              rel="noreferrer"
              target="_blank"
              style={{ marginLeft: "0.25em" }}
            >
              Krishna Sahu
            </a>
          </small>
        </div>
        <p>
          <a
            href="https://twitter.com/dvlprkrishna/"
            target="_blank"
            rel="noreferrer"
            style={{ marginRight: "1em" }}
          >
            <img src={twitter} width={30} alt="" />
          </a>
          <a
            href="https://github.com/dvlprkrishna/SharkTankRocks"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} width={30} alt="" />
          </a>
        </p>
      </footer>
    </>
  );
};

export default Home;
