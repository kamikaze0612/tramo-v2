import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../../ui/Logo";

const StyledAppHeader = styled.header`
  padding: 1.6rem 1.2rem;
  display: flex;
  align-items: center;
  background-color: var(--color-bg-white);
  box-shadow: var(--shadow-sm);
  gap: 1.2rem;
  z-index: 999;
`;

const Title = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: 600;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const AppHeader: React.FC = () => {
  return (
    <StyledAppHeader>
      <Logo size="small" />
      <Title to="/">tramo</Title>
    </StyledAppHeader>
  );
};

export default AppHeader;
