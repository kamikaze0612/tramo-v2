import React, { ReactNode } from "react";

import AppControls from "./AppControls";
import styled from "styled-components";

const MainAppContainer = styled.section`
  background-color: #f8f9fa;
  padding: 2.4rem 4.8rem;
  display: flex;
  gap: 2.4rem;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

type MainAppProps = {
  children: ReactNode;
};

const MainApp: React.FC<MainAppProps> = ({ children }) => {
  return (
    <MainAppContainer>
      <AppControls />
      {children}
    </MainAppContainer>
  );
};

export default MainApp;
