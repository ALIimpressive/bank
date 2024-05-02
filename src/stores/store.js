import { configureStore } from "@reduxjs/toolkit";
import fink from "./fink.js";

export const store = configureStore({
  reducer: {
    fink,
  },
});
