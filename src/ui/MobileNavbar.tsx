import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledMobileNavbar = styled.nav`
  width: 100vw;
  height: 100vh;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(3px);
  width: 0;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transition: all 0.4s ease;

  @media only screen and (max-width: 27em) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;
`;

const MobileNavItem = styled.li``;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 3rem;
  color: inherit;
  font-weight: 500;
  border-bottom: 2px solid currentColor;
  padding-bottom: 2px;
`;

type Link = {
  label: string;
  href: string;
};

type MovileNavbarProps = {
  links: Link[];
  isToggled: boolean;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNavbar: React.FC<MovileNavbarProps> = ({
  links,
  isToggled,
  onClick,
}) => {
  return (
    <StyledMobileNavbar className={isToggled ? "show" : ""}>
      <MobileNavList>
        {links.map((link, index) => (
          <MobileNavItem key={index}>
            <StyledNavLink onClick={() => onClick(false)} to={link.href}>
              {link.label}
            </StyledNavLink>
          </MobileNavItem>
        ))}
      </MobileNavList>
    </StyledMobileNavbar>
  );
};

export default MobileNavbar;
