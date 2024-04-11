import { useActions } from '@/hooks/redux/useActions'
import { useTypedSelector } from '@/hooks/redux/useTypedSelector'
import React, { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
import DatePicker from 'react-native-modern-datepicker'
import { PriorityEnum } from '../../../types/base.interface'
import { IToDo, IToDoQuery } from '../../../types/todo.interface'
import Button from '../buttons/Button'
import PrimaryButton from '../buttons/PrimaryButton'
import Field from '../field/Field'
import { ScrollView } from 'react-native'

const ToDoForm = () => {

	const [activePriority, setActivePriority] =
		useState<keyof typeof PriorityEnum>()
	const priorities: (keyof typeof PriorityEnum)[] = [
		'OMEGAGIGA',
		'HIGH',
		'MEDIUM',
		'LOW'
	]

	const { control, handleSubmit, setValue } = useForm<IToDoQuery>({
		mode: 'onChange'
	})

	const { toggleToDo } = useActions()
	const todos = useTypedSelector(state => state.todo)

	const handleDatePick = (value: string) => {
		const [year, month, day] = value.split('/')
		setValue('deadline', new Date(parseInt(year), parseInt(month) - 1, parseInt(day)))
		console.log(control._formValues)

	}

	const onSubmit: SubmitHandler<IToDoQuery> = data => {
		const todo: IToDo = {
			...data,
			uid: `${todos.length + 1}`,
			createdAt: new Date(),
			isDone: false
		}

		toggleToDo(todo)
	}


	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<Controller
				control={control}
				name='title'
				rules={{
					required: 'Заполните поле',
					maxLength: {
						value: 50,
						message: 'Название не может быть больше 50 символов'
					}
				}}
				render={({ field: field, fieldState: state }) => (
					<Field label='Название' field={field} state={state} />
				)}
			/>
			<Controller
				control={control}
				name='text'
				rules={{
					required: 'Заполните поле',
					maxLength: {
						value: 5_000,
						message: 'Описание не может быть больше 5000 символов'
					}
				}}
				render={({ field: field, fieldState: state }) => (
					<Field
						multiline
						numberOfLines={10}
						label='Описание'
						field={field}
						state={state}
						className='justify-start items-start text-start'
					/>
				)}
			/>
			<Text className='text-black/60 my-0.5 text-base'>Приоритетность</Text>
			<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
				{priorities.map((priority, index) => (
					<Button
						key={`priority-${priority}-${index}`}
						onPress={() => {
							setValue('priority', priority)
							setActivePriority(priority)
						}}
					>
						<View
							style={{
								alignSelf: 'flex-start',
								borderColor:
									activePriority === priority
										? PriorityEnum[activePriority]
										: '#C3C3C3'
							}}
							className='border-[1.5px] rounded-md px-2.5 py-2 mr-1 my-1'
						>
							<Text
								style={{
									color:
										activePriority === priority
											? PriorityEnum[activePriority]
											: '#C3C3C3'
								}}
							>
								{priority.toLowerCase()}
							</Text>
						</View>
					</Button>
				))}
			</View>
			<Text className='text-black/60 mt-4 text-base'>Выбери дату окончания задачи</Text>
			<DatePicker
				mode='calendar'
				selected={control._formValues.deadline}
				onSelectedChange={handleDatePick}
			/>
			<PrimaryButton onPress={handleSubmit(onSubmit)} className='mt-16'>
				<Text className='text-white text-base text-center'>Создать</Text>
			</PrimaryButton>
		</ScrollView>
	)
}

export default ToDoForm
