import React, { FC, PropsWithChildren } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { IButton } from './button.interface'


const Button: FC<PropsWithChildren<IButton>> = ({children, isLoading, ...rest}) => {
  return (
	<TouchableOpacity {...rest} activeOpacity={0.7}>
		{children}
	</TouchableOpacity>
  )
}

export default Button