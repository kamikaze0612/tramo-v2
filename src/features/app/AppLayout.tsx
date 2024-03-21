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
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media only screen and (max-width: 80em) {
    grid-template-columns: 2fr 3fr;
  }

  @media only screen and (max-width: 56.25em) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 27em) {
    grid-template-columns: 1fr;
    grid-template-rows: 50vh 50vh;
  }
`;

const AppBox = styled.div`
  display: grid;
  height: 100vh;
  max-height: 100vh;
  overflow: auto;
  grid-template-rows: auto 1fr auto;

  @media only screen and (max-width: 27em) {
    height: 100%;
    max-height: 50vh;
  }
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
