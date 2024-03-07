import { useQuery } from "@tanstack/react-query";
import { getLocations } from "../../services/apiLocations";

export function useLocations() {
  const {
    data: locations,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["locations"],
    queryFn: getLocations,
  });

  if (error) {
    console.error(error);
    throw new Error("Locations could not be fetched");
  }

  return { locations, isLoading };
}
