import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter:10
  },
  reducers: {
    increment: (state) => {      
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementby: (state, action ) => {1
      //state.counter += action.payload;
      console.log(action);
      state.counter = state.counter + action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment , decrement , incrementby} = counterSlice.actions