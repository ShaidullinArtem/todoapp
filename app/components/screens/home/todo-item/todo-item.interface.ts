import { ViewProps } from 'react-native'
import { IToDo } from 'types/todo.interface'


export interface IToDoItem extends ViewProps {
	todo: IToDo
}