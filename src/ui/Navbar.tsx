import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  @media only screen and (max-width: 27em) {
    display: none;
  }
`;

const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  list-style: none;
`;

const StyledLink = styled(NavLink)`
  font-size: 1.6rem;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  padding: 4px 0;
  display: block;
  position: relative;
  border-bottom: 2px solid white;

  &::after {
    content: "";
    width: 100%;
    height: auto;
    display: inline-block;
    position: absolute;
    bottom: -100%;
    left: 0;
  }

  &:hover {
    color: var(--color-text-secondary);
  }
`;

type Link = {
  label: string;
  href: string;
};

type NavbarProps = {
  links: Link[];
};

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <StyledNavbar>
      <StyledNavList>
        {links.map((link) => (
          <li key={link.label}>
            <StyledLink to={link.href}>{link.label}</StyledLink>
          </li>
        ))}
      </StyledNavList>
    </StyledNavbar>
  );
};

export default Navbar;
