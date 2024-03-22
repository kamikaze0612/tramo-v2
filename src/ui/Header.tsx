import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Logo from "./Logo";
import Navbar from "./Navbar";
import { useEffect, useMemo, useState } from "react";
import { getCurrentUser } from "../services/apiAuthentication";
import MobileNavbar from "./MobileNavbar";

const StyledHeader = styled.header`
  display: flex;
  height: 80px;
  padding: 0 6.4rem;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-bg-white);
  box-shadow: var(--shadow-md);
  position: relative;

  @media only screen and (max-width: 27em) {
    justify-content: flex-end;
    padding: 0 3.2rem;
  }
`;

const Center = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ToggleButton = styled.button`
  padding: 8px 4px;
  height: 32px;
  width: 32px;
  border-radius: 6px;
  border: 1px solid var(--color-border-white);
  background-color: var(--color-bg-white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 999;
  display: none;

  @media only screen and (max-width: 27em) {
    display: flex;
  }

  & span {
    height: 2px;
    width: 100%;
    display: block;
    background-color: var(--color-bg-black--1);
  }
`;

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        if (user) {
          setIsLoggedIn(true);
        }
      })
      .catch((err) => console.log(err));
  }, [navigate]);

  const links = useMemo(() => {
    if (isLoggedIn) {
      return [{ label: "App", href: "/app" }];
    }
    if (!isLoggedIn) {
      return [
        { label: "App", href: "/app" },
        { label: "Log In", href: "/login" },
        { label: "Sign Up", href: "/signup" },
      ];
    }
  }, [isLoggedIn]);

  return (
    <StyledHeader>
      <Navbar links={[{ label: "How to use?", href: "/how-to-use" }]} />
      <Center>
        <Logo size="normal" />
      </Center>
      <Navbar links={links!} />
      <ToggleButton onClick={() => setIsToggled((cur) => !cur)}>
        <span />
        <span />
        <span />
      </ToggleButton>

      <MobileNavbar
        isToggled={isToggled}
        onClick={setIsToggled}
        links={[
          { label: "How to use?", href: "/how-to-use" },
          { label: "App", href: "/app" },
          { label: "Log In", href: "/login" },
          { label: "Sign Up", href: "/signup" },
        ]}
      />
    </StyledHeader>
  );
}

export default Header;
