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
    border: 1px solid var(--color-bg-black);
  `,
};

const variations = {
  primary: css`
    background-color: var(--color-bg-white);
    color: var(--color-text-primary);
  `,

  secondary: css`
    background-color: var(--color-bg-black);
    color: var(--color-text-white);
  `,

  danger: css`
    background-color: var(--color-bg-red);
    color: #fff5f5;
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

  ${(props) => sizes[props.size!]}
  ${(props) => variations[props.variant!]}
`;

Button.defaultProps = {
  size: "normal",
  variant: "primary",
};

export default Button;
