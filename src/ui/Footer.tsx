import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 2.4rem 4.8rem;
  background-color: grey;
`;

const Copyright = styled.p`
  text-align: center;
  font-size: 1.8rem;
`;

const Author = styled.p`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  font-size: 1.6rem;
`;

const GithubLink = styled.a`
  &:visited,
  &:link {
    text-decoration: none;
    color: currentColor;
    display: inline-block;
  }

  &:hover,
  &:active {
    color: black;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <Copyright>
        &copy; 2024 Buyantogtokh Bekhbayar. All rights reserved
      </Copyright>
      <Author>
        Designed & coded by{" "}
        <GithubLink href="https://kamikaze0612.github.io/">
          Buyantogtokh B.
        </GithubLink>
      </Author>
    </StyledFooter>
  );
}

export default Footer;
