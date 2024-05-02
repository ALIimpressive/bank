import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  finks: JSON.parse(localStorage.getItem("finks")) || [],
};

const FinkAdds = createSlice({
  name: "Fink",
  initialState,
  reducers: {
    addFink: (state, action) => {
      let res = [...state.finks, action.payload];
      localStorage.setItem("finks", JSON.stringify(res));
      let now = new Date();
      console.log(now);
      return { ...state, finks: res };
    },
    deleteFink: (state, action) => {
      state.finks = state.finks.filter((el) => el.id !== action.payload);
      localStorage.setItem("finks", JSON.stringify(state.finks));
    },
  },
});

export const { addFink, now, deleteFink } = FinkAdds.actions;
export default FinkAdds.reducer;
