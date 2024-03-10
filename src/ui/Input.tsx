import React from "react";
import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { AddLocationFormData } from "../types";

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

type InputProps = {
  id: "location" | "notes" | "date";
  placeholder?: string;
  type?: string;
  register: UseFormRegister<AddLocationFormData>;
  tag?: string;
};

const Input: React.FC<InputProps> = ({
  id,
  type = "text",
  placeholder,
  register,
  tag,
}) => {
  return (
    <>
      <StyledInput
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(id, {
          required: "This input is required",
        })}
      />
      <Tag>{tag}</Tag>
    </>
  );
};

export default Input;
