import Home from '@/components/screens/home/Home'
import { IRoute } from './navigation.types'
import Calendar from '@/components/screens/calendar/Calendar'


export const routes: IRoute[] = [
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Calendar',
		component: Calendar
	}
]