import React, { ReactNode } from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  border-bottom: 2px solid var(--color-border-white);
  position: relative;
  padding-bottom: 2.4rem;
`;

const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 600;
`;

type FormRowProps = {
  label: string;
  id: string;
  children: ReactNode;
};

const FormRow: React.FC<FormRowProps> = ({ label, id, children }) => {
  return (
    <Row>
      <Label htmlFor={id}>{label}</Label>
      {children}
    </Row>
  );
};

export default FormRow;
