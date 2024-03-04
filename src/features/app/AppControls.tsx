import React from "react";
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
  cursor: pointer;
`;

const AppControls: React.FC = () => {
  return (
    <ButtonsBox onClick={(e) => console.log(e.target)}>
      <Button className="tab--active">Cities</Button>
      <Button>Countries</Button>
    </ButtonsBox>
  );
};

export default AppControls;
