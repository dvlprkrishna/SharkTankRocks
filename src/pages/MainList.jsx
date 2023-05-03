import "../assets/css/MainList.css";
import viteLogo from "/vite.svg";
import reactLogo from "../assets/react.svg";

const MainList = () => {
  return (
    <>
      <div className="card">
        <div className="cardBranding">
          <img src={viteLogo} alt="" />
          <div className="investors">
            <img src={reactLogo} className="logo react" alt="React logo" />
            <img src={reactLogo} className="logo react" alt="React logo" />
            <img src={reactLogo} className="logo react" alt="React logo" />
            <img src={reactLogo} className="logo react" alt="React logo" />
            <img src={reactLogo} className="logo react" alt="React logo" />
          </div>
        </div>
        <div className="pitchInfo">
          <div>
            <small className="episodeNumber">S1 E06 p016</small>
            <h3>Skippy Pops</h3>
            <p>Providing you the true delight of ice pops.</p>
            <div className="askingPrice">
              <img src={viteLogo} alt="" />
              <div>
                <small>Asking Price</small>
                <p>₹45 lakhs for 5% equity</p>
              </div>
            </div>
            <div className="deal">
              <img src={viteLogo} alt="" />
              <div>
                <small>Deal</small>
                <p>₹1 crore for 15% equity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainList;
