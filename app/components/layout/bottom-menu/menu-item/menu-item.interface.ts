import {FontAwesome} from '@expo/vector-icons'
import { TypeRootStackParamList } from 'navigation/navigation.types'


export interface IMenuItem {
	icon: keyof typeof FontAwesome.glyphMap
	path: keyof TypeRootStackParamList
}

export type TypeNav = (name: keyof TypeRootStackParamList) => void

export interface IMenuItemProps {
	item: IMenuItem
	nav: TypeNav
	currentRoute?: string
}
