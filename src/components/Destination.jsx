import React,{ useEffect, useState } from "react";
import "./Destination.css";
import data from "../data.json";

function Destination({ setActualPage }) {
  const [destinationIndex, setDestinationIndex] = useState(0);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [distance, setDistance] = useState("");
  const [travel, setTravel] = useState("");

  useEffect(() => {
    document.body.classList.add("bg-destination");
    setActualPage("destination");

    return () => {
      document.body.classList.remove("bg-destination");
    };
  });

  useEffect(() => {
    setName(data.destinations[destinationIndex].name);
    setDescription(data.destinations[destinationIndex].description);
    setDistance(data.destinations[destinationIndex].distance);
    setTravel(data.destinations[destinationIndex].travel);
  }, [destinationIndex]);

  function handleToggle(event) {
    setDestinationIndex(Number(event.target.dataset.index));
  }

  var imgsrcs = [
    "image-moon.png",
    "image-mars.png",
    "image-europa.png",
    "image-titan.png",
  ];

  return (
    <main className="destination">
      <div>
        <h2 className="destination phrase">
          <span>01</span> Pick Your Destination
        </h2>
        <img
          className="destination image"
          src={require("../assets/destination/" + imgsrcs[destinationIndex])}
          alt={name}
        />
      </div>
      <div className="destination-desc">
        <nav className="destination selector">
          <ul>
            <li
              data-index="0"
              className={destinationIndex === 0 ? "active" : ""}
              onClick={handleToggle}
            >
              <a>Moon</a>
            </li>
            <li
              data-index="1"
              className={destinationIndex === 1 ? "active" : ""}
              onClick={handleToggle}
            >
              <a>Mars</a>
            </li>
            <li
              data-index="2"
              className={destinationIndex === 2 ? "active" : ""}
              onClick={handleToggle}
            >
              <a>Europa</a>
            </li>
            <li
              data-index="3"
              className={destinationIndex === 3 ? "active" : ""}
              onClick={handleToggle}
            >
              <a>Titan</a>
            </li>
          </ul>
        </nav>
        <h1 className="destination title">{name}</h1>
        <p className="destination description">{description}</p>
        <div className="separationLine"></div>
        <div className="destination info">
          <div className="destination distance">
            <h3 className="destination infoTitle">Avg. Distance</h3>
            <h4 className="destination infoValue">{distance}</h4>
          </div>
          <div className="destination travelTime">
            <h3 className="destination infoTitle">Est. Travel Time</h3>
            <h4 className="destination infoValue">{travel}</h4>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Destination;
