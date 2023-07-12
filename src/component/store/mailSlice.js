import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: {
    isSendMailOpen: false,
    inboxCount: 0,
  },
  reducers: {
    openCompose: (state) => {
      state.isSendMailOpen = true;
    },
    closeCompose: (state) => {
      state.isSendMailOpen = false;
    },
    setInboxCount: (state, action) => {
      state.inboxCount = action.payload;
    },
  },
});
export const { openCompose, closeCompose, setInboxCount } = mailSlice.actions;
export default mailSlice.reducer;
export const selectMailOpen = (state) => state.mail.isSendMailOpen;
export const selectInboxCount = (state) => state.mail.inboxCount;
