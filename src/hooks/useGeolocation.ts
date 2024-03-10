import { useState } from "react";
import { GeolocationPosition } from "../types";
import { useNavigate } from "react-router-dom";

export function useGeolocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState<GeolocationPosition | null>();
  const [geolocationError, setGeolocationError] = useState("");
  const navigate = useNavigate();

  function getUserPosition() {
    if (!navigator.geolocation) {
      return setGeolocationError("Your browser does not support positioning!");
    }

    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        navigate(
          `/app/form/?lat=${pos.coords.latitude}&lng=${pos.coords.longitude}`
        );
        setIsLoading(false);
      },
      (err) => {
        setGeolocationError(err.message);
        setIsLoading(false);
      }
    );
  }

  return { isLoading, position, getUserPosition, geolocationError };
}
