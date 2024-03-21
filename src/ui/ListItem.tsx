import styled from "styled-components";

const ListItem = styled.li`
  background-color: var(--color-bg-white);
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  border-left: 6px solid var(--color-border-dark);
  width: 32rem;
  overflow: hidden;

  @media only screen and (max-width: 56.25em) {
    border-left: 4px solid var(--color-border-dark);
  }
`;

export default ListItem;
