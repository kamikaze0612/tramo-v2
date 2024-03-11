import React, { ReactNode } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import styled from "styled-components";

const StyledInput = styled.input`
  font-size: 1.8rem;
  border: 1px solid var(--color-border-white);
  border-radius: 8px;
  padding: 0.8rem 1.2rem;
  font-family: inherit;
  color: var(--colot-text-secondary);
  position: relative;

  &::placeholder {
    color: var(--color-text-tertiary);
  }

  &:focus {
    outline: 1px solid var(--color-border-dark);
  }
`;

const Tag = styled.span`
  position: absolute;
  top: 44px;
  right: 10px;
  font-size: 1.6rem;
  color: black;
`;

const Error = styled.p`
  font-size: 1.4rem;
  color: var(--color-text-red);
  font-weight: 500;
`;

type InputProps = {
  id: string;
  placeholder?: string;
  type?: string;
  tag?: string;
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
};

const Input: React.FC<InputProps> = ({
  id,
  type = "text",
  placeholder,
  tag,
  errors,
  register,
}) => {
  return (
    <>
      <StyledInput
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(id, { required: "This field is required" })}
      />
      <Tag>{tag}</Tag>
      {errors[id] && <Error>{errors[id]!.message as ReactNode}</Error>}
    </>
  );
};

export default Input;
