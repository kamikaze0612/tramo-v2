import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Map from "./Map";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import MainApp from "./MainApp";
import { getLocations } from "../../services/apiLocations";
import { store } from "../../store";
import { loadLocations } from "../locations/locationSlice";

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
  return (
    <Container>
      <AppBox>
        <AppHeader />
        <MainApp>
          <Outlet />
        </MainApp>
        <AppFooter />
      </AppBox>
      <Map />
    </Container>
  );
};

export async function loader() {
  const locations = await getLocations();
  store.dispatch(loadLocations(locations));

  return locations;
}

export default AppLayout;
