import React from "react";
import Header from "./Header";
import sti from "/stilogo.png";

const About = () => {
  return (
    <>
      <div className="navStripe">
        <div className="logoWrap">
          <img src={sti} width={80} alt="" />
          <p>List of Invesments made in Shark Tank India </p>
        </div>
        <div className="navLinks">
          <a href="/stats">Stats</a>
          <a href="/about" className="active">
            About Us
          </a>
          <a href="/">Homepage</a>
        </div>
      </div>
      <div style={{ margin: "0.5em 2em", padding: "1em" }}>
        <h2>About Us</h2>
        <h3>Feature List</h3>
        <ul>
          <li style={{ marginBottom: "1em" }}>
            <s>Season 1 and 2 Filter</s>
          </li>
          <li style={{ marginBottom: "1em" }}>Investor Filter</li>
          <li style={{ marginBottom: "1em" }}>Search Option</li>
          <li style={{ marginBottom: "1em" }}>Links to all Brands</li>
          <li style={{ marginBottom: "1em" }}>Logos of all Brands</li>
          <li style={{ marginBottom: "1em" }}>Stats Page</li>
          <li style={{ marginBottom: "1em" }}>Investor Detailed Stats Page</li>
        </ul>
      </div>
    </>
  );
};
export default About;
