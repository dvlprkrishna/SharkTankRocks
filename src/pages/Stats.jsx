import React from "react";

const Stats = () => {
  return (
    <>
      <div className="navStripe">
        <p>List of Invesments made in Shark Tank India </p>
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
        <h3>Comming Soon</h3>
      </div>
    </>
  );
};

export default Stats;
