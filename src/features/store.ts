import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './categoriesSlice'
import categoryReducer from './categorySlice'
import mealsReducer from './mealsSlice'

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        category: categoryReducer,
        meals: mealsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch