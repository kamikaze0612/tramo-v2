import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import LocationItem from "./LocationItem";
import { RootState } from "../../store";

const StyledLocationsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 100%;
`;

const LocationsList: React.FC = () => {
  const locations = useSelector(
    (state: RootState) => state.locations.locations
  );

  return (
    <StyledLocationsList>
      {locations.map((location) => (
        <LocationItem key={location.id} location={location} />
      ))}
    </StyledLocationsList>
  );
};

export default LocationsList;
