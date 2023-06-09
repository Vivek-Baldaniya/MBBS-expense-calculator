import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  domain: "India",
  place: "Karnataka",
  sector: "private",
  living: "off-campus",
  food: "Meal",
  transportation: "rent",
  activity: "sports",
};

export const CostSlice = createSlice({
  name: "cost",
  initialState,
  reducers: {
    addDomain: (state, action) => {
      state.domain = action.payload;
    },
    addPlace: (state, action) => {
      state.place = action.payload;
    },
    addSector: (state, action) => {
      state.sector = action.payload;
    },
    addLiving: (state, action) => {
      state.living = action.payload;
    },
    addFood: (state, action) => {
      state.food = action.payload;
    },
    addTransportation: (state, action) => {
      state.transportation = action.payload;
    },
    addActivities: (state, action) => {
      state.activity = action.payload;
    },
  },
});

export const {
  addDomain,
  addPlace,
  addSector,
  addLiving,
  addFood,
  addTransportation,
  addActivities,
} = CostSlice.actions;

export default CostSlice.reducer;
