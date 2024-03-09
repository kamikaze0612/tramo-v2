import styled from "styled-components";

const LoaderContainer = styled.div`
  height: 100vh;
  width: 100vw;
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

import React from "react";

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <StyledLoader />
    </LoaderContainer>
  );
};

export default Loader;
