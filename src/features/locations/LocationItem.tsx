import React from "react";
import styled from "styled-components";

import { Location } from "../../models/types";
import { format } from "date-fns";

const StyledLocationItem = styled.li`
  background-color: var(--color-bg-white);
  padding: 2.4rem 3.2rem;
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
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

type LocationItemProps = {
  location: Location;
};

const LocationItem: React.FC<LocationItemProps> = ({ location }) => {
  return (
    <StyledLocationItem>
      <CityName>
        <CountryFlag>{location.emoji}</CountryFlag>
        {location.cityName}
      </CityName>
      <VisitedDate>
        {format(new Date(location.date), "MMMM dd, yyyy")}
      </VisitedDate>
    </StyledLocationItem>
  );
};

export default LocationItem;
