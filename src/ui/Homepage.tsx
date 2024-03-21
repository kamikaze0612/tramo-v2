import React from "react";
import styled from "styled-components";

const StyledHomepage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  height: 100%;
  background-image: linear-gradient(
      to right,
      rgba(233, 236, 239, 0.7),
      rgba(233, 236, 239, 0.7)
    ),
    url(/images/hero-back.jpg);
  background-position: center;
  background-size: cover;

  @media only screen and (max-width: 27em) {
    gap: 1.6rem;
  }
`;

const Heading = styled.h1`
  font-size: 5.2rem;
  font-weight: 500;
  text-align: center;

  @media only screen and (max-width: 27em) {
    font-size: 3.6rem;
  }
`;

const Bold = styled.b`
  font-weight: 700;
`;

const Paragraph = styled.p`
  font-size: 2rem;
  color: var(--color-text-secondary);

  @media only screen and (max-width: 27em) {
    font-size: 1.6rem;
  }
`;

const Homepage: React.FC = () => {
  return (
    <StyledHomepage>
      <Heading>
        You travel the <Bold>World</Bold>
      </Heading>
      <Paragraph>
        <Bold>Tramo</Bold> keeps your record
      </Paragraph>
    </StyledHomepage>
  );
};

export default Homepage;
