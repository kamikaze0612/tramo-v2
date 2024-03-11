import React, { ReactNode } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  font-size: 1.8rem;
  width: 100%;
  resize: none;
  border: 1px solid var(--color-border-white);
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  font-weight: 400;
  font-family: inherit;
  color: var(--colot-text-secondary);

  &::placeholder {
    color: var(--color-text-tertiary);
    font-weight: 400;
  }

  &:focus {
    outline: 1px solid var(--color-border-dark);
  }
`;

const Error = styled.p`
  font-size: 1.4rem;
  color: var(--color-text-red);
  font-weight: 500;
`;

type TextAreaProps = {
  id: string;
  placeholder?: string;
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
};

const TextArea: React.FC<TextAreaProps> = ({
  id,
  placeholder,
  register,
  errors,
}) => {
  return (
    <>
      <StyledTextarea
        rows={3}
        id={id}
        placeholder={placeholder}
        {...register(id, { required: "This input is required" })}
      ></StyledTextarea>
      {errors[id] && <Error>{errors[id]?.message as ReactNode}</Error>}
    </>
  );
};

export default TextArea;
