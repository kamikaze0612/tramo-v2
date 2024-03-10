import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLoader = styled.div`
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid;
  border-color: #000 #0000;
  animation: s1 1s infinite;

  @keyframes s1 {
    to {
      transform: rotate(0.5turn);
    }
  }
`;

const SmallLoader: React.FC = () => {
  return (
    <Container>
      <StyledLoader />
    </Container>
  );
};

export default SmallLoader;
