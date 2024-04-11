import { IBase, PriorityEnum } from './base.interface'


export interface IToDo extends IBase {
	title: string
	priority: keyof typeof PriorityEnum
	text: string
	deadline?: Date
	createdAt: Date
	isDone: boolean	
}

export interface IToDoQuery extends Omit<IToDo, 'uid' | 'createdAt' | 'isDone'> {}