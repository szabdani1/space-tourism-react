import "./index.css";
import React,{ useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Destination, Technology, Crew, Header} from "./components"

function App() {
  const [actualPage, setActualPage] = useState("home");

  return (
    <>
      <BrowserRouter>
        <Header actualPage={actualPage} />
        <Routes>
          <Route
            path="/"
            element={<Home setActualPage={setActualPage} />}
          />
          <Route path="crew" element={<Crew setActualPage={setActualPage} />} />
          <Route
            path="technology"
            element={<Technology setActualPage={setActualPage} />}
          />
          <Route
            path="destination"
            element={<Destination setActualPage={setActualPage} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;