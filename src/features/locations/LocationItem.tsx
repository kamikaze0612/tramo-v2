import React from "react";
import styled from "styled-components";

import { Location } from "../../types";
import { format } from "date-fns";
import ListItem from "../../ui/ListItem";

const StyledLocationItem = styled(ListItem)`
  display: flex;
  justify-content: space-between;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`;

const LocationDetails = styled.div`
  padding: 2.4rem 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const CityName = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const CountryFlag = styled.span`
  font-size: 1.6rem;
  margin-right: 6px;
`;

const VisitedDate = styled.time`
  font-size: 1.4rem;
  color: var(--color-text-secondary);
`;

const DeleteBtn = styled.button`
  min-height: 100%;
  border: none;
  background-color: inherit;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.6rem 0 1.2rem;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;
  border-left: 1px solid var(--color-border-white);

  &:hover {
    background-color: var(--color-bg-red);
    color: var(--color-text-white);
  }
`;

type LocationItemProps = {
  location: Location;
};

const LocationItem: React.FC<LocationItemProps> = ({ location }) => {
  return (
    <StyledLocationItem>
      <LocationDetails>
        <CityName>
          <CountryFlag>{location.emoji}</CountryFlag>
          {location.cityName}
        </CityName>
        <VisitedDate>
          {format(new Date(location.date), "MMMM dd, yyyy")}
        </VisitedDate>
      </LocationDetails>
      <DeleteBtn>&times;</DeleteBtn>
    </StyledLocationItem>
  );
};

export default LocationItem;
