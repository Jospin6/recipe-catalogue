import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

interface initialState {
    loading: boolean,
    category: any[],
    error: string | null
}

const initialState: initialState = {
    loading: false,
    category: [],
    error: null
}

export const fetchCategory = createAsyncThunk("category/fetchCategory", async (term: string) =>{
    return await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${term}`)
        .then(response => response)
        .then(data => data)
        .catch(error => error.message)
})

const category = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategory.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchCategory.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false
            state.category = action.payload.meals
        })
        .addCase(fetchCategory.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false
            state.error = action.payload
        })
    }
})


export default category.reducer