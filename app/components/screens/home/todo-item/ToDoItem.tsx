import Button from '@/components/ui/buttons/Button'
import { useActions } from '@/hooks/redux/useActions'
import { AntDesign, Feather } from '@expo/vector-icons'
import cn from 'classnames'
import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { PriorityEnum } from '../../../../types/base.interface'
import { IToDoItem } from './todo-item.interface'

const ToDoItem: FC<IToDoItem> = ({ todo, className, ...rest }) => {
	const { toggleToDo, toggleToDoIsDone } = useActions()
	const priorityColor = PriorityEnum[todo.priority]

	console.log(todo)

	return (
		<View
			{...rest}
			className={cn(
				`my-2 p-4 bg-white rounded-lg flex-row justify-center items-start ${
					todo.isDone && 'opacity-50'
				}`,
				className
			)}
		>
			<Button className='w-[10%] pt-1' onPress={() => toggleToDo(todo)}>
				<AntDesign name='closecircleo' size={20} color='gray' />
			</Button>
			<View className='w-[90%]'>
				<View className='flex-row justify-between items-start'>
					<View className='mx-2'>
						<Text className='text-black text-lg font-medium'>{todo.title}</Text>
						<Text className='text-gray text-sm'>{todo.text}</Text>
						<View
							style={{ borderColor: priorityColor }}
							className={`border-[1.5px] rounded-md px-2.5 py-0.5 my-2`}
						>
							<Text
								style={{ color: priorityColor }}
								className={`text-base text-center`}
							>
								{todo.priority.toLowerCase()}
							</Text>
						</View>
						{todo.deadline && (
							<Text className='text-black/60 text-base'>
								{new Intl.DateTimeFormat('ru-RU', {
									year: 'numeric',
									month: 'long',
									day: 'numeric'
								}).format(new Date(todo.deadline))}
							</Text>
						)}
					</View>
					<Button onPress={() => toggleToDoIsDone(todo)}>
						<Feather
							size={20}
							name={todo.isDone ? 'check-square' : 'square'}
							color={todo.isDone ? 'green' : 'gray'}
						/>
					</Button>
				</View>
			</View>
		</View>
	)
}

export default ToDoItem
