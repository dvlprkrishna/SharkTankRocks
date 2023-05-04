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
              src={props.elem.Ashneer == "Deal" ? `${ashneer}` : null}
              className="logo react"
              width={36}
              alt="ashneer"
            />
          </div>
        </div>
        <div className="pitchInfo">
          <div>
            <small className="episodeNumber">
              {"S01 " + props.elem.Episode + ""}
              {/* {"S01 " + props.elem["EpNo"] + " " + props.elem["Pitch No"]} */}
            </small>
            <h3>
              {props.elem.Brand.length > 16
                ? props.elem.Brand.substring(0, 16) + ".."
                : props.elem.Brand}
            </h3>
            <p>{props.elem.Idea}</p>
            <div className="askingPrice">
              <img src={askLogo} alt="" width={32} />
              <div>
                <small>Asking Price</small>
                <p>{props.elem["Original ask"]}</p>
              </div>
            </div>
            <div className="deal">
              <img src={dealLogo} alt="" width={32} />
              <div>
                <small>Deal</small>
                <p>{props.elem["Deal"]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainList;
