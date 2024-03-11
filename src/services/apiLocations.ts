import supabase from "./supabase";

import { CreatedLocation, Location } from "../types";

export async function getLocations() {
  const { data: locations, error } = await supabase.from("cities").select("*");

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return locations as Location[];
}

export async function createLocation(newLocation: CreatedLocation) {
  const { error } = await supabase.from("cities").insert(newLocation);

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function deleteLocation(id: string) {
  const { error } = await supabase.from("cities").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
}
