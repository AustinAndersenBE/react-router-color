import { createSlice } from '@reduxjs/toolkit';

const colorSlice = createSlice({
  name: 'color',
  initialState: [
    { name: 'red', value: '#ff0000' },
    { name: 'green', value: '#00ff00' },
    { name: 'blue', value: '#0000ff' }
  ],
  reducers: { 
    addColor: (state, action) => {
      
      if (typeof action.payload === 'object' && action.payload.hasOwnProperty('name') && action.payload.hasOwnProperty('value')) {
        state.push(action.payload);
      }
    },
  }, 
});

export const { addColor } = colorSlice.actions;
export default colorSlice.reducer;
