import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const MainNews = () => {
  const [mainNews, setMainNews] = useState([]);

  useEffect(() => {
    const fetchMainNews = async () => {
      const response = await fetch(
        "http://localhost:8080/api/v1/get/newspapers"
      );
      const data = await response.json();
      setMainNews(data);
    };

    fetchMainNews();
  }, []);

  return (
    <>
      {mainNews.map((news) => (
        <Container__div key={news._id}>
          <TextContent__div>
            <h3>{news.topic}</h3>
            <p>{news.summary}</p>
          </TextContent__div>
          <Picture__img src={news.photo} alt={news.topic} />
          <Description__p>{news.description}</Description__p>
        </Container__div>
      ))}
    </>
  );
};

export default MainNews;

const Container__div = styled.div`
  margin-top: 20px;
`;

const TextContent__div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 10px;
  padding-inline: 8px;

  h3 {
    margin-bottom: 5px;
  }

  @media screen and (min-width: 620px) {
    text-align: left;
    margin-left: 20px;
    padding: 0;

    h3 {
      font-size: 2.4rem;
    }
  }
`;

const Picture__img = styled.img`
  width: 100%;
  height: 45vh;
  object-fit: cover;
  box-shadow: 0 0 0.5rem 0.5rem var(--color-box-shadow);
`;

const Description__p = styled.p`
  margin-top: 20px;
  padding-inline: 20px;

  @media screen and (min-width: 620px) {
    column-count: 2;
    column-rule: 1px solid lightblue;
    column-gap: 40px;
  }
`;
