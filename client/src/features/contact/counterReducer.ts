
import { createSlice } from "@reduxjs/toolkit";

export type CounterState = {
  data: number
}

const initialState: CounterState = {
  data: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.data += action.payload;
    },
    decrement: (state, action) => {
      state.data -= action.payload;
    },
    reset: (state) => {
      state.data = 0;
    }
  }
});

export const { increment, decrement, reset } = counterSlice.actions;



export const oldincrement = (amount = 1) => {
  return {
    type: 'increment',
    payload: amount
  }
}

export const olddecrement = (amount = 1) => {
  return {
    type: 'decrement',
    payload: amount
  }
}

export const counterReducer = (state = initialState, action: { type: 'string', payload: number }) => {
  switch (action.type as string) {
    case 'increment':
      return {
        ...state,
        data: state.data + action.payload
      }
    case 'decrement':
      return {
        ...state,
        data: state.data - action.payload
      }
    case 'reset':
      return {
        ...state,
        data: 0
      }
    default:
      return state;
  }
}