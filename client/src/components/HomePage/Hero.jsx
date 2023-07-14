import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container__article>
      <TextContent__div>
        <ContentHeading__h1>හදමු</ContentHeading__h1>

        <ContentText__p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, totam.
        </ContentText__p>
      </TextContent__div>

      <VideoContainer__video
        src="/videos/Hero.mp4"
        autoPlay
        loop
        muted
      ></VideoContainer__video>
    </Container__article>
  );
};

export default Hero;

const Container__article = styled.article`
  p {
    display: none;
  }

  @media screen and (min-height: 540px) {
    p {
      display: block;
    }
  }
`;

const TextContent__div = styled.div`
  position: relative;
  z-index: -1;
`;

const ContentHeading__h1 = styled.h1`
  position: absolute;
  top: 10vh;
  left: 3rem;
  font-size: 4.5rem;
  color: var(--color-white);
  text-shadow: 4px 4px 4px var(--color-text-shadow-black);

  @media screen and (min-width: 620px) {
    font-size: 8rem;
    left: 5rem;
  }
`;

const ContentText__p = styled.p`
  position: absolute;
  top: 33vh;
  left: 3rem;
  color: var(--color-white);
  text-shadow: 2px 2px 2px var(--color-text-shadow-black);
  letter-spacing: 1px;

  @media screen and (min-width: 620px) {
    font-size: 2.4rem;
    left: 5rem;
  }
`;

const VideoContainer__video = styled.video`
  width: 100%;
  height: 50vh;
  margin-top: 1px;
  object-fit: cover;
  position: relative;
  z-index: -2;
`;
