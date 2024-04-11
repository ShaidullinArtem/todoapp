import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IToDo } from 'types/todo.interface'


const initialState: IToDo[] = []

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		toggleToDo: (state, action: PayloadAction<IToDo>) => {
			const isExist = state.some(todo => todo.uid === action.payload.uid)

			if (isExist) return state.filter(todo => todo.uid !== action.payload.uid)
			else state.push(action.payload)
			return state
		},
		toggleToDoIsDone: (state, action: PayloadAction<IToDo>) => {
			const todo = state.find(item => item.uid === action.payload.uid)
			if (todo) {
				todo.isDone = !todo.isDone
			}

			return state
		}
	}
})

export const todoReducer = todoSlice.reducer
export const todoActions = todoSlice.actions
