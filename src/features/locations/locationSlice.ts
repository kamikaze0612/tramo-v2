import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Location } from "../../models/types";

export type LocationState = {
  locations: Location[];
  selectedLocation: Location;
};

const initialState: LocationState = {
  locations: [],
  selectedLocation: {} as Location,
};

export const locationSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    loadLocations(state, action: PayloadAction<Location[]>) {
      state.locations = action.payload;
    },
  },
});

export const { loadLocations } = locationSlice.actions;

export default locationSlice.reducer;
