import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  list-style: none;
`;

const StyledLink = styled(NavLink)<NavLinkProps>`
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

type NavLinkProps = {
  label: string;
};

type Link = {
  label: string;
  href: string;
};

type NavbarProps = {
  links: Link[];
};

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav>
      <StyledNavList>
        {links.map((link) => (
          <li key={link.label}>
            <StyledLink label={link.label} to={link.href}>
              {link.label}
            </StyledLink>
          </li>
        ))}
      </StyledNavList>
    </nav>
  );
};

export default Navbar;
