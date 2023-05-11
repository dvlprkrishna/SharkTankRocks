import React from "react";
import sti from "/stilogo.png";

const Stats = () => {
  return (
    <>
      <div className="navStripe">
        <div className="logoWrap">
          <img src={sti} width={80} alt="" />
          <p>List of Invesments made in Shark Tank India </p>
        </div>
        <div className="navLinks">
          <a href="/stats" className="active">
            Stats
          </a>
          <a href="/about">About Us</a>
          <a href="/">Homepage</a>
        </div>
      </div>
      <div style={{ margin: "0.5em 2em", padding: "1em" }}>
        <h2>Stats</h2>
        <h3>Coming Soon</h3>
      </div>
    </>
  );
};

export default Stats;
