import React from "react";
import { useSelector } from "react-redux";

import LocationItem from "./LocationItem";
import { RootState } from "../../store";
import List from "../../ui/List";

const LocationsList: React.FC = () => {
  const locations = useSelector(
    (state: RootState) => state.locations.locations
  );

  return (
    <List>
      {locations.map((location) => (
        <LocationItem key={location.id} location={location} />
      ))}
    </List>
  );
};

export default LocationsList;
