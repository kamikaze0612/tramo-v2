import React, { ReactNode } from "react";

import AppControls from "./AppControls";
import styled from "styled-components";

const MainAppContainer = styled.section`
  background-color: #f8f9fa;
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
