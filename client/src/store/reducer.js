import { createSlice } from '@reduxjs/toolkit';

// create the central store

const initialState = {
  categories: [],
  transaction: []
}

export const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    getTransactions: (state) => {

    }
  }
})

export const { getTransactions } = expenseSlice.actions;
export default expenseSlice.reducer;