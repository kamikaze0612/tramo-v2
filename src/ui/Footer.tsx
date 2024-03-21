import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 2.4rem 4.8rem;
  background-color: var(--color-bg-white);
  box-shadow: var(--shadow-sm-invert);
`;

const Copyright = styled.p`
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.6;

  & br {
    display: none;

    @media only screen and (max-width: 27em) {
      display: block;
    }
  }

  @media only screen and (max-width: 27em) {
    font-size: 1.4rem;
    line-height: 1.4;
  }
`;

const Author = styled.p`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  font-size: 1.6rem;
  color: var(--color-text-secondary);

  @media only screen and (max-width: 27em) {
    font-size: 1.4rem;
  }
`;

const GithubLink = styled.a`
  &:visited,
  &:link {
    font-weight: 600;
    text-decoration: none;
    color: currentColor;
    display: inline-block;
  }

  &:hover,
  &:active {
    color: black;
  }
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Copyright>
        &copy; Tramo 2.0, 2024 Buyantogtokh Bekhbayar, <br /> All rights
        reserved.
      </Copyright>
      <Author>
        Designed & coded by{" "}
        <GithubLink href="https://kamikaze0612.github.io/">
          Buyantogtokh B.
        </GithubLink>
      </Author>
    </StyledFooter>
  );
};

export default Footer;
