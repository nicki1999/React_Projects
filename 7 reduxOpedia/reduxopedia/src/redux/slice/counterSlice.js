import { createSlice } from "@reduxjs/toolkit";
import { resetDestination } from "./destinationSlice";
import { resetReduxOpedia } from "../actions/action";
const initialState = { count: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    incrementMultiplier: (state, action) => {
      state.count += Number(action.payload);
    },

    decrement: (state) => {
      state.count -= 1;
    },
    decrementMultiplier: (state, action) => {
      state.count -= Number(action.payload);
    },
    // resetCount: (state) => {
    //   state.count = 10;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(resetReduxOpedia, (state, action) => {
      state.count = 10;
    });
  },
});

export const {
  increment,
  decrement,
  decrementMultiplier,
  incrementMultiplier,
  resetCount,
} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
