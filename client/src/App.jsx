import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./shared/NavBar/NavBar";
import Home from "./pages/Home";
import News from "./pages/News";
import WorldNews from "./pages/WorldNews";
import Production from "./pages/Production";
import Video from "./pages/Video";
import Opinion from "./pages/Opinion";
import Footer from "./shared/Footer/Footer";
import MainReadMore from "./pages/MainReadMore";
import Error404 from "./pages/Error404";

const App = () => {
  const [is404Page, setIs404Page] = useState(false);

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="world-news" element={<WorldNews />} />
        <Route path="production" element={<Production />} />
        <Route path="video" element={<Video />} />
        <Route path="opinion" element={<Opinion />} />
        <Route path="main/read-more">
          <Route path=":id" element={<MainReadMore />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
