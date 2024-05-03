import { createSlice } from "@reduxjs/toolkit";

interface State {
  currentLayout?: string;
}
const initialState: State = {
  currentLayout: undefined,
};
const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setCurrentLayout: (state, action) => {
      return {
        ...state,
        currentLayout: action.payload,
      };
    },
  },
});

export const { setCurrentLayout } = navigationSlice.actions;

export const selectCurrentLayout = (state: { app: { navigation: State } }) =>
  state.app.navigation.currentLayout;

export default navigationSlice.reducer;
