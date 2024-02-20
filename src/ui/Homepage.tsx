import styled from "styled-components";

const StyledHomepage = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Heading = styled.h1`
  font-size: 4.4rem;
`;

function Homepage() {
  return (
    <StyledHomepage>
      <Heading>Hello</Heading>
    </StyledHomepage>
  );
}

export default Homepage;
