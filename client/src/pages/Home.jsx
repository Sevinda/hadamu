import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Hero from "../components/HomePage/Hero";
import MainNews from "../components/HomePage/MainNews";
import MoonLoader from "react-spinners/MoonLoader";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [mainNews, setMainNews] = useState([]);

  useEffect(() => {
    const fetchMainNews = async () => {
      setLoading(true);
      const response = await fetch(
        "http://localhost:8080/api/v1/get/newspapers"
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
        <LoaderContainer__div>
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

const LoaderContainer__div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
