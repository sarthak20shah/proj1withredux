import { VIEW } from "./type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  userdata: { name: "sarthak", email: "sample data heloooo", id: "1211" },
};

export const reducer = (state = initialState, action: PayloadAction<any>) => {
  switch (action.type) {
    case VIEW: {
      return { ...state, userdata: action.payload };
    }
    default:
      return state;
  }
};
