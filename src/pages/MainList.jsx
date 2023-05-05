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
            {props.elem.Namita == "Deal" ? (
              <img
                src={namita}
                className="logo react"
                width={42}
                alt="Namita"
              />
            ) : (
              <img
                src={"ashneer"}
                style={{ visibility: "hidden" }}
                className="logo react"
                width={42}
                alt="ashneer"
              />
            )}
            {props.elem.Anupam == "Deal" ? (
              <img
                src={anupam}
                className="logo react"
                width={42}
                alt="Anupam"
              />
            ) : null}
            {props.elem.Vineeta == "Deal" ? (
              <img
                src={vineeta}
                className="logo react"
                width={42}
                alt="Vineeta"
              />
            ) : null}
            {props.elem.Aman == "Deal" ? (
              <img src={aman} className="logo react" width={42} alt="Aman" />
            ) : null}
            {props.elem.Peyush == "Deal" ? (
              <img
                src={peyush}
                className="logo react"
                width={42}
                alt="Peyush"
              />
            ) : null}
            {props.elem.Ghazal == "Deal" ? (
              <img
                src={ghazal}
                className="logo react"
                width={42}
                alt="Ghazal"
              />
            ) : null}
            {props.elem.Ashneer == "Deal" ? (
              <img
                src={ashneer}
                className="logo react"
                width={42}
                alt="ashneer"
              />
            ) : null}
          </div>
        </div>
        <div className="pitchInfo">
          <div>
            <small className="episodeNumber">
              {"S01 " + props.elem.Episode + ""}
              {/* {"S01 " + props.elem["EpNo"] + " " + props.elem["Pitch No"]} */}
            </small>
            <div className="brandName">
              <h3>
                {/* {props.elem.Brand.length > 16
                  ? props.elem.Brand.substring(0, 16) + ".."
                  : props.elem.Brand} */}
                {props.elem.Brand}
              </h3>
            </div>
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
