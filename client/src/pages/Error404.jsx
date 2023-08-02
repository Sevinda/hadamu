import React from "react";
import styled from "styled-components";

const Error404 = () => {
  return (
    <Container__div>
      <ImageContainer__div>
        <img src="/images/error/404Error.svg" alt="svg" />
      </ImageContainer__div>

      <TextContainer__div>
        <Title__h1>404 - Page Not Found</Title__h1>
        <Description__p>
          Oops! The page you are looking for does not exist.
        </Description__p>
        <BackLink__a href="/">Go back to the homepage</BackLink__a>
      </TextContainer__div>
    </Container__div>
  );
};

export default Error404;

const Container__div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer__div = styled.div`
  width: 50%;
`;

const TextContainer__div = styled.div``;

const Title__h1 = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Description__p = styled.p`
  font-size: 1.5rem;
  margin-bottom: 3rem;
`;

const BackLink__a = styled.a`
  text-decoration: none;
  background-color: #0056b3;
  color: #fff;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border-radius: 10px 0 10px 0;
`;
