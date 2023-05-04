/* eslint-disable react/prop-types */
import "../assets/css/MainList.css";
import viteLogo from "/vite.svg";
import askLogo from "../assets/chat.png";
import dealLogo from "../assets/cash.png";
import ashneer from "../assets/ashneer.jpeg";
import anupam from "../assets/anupam.jpeg";
import vineeta from "../assets/vineeta.jpeg";
import namita from "../assets/namita.jpeg";
import ghazal from "../assets/ghazal.jpeg";
import peyush from "../assets/peyush.jpeg";
import aman from "../assets/aman.jpeg";

const MainList = (props) => {
  return (
    <>
      <div className="card">
        <div className="cardBranding">
          <img src={viteLogo} alt="" />
          <div className="investors">
            <img
              src={ashneer}
              className="logo react"
              width={36}
              alt="ashneer"
            />
            <img src={anupam} className="logo react" width={36} alt="anupam" />
            <img
              src={vineeta}
              className="logo react"
              width={36}
              alt="vineeta"
            />
            <img src={namita} className="logo react" width={36} alt="namita" />
            <img src={ghazal} className="logo react" width={36} alt="ghazal" />
            <img src={peyush} className="logo react" width={36} alt="peyush" />
          </div>
        </div>
        <div className="pitchInfo">
          <div>
            <small className="episodeNumber">S1 E06 p016</small>
            <h3>
              {props.elem.Brand.length > 16
                ? props.elem.Brand.substring(0, 16) + ".."
                : props.elem.Brand}
            </h3>
            <p>Idea</p>
            <div className="askingPrice">
              <img src={askLogo} alt="" width={32} />
              <div>
                <small>Asking Price</small>
                <p>₹45 lakhs for 5% equity</p>
              </div>
            </div>
            <div className="deal">
              <img src={dealLogo} alt="" width={32} />
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
