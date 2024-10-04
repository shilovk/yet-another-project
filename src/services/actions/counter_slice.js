import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    incrementByValue: (state, action) => state + action.payload,
  },
});

// counterSlice.actions
// counterSlice.actions.increment()
// counterSlice.reducer