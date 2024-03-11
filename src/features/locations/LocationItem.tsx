import React from "react";
import styled from "styled-components";

import { Location } from "../../types";
import { format } from "date-fns";
import ListItem from "../../ui/ListItem";
import { useNavigate } from "react-router-dom";
import { deleteLocation } from "../../services/apiLocations";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { removeLocation } from "./locationSlice";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick() {
    navigate(
      `${location.id}/?lat=${location.position.lat}&lng=${location.position.lng}`
    );
  }

  function handleDelete(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();

    deleteLocation(location.id.toString())
      .then(() => {
        toast.success("Location deleted");
        dispatch(removeLocation(location.id));
      })
      .catch((err) => {
        console.log(err);
        toast.error("Location could not be deleted");
      });
  }

  return (
    <StyledLocationItem onClick={handleClick}>
      <LocationDetails>
        <CityName>
          <CountryFlag>{location.emoji}</CountryFlag>
          {location.cityName}
        </CityName>
        <VisitedDate>
          {format(new Date(location.date), "MMMM dd, yyyy")}
        </VisitedDate>
      </LocationDetails>
      <DeleteBtn onClick={handleDelete}>&times;</DeleteBtn>
    </StyledLocationItem>
  );
};

export default LocationItem;
