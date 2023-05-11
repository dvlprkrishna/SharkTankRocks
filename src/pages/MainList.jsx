/* eslint-disable react/prop-types */
import "../assets/css/MainList.css";
import askLogo from "../assets/chat.png";
import dealLogo from "../assets/cash.png";

import Ashneer from "../assets/investors/ashneer.jpeg";
import Anupam from "../assets/investors/anupam.jpeg";
import Vineeta from "../assets/investors/vineeta.jpeg";
import Namita from "../assets/investors/namita.jpeg";
import Ghazal from "../assets/investors/ghazal.jpeg";
import Peyush from "../assets/investors/peyush.jpeg";
import Amit from "../assets/investors/amit.jpeg";
import Aman from "../assets/investors/aman.jpeg";

const MainList = (props) => {
  const validColors = [
    "var(--color-yellow))",
    "var(--color-yellow))",
    "var(--color-cream)",
    "var(--color-cream)",
    "var(--color-red)",
    "var(--color-red)",
    "var(--color-grey)",
    "var(--color-grey)",
    "var(--color-pink)",
    "var(--color-pink)",
    "var(--color-blue))",
    "var(--color-green)",
    "var(--color-green)",
    "var(--color-black)",
    "var(--color-white)",
    "#49a6fc",
  ];

  return (
    <>
      <div className="card">
        <div
          className="cardBranding"
          style={{
            backgroundColor:
              validColors[Math.floor(Math.random() * validColors.length + 1)],
          }}
        >
          <a
            href={props.elem.link != "" ? props.elem.link : null}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={
                props.elem.Logo !== ""
                  ? `/brands/${props.elem.Logo}`
                  : `/brands/default.png`
              }
              className="brandLogo"
              alt=""
            />
          </a>

          <div className="investors">
            {props.elem.Namita == "Deal" ? (
              <img
                src={Namita}
                className="logo react"
                width={56}
                alt="Namita"
                title="Namita Thapar"
              />
            ) : (
              <img
                src={"ashneer"}
                style={{ visibility: "hidden" }}
                className="logo react"
                width={56}
              />
            )}
            {props.elem.Anupam == "Deal" ? (
              <img
                src={Anupam}
                className="logo react"
                width={56}
                alt="Anupam"
                title="Anupam Mittal"
              />
            ) : null}
            {props.elem.Amit == "Deal" ? (
              <img
                src={Amit}
                className="logo react"
                width={56}
                alt="Amit"
                title="Amit Mittal"
              />
            ) : null}
            {props.elem.Vineeta == "Deal" ? (
              <img
                src={Vineeta}
                className="logo react"
                width={56}
                alt="Vineeta"
                title="Vineeta Singh"
              />
            ) : null}
            {props.elem.Aman == "Deal" ? (
              <img
                src={Aman}
                className="logo react"
                width={56}
                alt="Aman"
                title="Aman Gupta"
              />
            ) : null}
            {props.elem.Peyush == "Deal" ? (
              <img
                src={Peyush}
                className="logo react"
                width={56}
                alt="Peyush"
                title="Peyush Bansal"
              />
            ) : null}
            {props.elem.Ghazal == "Deal" ? (
              <img
                src={Ghazal}
                className="logo react"
                width={56}
                alt="Ghazal"
                title="Ghazal Alag"
              />
            ) : null}
            {props.elem.Ashneer == "Deal" ? (
              <img
                src={Ashneer}
                className="logo react"
                width={56}
                alt="ashneer"
                title="Ashneer Gover"
              />
            ) : null}
          </div>
        </div>
        <div className="pitchInfo">
          <div>
            <small className="episodeNumber">
              {"S01" + "E" + props.elem.Episode + "P" + props.elem.Pitch}
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
