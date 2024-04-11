import { combineReducers } from '@reduxjs/toolkit'
import { todoReducer } from './slices/todo.slice'


export const rootReducer = combineReducers({
	todo: todoReducer
})
