import { CircleUserRound } from 'lucide-react'

export const routes = [
	{
		path: '/',
		name: 'Dashboard',
	},
	{
		path: '/users',
		name: 'Users',
		icon: <CircleUserRound style={{ width: 18 }} />,
		routes: [
			{
				path: '/users/list',
				name: 'User List',
			},
			{
				path: '/users/create',
				name: 'Create User',
			},
		],
	},
]