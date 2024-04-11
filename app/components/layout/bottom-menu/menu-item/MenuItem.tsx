import Button from '@/components/ui/buttons/Button'
import React, { FC } from 'react'
import { IMenuItemProps } from './menu-item.interface'
import {FontAwesome} from '@expo/vector-icons'

const MenuItem: FC<IMenuItemProps> = ({ item, nav, currentRoute }) => {
	const isActive = currentRoute === item.path

	return (
		<Button
		className={`w-1/2 items-center py-1`}
		onPress={() => nav(item.path)}>
			<FontAwesome
				name={item.icon}
				size={item.path === 'Home' ? 34 : 28}
				color={isActive ? '#1890FF' : '#C3C3C3'}
			/>
		</Button>
	)
}

export default MenuItem
