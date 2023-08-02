import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MoonLoader from "react-spinners/MoonLoader";

import Hero from "../components/HomePage/Hero";
import MainNews from "../components/HomePage/MainNews";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [mainNews, setMainNews] = useState([]);

  useEffect(() => {
    const fetchMainNews = async () => {
      setLoading(true);
      const response = await fetch(
        "https://hadamu.onrender.com/api/v1/get/newspapers"
      );
      const data = await response.json();
      setMainNews(data);
      setLoading(false);
    };

    fetchMainNews();
  }, []);

  return (
    <>
      {loading ? (
        <LoaderContainer__div className="loader">
          <MoonLoader color="#fff" size={40} speedMultiplier={1} />
        </LoaderContainer__div>
      ) : (
        <>
          <Hero />
          <MainNews mainNews={mainNews} />
        </>
      )}
    </>
  );
};

export default Home;

const LoaderContainer__div = styled.div``;
