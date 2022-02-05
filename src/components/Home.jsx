import React,{ useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home({ setActualPage }) {
  useEffect(() => {
    setActualPage("home");
  });

  return (
    <main className="homepage">
      <div className="texts">
        <h2 className="homepage phrase">So, you want to travel to</h2>
        <h1 className="homepage title">Space</h1>
        <p className="homepage description">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      {/* <a href="#">Explore</a> */}
      <Link to="/destination" className="homepage link">
        Explore
      </Link>
    </main>
  );
}

export default Home;