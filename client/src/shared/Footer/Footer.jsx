import React from "react";
import styled from "styled-components";

const Footer = () => {
  const DUMMY_LINKS = [
    { label: "Link1", url: "#" },
    { label: "Link2", url: "#" },
    { label: "Link3", url: "#" },
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <FooterHeading>හදමු</FooterHeading>
        <LinksContainer>
          <LinksColumn>
            <FooterLinksHeading>About Us</FooterLinksHeading>
            <LinksList>
              {DUMMY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
            </LinksList>
          </LinksColumn>
          <LinksColumn>
            <FooterLinksHeading>Contact Us</FooterLinksHeading>
            <LinksList>
              {DUMMY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
            </LinksList>
          </LinksColumn>
          <LinksColumn>
            <FooterLinksHeading>Social Media</FooterLinksHeading>
            <LinksList>
              {DUMMY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
            </LinksList>
          </LinksColumn>
        </LinksContainer>
      </FooterContent>
      <FooterBottom>
        <Copyright>
          &copy; {new Date().getFullYear()} හදමු. All rights reserved.
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background-color: var(--color-background-navbar);
  padding: 0 40px 10px;
  margin-top: 40px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const FooterHeading = styled.h1`
  font-size: 5.5rem;
  color: var(--color-white);
  margin-right: 20px;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`;

const FooterLinksHeading = styled.h3`
  color: var(--color-white);
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

const LinksList = styled.ul`
  padding: 0;
  margin: 0;
  margin-bottom: 20px;

  li {
    list-style: none;
    padding: 5px 0;

    a {
      color: var(--color-white);
      font-size: 1.6rem;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const FooterBottom = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const Copyright = styled.p`
  color: var(--color-white);
  font-size: 1.4rem;
`;
