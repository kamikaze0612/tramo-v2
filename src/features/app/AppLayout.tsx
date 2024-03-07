import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Map from "./Map";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import MainApp from "./MainApp";
import { useLocations } from "./useLocations";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const AppBox = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr auto;
`;

const AppLayout: React.FC = () => {
  const { locations, isLoading } = useLocations();

  if (isLoading) return <p>Loading...</p>;

  return (
    <Container>
      <AppBox>
        <AppHeader />
        <MainApp>
          <Outlet />
        </MainApp>
        <AppFooter />
      </AppBox>
      <Map locations={locations!} />
    </Container>
  );
};

export default AppLayout;
