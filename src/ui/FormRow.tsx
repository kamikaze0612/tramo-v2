import React, { ReactNode } from "react";
import { FieldError } from "react-hook-form";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  border-bottom: 2px solid var(--color-border-white);
  position: relative;
`;

const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 600;
`;

const Error = styled.p`
  font-size: 1.4rem;
  color: var(--color-text-red);
`;

type FormRowProps = {
  label: string;
  id: string;
  error: FieldError | undefined;
  children: ReactNode;
};

const FormRow: React.FC<FormRowProps> = ({ label, id, children, error }) => {
  return (
    <Row>
      <Label htmlFor={id}>{label}</Label>
      {children}
      <Error>{error?.message}</Error>
    </Row>
  );
};

export default FormRow;
