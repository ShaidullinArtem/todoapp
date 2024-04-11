import { ComponentType } from 'react'


export type TypeRootStackParamList = {
	Home: undefined
	Calendar: undefined
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
}