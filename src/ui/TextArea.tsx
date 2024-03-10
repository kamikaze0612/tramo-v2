import React from "react";
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

type TextAreaProps = {
  id: string;
  placeholder?: string;
};

const TextArea: React.FC<TextAreaProps> = ({ id, placeholder }) => {
  return (
    <StyledTextarea rows={3} id={id} placeholder={placeholder}></StyledTextarea>
  );
};

export default TextArea;
