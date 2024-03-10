import { ComponentProps } from "react";
import styled, { css } from "styled-components";

type ButtonProps = {
  size?: "normal" | "small";
  variant?: "primary" | "secondary" | "danger";
} & ComponentProps<"button">;

const sizes = {
  small: css`
    font-size: 1.6rem;
    padding: 1.2rem 1.6rem;
  `,

  normal: css`
    font-size: 1.6rem;
    padding: 1.6rem 2.4rem;
  `,
};

const variations = {
  primary: css`
    background-color: var(--color-bg-white);
    color: var(--color-text-primary);
    border: 1px solid var(--color-bg-black);

    &:hover {
      background-color: var(--color-bg-white--1);
    }
  `,

  secondary: css`
    background-color: var(--color-bg-black);
    color: var(--color-text-white);
  `,

  danger: css`
    background-color: var(--color-bg-red);
    color: #fff5f5;

    &:hover {
      background-color: var(--color-bg-red--1);
    }
  `,
};

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 700;
  transition: background-color 0.3s, color 0.3s;

  ${(props) => sizes[props.size!]}
  ${(props) => variations[props.variant!]}
`;

Button.defaultProps = {
  size: "normal",
  variant: "primary",
};

export default Button;
