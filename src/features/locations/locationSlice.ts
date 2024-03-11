import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Location } from "../../types";

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
    removeLocation(state, action: PayloadAction<number>) {
      state.locations = state.locations.filter(
        (location) => location.id !== action.payload
      );
    },
  },
});

export const { loadLocations, removeLocation } = locationSlice.actions;

export default locationSlice.reducer;
