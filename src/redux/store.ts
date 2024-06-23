import { configureStore, combineReducers } from '@reduxjs/toolkit';
import calcListReducer from './sllices/calcListSlice'


const rootReducer = combineReducers({
     calcList: calcListReducer,
})


const store = configureStore({
     reducer: rootReducer,
     middleware: getDefaultMiddleware => getDefaultMiddleware(),
     devTools: process.env.NODE_ENV !== 'production',
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;