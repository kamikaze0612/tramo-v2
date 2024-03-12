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
`;

const Heading = styled.h1`
  font-size: 5.2rem;
  font-weight: 500;
  text-align: center;
`;

const Bold = styled.b`
  font-weight: 700;
`;

const Paragraph = styled.p`
  font-size: 2rem;
  color: var(--color-text-secondary);
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
