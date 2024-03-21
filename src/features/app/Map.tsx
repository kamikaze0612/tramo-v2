import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import styled from "styled-components";
import { LocateFixed } from "lucide-react";
import "leaflet/dist/leaflet.css";
import toast from "react-hot-toast";

import Button from "../../ui/Button";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUrlPosition } from "../../hooks/useUrlPosition";
import { useGeolocation } from "../../hooks/useGeolocation";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// eslint-disable-next-line prefer-const
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  @media only screen and (max-width: 27em) {
    width: auto;
    height: auto;
    max-height: 50vh;
  }
`;

const CustomMapContainer = styled(MapContainer)`
  height: 100%;
  cursor: pointer;
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
  transition: background-color 0.3s;
`;

const Map: React.FC = () => {
  const locations = useSelector(
    (state: RootState) => state.locations.locations
  );

  const [mapPosition, setMapPosition] = useState<[number, number]>([
    locations[0].position.lat,
    locations[0].position.lng,
  ]);

  const { lat: mapLat, lng: mapLng } = useUrlPosition();
  const {
    isLoading,
    getUserPosition,
    geolocationError,
    position: geoLocationPosition,
  } = useGeolocation();

  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([+mapLat, +mapLng]);
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geoLocationPosition)
      setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
  }, [geoLocationPosition]);

  if (geolocationError) toast.error(geolocationError);

  function handleUserClick() {
    getUserPosition();
  }

  return (
    <Container>
      <CustomMapContainer center={mapPosition} zoom={7} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={[location.position.lat, location.position.lng]}
          >
            <Popup>
              <City>{location.cityName}</City>
              <Country>
                {location.countryName} {location.emoji}
              </Country>
            </Popup>
          </Marker>
        ))}
        {geoLocationPosition && (
          <Marker position={[geoLocationPosition.lat, geoLocationPosition.lng]}>
            <Popup>Your location</Popup>
          </Marker>
        )}
        <MoveToCenter position={mapPosition} />
        <HandleClick />
      </CustomMapContainer>
      <LocatorButton onClick={handleUserClick}>
        {!isLoading ? "Get my location" : "Getting position..."}
        <LocateFixed />
      </LocatorButton>
    </Container>
  );
};

function MoveToCenter({ position }: { position: [number, number] }) {
  const map = useMap();

  map.setView(position);

  return null;
}

function HandleClick() {
  const navigate = useNavigate();
  const [position, setPosition] = useState<[number, number] | undefined>();

  const map = useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
      navigate(`form/?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position ? (
    <Marker position={position!}>
      <Popup>Add new tour</Popup>
    </Marker>
  ) : null;
}

export default Map;
