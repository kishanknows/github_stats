import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {baseUrl: ''},
  reducers: {
    setBaseUrl(state, action) {
      state.baseUrl = 'https://api.github.com/users/' + action.payload;
    },
  },
});

export const {setBaseUrl} = userSlice.actions;
export default userSlice.reducer;
