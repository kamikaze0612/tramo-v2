import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Navbar";

const StyledHeader = styled.header`
  display: flex;
  height: 80px;
  padding: 0 6.4rem;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-bg-white);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
  position: relative;
`;

const Center = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Header() {
  return (
    <StyledHeader>
      <Navbar links={[{ label: "Contact", href: "/contact" }]} />
      <Center>
        <Logo size="normal" />
      </Center>
      <Navbar
        links={[
          { label: "App", href: "/app" },
          { label: "Log In", href: "/login" },
          { label: "Sign Up", href: "/signup" },
        ]}
      />
    </StyledHeader>
  );
}

export default Header;
