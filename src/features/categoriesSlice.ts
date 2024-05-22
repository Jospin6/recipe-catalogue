import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

interface initialState {
    loading: boolean,
    categories: any[],
    error: string | null
}

const initialState: initialState = {
    loading: false,
    categories: [],
    error: null
}

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
    return await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(response => response)
        .then(data => data)
        .catch(error => error.message)
})

const categories = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false
            state.categories = action.payload.categories
        })
        .addCase(fetchCategories.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false
            state.error = action.payload
        })
    }
})


export default categories.reducer