import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: [],
  reducers: {
    addRestaurant: (state, action) => {
        return action.payload
    },
  },
});

export const { addRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;