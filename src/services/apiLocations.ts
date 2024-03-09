import supabase from "./supabase";

import { Location } from "../models/types";

export async function getLocations() {
  const { data: locations, error } = await supabase.from("cities").select("*");

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return locations as Location[];
}
