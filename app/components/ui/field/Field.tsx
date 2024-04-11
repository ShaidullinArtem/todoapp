import React, { FC } from 'react'
import { Text, TextInput, View } from 'react-native'
import { IField } from './field.interface'
import cn from 'classnames'

const Field: FC<IField> = ({field, state, label, className, defaultValue, ...rest}) => {
  return (
	<>
		{label && (
			<Text className={`text-black/60 my-0.5 text-base font-normal`}>
				{label}
			</Text>
		)}
		<TextInput
			{...rest}
			className={cn(`border-2 border-dark-gray rounded-md px-4 text-black bg-white`, className)}
			value={field.value}
			defaultValue={defaultValue}
			onBlur={field.onBlur}
			onChangeText={field.onChange}
			placeholderTextColor={`#E8E8E8`}
			style={{
				minHeight: 40,
				paddingTop: 12,
				textAlignVertical: 'top',
				textAlign: 'left',
				lineHeight: 20,
				borderColor: 
					!field.value && !state.error
					? '#E8E8E8'
					: state.error
						? '#F23C30'
						: '#5FA957'
			}}
		/>
		{!!state.error && (
			<Text className='text-red-400 text-xs font-medium'>
				{state.error.message}
			</Text>
		)}
	</>
  )
}

export default Field
