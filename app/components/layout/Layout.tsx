import { AntDesign } from '@expo/vector-icons'
import cn from 'classnames'
import React, { FC, PropsWithChildren, useState } from 'react'
import { Platform, Text, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import Button from '../ui/buttons/Button'
import PrimaryButton from '../ui/buttons/PrimaryButton'
import { ILayout } from './layout.interface'
import ToDoForm from '../ui/forms/ToDoForm'

const Layout: FC<PropsWithChildren<ILayout>> = ({
	children,
	title,
	className,
	...rest
}) => {
	const { top } = useSafeAreaInsets()
	const [showModal, setShowModal] = useState(false)

	return (
		<>
			<SafeAreaView
				{...rest}
				className={cn('bg-white px-6 py-4 rounded-b-2xl mb-2', className)}
				style={{
					paddingTop: Platform.OS === 'ios' ? top / 5 : top * 0.5
				}}>
				{title && <Text className='text-black text-3xl font-bold bg-white'>{title}</Text>}
			</SafeAreaView> 
			<View className='flex-1'>
				{showModal ? (
					<View className='px-6 py-4 bg-white flex-1 rounded-t-2xl'>
						<Button className='ml-auto' onPress={() => setShowModal(false)}>
							<AntDesign name='close' size={24} color='black' />
						</Button>
						<ToDoForm />
					</View>
				) : (
					<View className='flex-1 relative px-6'>
						{children}
						<View className='absolute right-8 bottom-8'>
							<PrimaryButton onPress={() => setShowModal(true)}>
								<AntDesign name='plus' size={24} color='white' />
							</PrimaryButton>
						</View>
					</View>
				)}
			</View>
		</>
	)
}

export default Layout
