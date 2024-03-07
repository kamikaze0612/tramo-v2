import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import { LocateFixed } from "lucide-react";

import Button from "../../ui/Button";
import { Location } from "../../models/location";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const CustomMapContainer = styled(MapContainer)`
  height: 100%;
`;

const City = styled.span`
  font-size: 1.6rem;
`;

const Country = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`;

const LocatorButton = styled(Button)`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
`;

type MapProps = {
  locations: Location[];
};

const Map: React.FC<MapProps> = ({ locations }) => {
  return (
    <Container>
      <CustomMapContainer
        center={[35.67, 139.69]}
        zoom={7}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {locations.map((location) => (
          <Marker position={[location.position.lat, location.position.lng]}>
            <Popup>
              <City>{location.cityName}</City>
              <Country>
                {location.countryName} {location.emoji}
              </Country>
            </Popup>
          </Marker>
        ))}
      </CustomMapContainer>

      <LocatorButton>
        Get my location <LocateFixed />
      </LocatorButton>
    </Container>
  );
};

export default Map;
