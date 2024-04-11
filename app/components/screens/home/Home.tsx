import Layout from '@/components/layout/Layout'
import { useTodo } from '@/hooks/todo/useToDo'
import { Image } from 'expo-image'
import React from 'react'
import { Text, View, useWindowDimensions } from 'react-native'
import ToDoItem from './todo-item/ToDoItem'

const Home = () => {
	const { width } = useWindowDimensions()
	const { active, done, length } = useTodo()

	if (length === 0) {
		return (
			<Layout title='Todo'>
				<View className={`flex-1 justify-center items-center`}>
					<Image
						style={{ width: width * 0.9, height: width * 0.9 }}
						source={require('../../../../assets/svg/empty-todos.svg')}
					/>
					<Text className='text-black text-xl font-medium'>
						У вас пока нет активных todo
					</Text>
				</View>
			</Layout>
		)
	}

	return (
		<Layout title='Todo'>
			{active.length !== 0 ? (
				active.map(todo => <ToDoItem key={`todo-${todo.uid}`} todo={todo} />)
			) : (
				<Text className='text-gray-400 text-xl font-medium mx-auto my-4'>
					Вы завершили все todo
				</Text>
			)}

			<View className='w-full h-[1px] bg-gray-300 rounded-md my-1' />
			{done.map(todo => (
				<ToDoItem key={`done-todo-${todo.uid}`} todo={todo} />
			))}
		</Layout>
	)
}

export default Home
