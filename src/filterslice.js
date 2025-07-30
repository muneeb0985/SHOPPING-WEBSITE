import { createSlice } from "@reduxjs/toolkit";

const filterslice = createSlice({
  name: 'filter',
  initialState: {
    category: "All",
  },
  reducers: {
    setcategory: (state, action) => {
      state.category = action.payload;
    },
  },
});
export const { setcategory } = filterslice.actions;
export default filterslice.reducer;
