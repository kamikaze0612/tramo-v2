import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { LogOut } from "lucide-react";

import Logo from "../../ui/Logo";
import { logout } from "../../services/apiAuthentication";

const StyledAppHeader = styled.header`
  padding: 1.6rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-bg-white);
  box-shadow: var(--shadow-sm);
  z-index: 999;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const Title = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: 600;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const LogoutButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: var(--color-bg-white);
  color: inherit;
  padding: 8px 1.6rem;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 500;

  &:hover {
    background-color: var(--color-bg-black);
    color: var(--color-text-white);
  }
`;

const AppHeader: React.FC = () => {
  const navigate = useNavigate();

  function handleSignOut() {
    logout()
      .then(() => {
        toast.success("Logged out");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
        throw new Error("Something went wrong");
      });
  }

  return (
    <StyledAppHeader>
      <Box>
        <Logo size="small" />
        <Title to="/">tramo</Title>
      </Box>
      <LogoutButton onClick={handleSignOut}>
        Log out
        <LogOut />
      </LogoutButton>
    </StyledAppHeader>
  );
};

export default AppHeader;
