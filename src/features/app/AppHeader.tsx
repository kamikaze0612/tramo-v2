import React from "react";
import styled from "styled-components";

import Logo from "../../ui/Logo";

const StyledAppHeader = styled.header`
  padding: 1.6rem 1.2rem;
  display: flex;
  align-items: center;
  background-color: var(--color-bg-white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  gap: 1.2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const AppHeader: React.FC = () => {
  return (
    <StyledAppHeader>
      <Logo size="small" />
      <Title>tramo</Title>
    </StyledAppHeader>
  );
};

export default AppHeader;
