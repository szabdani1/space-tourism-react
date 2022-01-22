import { useEffect, useState } from "react";
import "./Technology.css";
import data from "../data.json";

function Technology({ setActualPage }) {
  const [technologyIndex, setTechnologyIndex] = useState(0);

  const [name, setName] = useState("");
  const [imgPortrait, setImgPortrait] = useState("");
  const [imgLandscape, setImgLandscape] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    document.body.classList.add("bg-technology");
    setActualPage("technology");

    return () => {
      document.body.classList.remove("bg-technology");
    };
  });

  useEffect(() => {
    setName(data.technology[technologyIndex].name);
    setImgPortrait(data.technology[technologyIndex].images.portrait);
    setImgLandscape(data.technology[technologyIndex].images.landscape);
    setDescription(data.technology[technologyIndex].description);
  }, [technologyIndex]);

  function handleToggle(event) {
    setTechnologyIndex(Number(event.target.dataset.index));
  }

  var imgsrcsPotrait = [
    "image-launch-vehicle-portrait.jpg",
    "image-spaceport-portrait.jpg",
    "image-space-capsule-portrait.jpg",
  ];
  var imgsrcsLandscape = [
    "image-launch-vehicle-landscape.jpg",
    "image-spaceport-landscape.jpg",
    "image-space-capsule-landscape.jpg",
  ];
  return (
    <main className="technology">
      <h2 className="technology phrase">
        <span>03</span> Space Launch 101
      </h2>
      <div className="technology imgContainer landscape">
        <img src={require("../assets/technology/" + imgsrcsLandscape[technologyIndex])} alt={name} />
      </div>
      <nav className="technology selector">
        <ul>
          <li
            data-index="0"
            onClick={handleToggle}
            className={technologyIndex === 0 ? "active" : ""}
          >
            1
          </li>
          <li
            data-index="1"
            onClick={handleToggle}
            className={technologyIndex === 1 ? "active" : ""}
          >
            2
          </li>
          <li
            data-index="2"
            onClick={handleToggle}
            className={technologyIndex === 2 ? "active" : ""}
          >
            3
          </li>
        </ul>
      </nav>
      <h3 className="technology term">The Terminology...</h3>
      <h1 className="technology title">{name}</h1>
      <p className="technology description">{description}</p>
      <div className="technology imgContainer portrait">
        <img src={require("../assets/technology/" + imgsrcsPotrait[technologyIndex])} alt={name} />
      </div>
    </main>
  );
}

export default Technology;