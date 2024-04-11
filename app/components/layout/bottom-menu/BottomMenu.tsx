import React, { FC } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { IBottomMenu } from './bottom-menu.interface'
import MenuItem from './menu-item/MenuItem'
import { menuData } from './menu.data'

const BottomMenu: FC<IBottomMenu> = props => {
	const { bottom } = useSafeAreaInsets()

	return (
		<View
			style={{ paddingBottom: bottom + 10 }}
			className={`p-2 flex flex-row justify-between items-center w-full bg-white rounded-t-xl`}
		>
			{menuData.map(item => (
				<MenuItem item={item} key={item.path} {...props} />
			))}
		</View>
	)
}

export default BottomMenu
