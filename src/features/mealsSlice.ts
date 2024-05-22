import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

interface initialState {
    loading: boolean,
    meal: any[],
    error: string | null
}

const initialState: initialState = {
    loading: false,
    meal: [],
    error: null
}

export const fetchMeal = createAsyncThunk("meals/fetchMeal", async (id: string) => {
    return await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response)
        .then(data => data)
        .catch(error => error)
})

const meals = createSlice({
    name: "meals",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMeal.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchMeal.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false
            state.meal = action.payload.meals
        })
        .addCase(fetchMeal.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default meals.reducer