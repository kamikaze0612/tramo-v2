import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  list-style: none;
`;

const StyledLink = styled(NavLink)`
  font-size: 1.6rem;
  text-decoration: none;
  color: currentColor;
`;

type Link = {
  label: string;
  href: string;
};

type NavbarProps = {
  links: Link[];
};

function Navbar({ links }: NavbarProps) {
  return (
    <nav>
      <StyledNavList>
        {links.map((link) => (
          <li key={link.label}>
            <StyledLink to={link.href}>{link.label}</StyledLink>
          </li>
        ))}
      </StyledNavList>
    </nav>
  );
}

export default Navbar;
