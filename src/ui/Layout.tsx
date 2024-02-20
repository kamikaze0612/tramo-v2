import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const StyledLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 80px 1fr auto;
`;

function Layout() {
  return (
    <StyledLayout>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </StyledLayout>
  );
}

export default Layout;
