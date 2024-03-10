import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const Label = styled.p`
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 600;
`;

type RowProps = {
  label: string;
  children: ReactNode;
};

const Row: React.FC<RowProps> = ({ label, children }) => {
  return (
    <StyledRow>
      <Label>{label}</Label>
      {children}
    </StyledRow>
  );
};

export default Row;
