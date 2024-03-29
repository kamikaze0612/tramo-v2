import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const sizes = {
  normal: css`
    height: 64px;
    width: auto;
  `,
  small: css`
    height: 32px;
    width: auto;
  `,
};

const Container = styled(NavLink)<LogoProps>`
  ${(props) => (props.size ? sizes[props.size] : sizes.normal)};
  display: block;

  & img {
    height: 100%;
    width: 100%;
  }
`;

Container.defaultProps = {
  size: "normal",
};

type LogoProps = {
  size?: "normal" | "small";
};

const Logo: React.FC<LogoProps> = ({ size }) => {
  return (
    <Container to="/" size={size}>
      <img src="/images/logo.png" alt="Plane traveling around the world" />
    </Container>
  );
};

export default Logo;
