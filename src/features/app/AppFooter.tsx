import React from "react";
import styled from "styled-components";

const StyledAppFooter = styled.footer`
  padding: 1.2rem 2.4rem;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  background-color: var(--color-bg-white);
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.05);
`;

const Copyright = styled.h3`
  font-size: 1.4rem;
`;

const Author = styled.p``;

const AppFooter: React.FC = () => {
  return (
    <StyledAppFooter>
      <Copyright>&copy; 2024 All rights reserved.</Copyright>
      <Author>Designed & coded by Buyantogtokh B.</Author>
    </StyledAppFooter>
  );
};

export default AppFooter;
