import { createSlice } from "@reduxjs/toolkit";

const initialExpenseState = {
    expenses: [],
    editData: {},
}

const expenseSlice = createSlice({
    name: 'expenses',
    initialState: initialExpenseState,
    reducers: {
        addExpense(state, action) {
            state.expenses = [...action.payload]
        },
        editExpense(state, action) {
            state.editData = action.payload
        },
    },
})

export const expenseActions = expenseSlice.actions;

export default expenseSlice.reducer;