import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  const links = [
    { label: "මුල් පිටුව", url: "/" },
    { label: "පුවත් විමසුම", url: "/news" },
    { label: "ලොවින් පුවත්", url: "/world-news" },
    { label: "නිමැවුම්", url: "/production" },
    { label: "වීඩියෝ", url: "/video" },
    { label: "මත", url: "/opinion" },
  ];

  const [hamburgerStatus, setHamburgerStatus] = useState(false);

  const handleCollapse = () => {
    setHamburgerStatus(!hamburgerStatus);
  };

  return (
    <Container__header>
      <LogoContainer__nav>
        <Link to="/">
          <Logo__img src="/images/logo.png" alt="logo" />
        </Link>

        <HamburgerIcon__img
          src="/images/menu.svg"
          alt="hamburger icon"
          onClick={handleCollapse}
        />

        <LinksContainer__div>
          {links.map((link, index) => (
            <Link key={index} to={link.url}>
              {link.label}
            </Link>
          ))}
        </LinksContainer__div>
      </LogoContainer__nav>

      <HamburgerLinksContainer__div>
        {hamburgerStatus &&
          links.map((link, index) => (
            <Link key={index} to={link.url} onClick={handleCollapse}>
              {link.label}
            </Link>
          ))}
      </HamburgerLinksContainer__div>
    </Container__header>
  );
};

export default NavBar;

const Container__header = styled.header`
  background-color: var(--color-background-navbar);
  position: sticky;
  top: 0;
  opacity: 0.98;
`;

const LogoContainer__nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo__img = styled.img`
  height: 60px;
  margin-left: 10px;
`;

const HamburgerIcon__img = styled.img`
  width: 50px;
  cursor: pointer;
  padding: 5px;

  @media screen and (min-width: 880px) {
    display: none;
  }
`;

const LinksContainer__div = styled.div`
  display: none;

  a {
    color: var(--color-anchor-navbar);
    text-decoration: none;
    margin: 10px;
    transition: all 0.3s;
  }

  a:hover {
    color: var(--color-anchor-navbar-hover);
  }

  @media screen and (min-width: 880px) {
    display: block;
  }
`;

const HamburgerLinksContainer__div = styled.div`
  position: absolute;
  background-color: var(--color-background-navbar);
  width: 100%;
  display: flex;
  flex-direction: column;

  a {
    margin-inline: 10px;
    padding-block: 10px;
    text-decoration: none;
    color: var(--color-anchor-navbar);
    transition: all 0.3s;
    border-bottom: 1px solid var(--color-hamburger-border);
  }

  a:hover {
    color: var(--color-anchor-navbar-hover);
  }

  @media screen and (min-width: 880px) {
    display: none;
  }
`;
