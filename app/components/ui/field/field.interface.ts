import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form'
import { TextInputProps } from 'react-native'


export interface IFieldProps {
	field: ControllerRenderProps<any, any>
	state: ControllerFieldState
	label?: string
}

export type TypeFiledProps = IFieldProps & TextInputProps

export interface IField extends TypeFiledProps {}