import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

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
            <Link
              key={index}
              to={link.url}
              className={location.pathname === link.url ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </LinksContainer__div>
      </LogoContainer__nav>

      <HamburgerLinksContainer__div>
        {hamburgerStatus &&
          links.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              className={location.pathname === link.url ? "active" : ""}
              onClick={handleCollapse}
            >
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
  margin-right: 15px;

  a {
    color: var(--color-anchor-navbar);
    text-decoration: none;
    padding: 10px;
    transition: all 0.3s;
  }

  a:hover {
    color: var(--color-anchor-navbar-hover);
  }

  a.active {
    color: var(--color-white);
    background-color: var(--color-black);
    border: 1px solid var(--color-white);
    border-radius: 5px;
  }

  @media screen and (min-width: 880px) {
    display: block;
    height: 65px;
    display: flex;
    align-items: center;
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
    padding-left: 10px;
    text-decoration: none;
    color: var(--color-anchor-navbar);
    transition: all 0.3s;
    border-bottom: 1px solid var(--color-hamburger-border);
  }

  a.active {
    color: var(--color-white);
    background-color: var(--color-black);
    border: 1px solid var(--color-white);
    border-radius: 5px;
  }

  a:hover {
    color: var(--color-anchor-navbar-hover);
  }

  @media screen and (min-width: 880px) {
    display: none;
  }
`;
