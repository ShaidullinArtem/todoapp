import { IToDo } from 'types/todo.interface'
import { useTypedSelector } from '../redux/useTypedSelector'

export const useTodo = () => {
	const todos = useTypedSelector(state => state.todo)

	const activeTodoArr: IToDo[] = []
	const doneTodoArr: IToDo[] = []

	todos.forEach(todo =>
		!todo.isDone ? activeTodoArr.push(todo) : doneTodoArr.push(todo)
	)

	return {
		active: activeTodoArr,
		done: doneTodoArr,
		length: todos.length
	}
}
