import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const ButtonsBox = styled.div`
  display: flex;
  background-color: var(--color-bg-white);
  padding: 0.6rem 1.2rem;
  border-radius: 100px;
  box-shadow: var(--shadow-sm);
`;

const Button = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.8rem 1.2rem;
  border-radius: 50px;
  z-index: 10;
  color: inherit;
  cursor: pointer;

  &:hover {
    color: var(--color-text-tertiary);
  }
`;

const AppControls: React.FC = () => {
  const navigate = useNavigate();
  const route = useLocation();

  return (
    <ButtonsBox id="controls-box">
      <Button
        onClick={() => navigate("locations")}
        className={route.pathname.includes("locations") ? "tab--active" : ""}
      >
        Cities
      </Button>
      <Button
        onClick={() => navigate("countries")}
        className={route.pathname.includes("countries") ? "tab--active" : ""}
      >
        Countries
      </Button>
    </ButtonsBox>
  );
};

export default AppControls;
