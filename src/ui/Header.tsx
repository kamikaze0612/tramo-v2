import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Logo from "./Logo";
import Navbar from "./Navbar";
import { useEffect, useMemo, useState } from "react";
import { getCurrentUser } from "../services/apiAuthentication";

const StyledHeader = styled.header`
  display: flex;
  height: 80px;
  padding: 0 6.4rem;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-bg-white);
  box-shadow: var(--shadow-md);
  position: relative;
`;

const Center = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      <Navbar links={[{ label: "How To Use?", href: "/how-to-use" }]} />
      <Center>
        <Logo size="normal" />
      </Center>
      <Navbar links={links!} />
    </StyledHeader>
  );
}

export default Header;
