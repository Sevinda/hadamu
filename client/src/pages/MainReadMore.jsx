import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const MainReadMore = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [mainNews, setMainNews] = useState([]);

  useEffect(() => {
    const fetchTheNews = async () => {
      setLoading(true);
      const response = await fetch(
        `http://localhost:8080/api/v1/get/newspaper/${id}`
      );
      const data = await response.json();
      setMainNews(data);
      setLoading(false);
    };

    fetchTheNews();
  }, []);

  return (
    <>
      {loading ? (
        <LoaderContainer__div className="loader">
          <MoonLoader color="#fff" size={40} speedMultiplier={1} />
        </LoaderContainer__div>
      ) : (
        <>
          <Container__div>
            <TextContent__div>
              <h3>{mainNews.topic}</h3>
              <p>{mainNews.summary}</p>
            </TextContent__div>
            <Picture__img
              src={mainNews.photo}
              alt={mainNews.topic}
              loading="lazy"
            />
            <Description__p>{mainNews.description}</Description__p>
            <Link to={"/"}>
              <Back__button>
                <Arrow__span>
                  <BiArrowBack />
                </Arrow__span>{" "}
                {`Go Back`}
              </Back__button>
            </Link>
          </Container__div>
        </>
      )}
    </>
  );
};

export default MainReadMore;

const LoaderContainer__div = styled.div``;

const Container__div = styled.div``;

const TextContent__div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-block: 20px 10px;
  padding-inline: 12px;

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
  object-fit: cover;
  box-shadow: 0 0 0.5rem 0.5rem var(--color-box-shadow);
`;

const Description__p = styled.p`
  margin-top: 20px;
  margin-bottom: 30px;
  padding-inline: 20px;

  @media screen and (min-width: 620px) {
    column-count: 2;
    column-rule: 1px solid lightblue;
    column-gap: 40px;
  }
`;

const Back__button = styled.button`
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
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #595959;
    color: white;
  }
`;

const Arrow__span = styled.span`
  font-size: 2.7rem;
  margin-right: 5px;
  margin-top: 2px;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
