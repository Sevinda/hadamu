import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainNews = ({ mainNews }) => {
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
          {/* TODO: Create the correct link for the button */}
          <Link to="/world-news">
            <ReadMore__button>Read More</ReadMore__button>
          </Link>
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

const ReadMore__button = styled.button`
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 30px;
  border-radius: 10px;
  background-color: white;
  color: #595959;
  border: 1px solid #595959;
  height: 45px;
  width: 120px;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #595959;
    color: white;
  }
`;
