import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Header from '../Header';
import Home from '../Home';
import Login from '../Login';
import Order from '../order';
import { PrivateRouter } from '../privateRoute';
import Register from '../Register';



   const router = createBrowserRouter([
			{
				path: '/',
				element: <Main></Main>,
				children: [
					{ path: '/', element: <Home></Home> },
					{ path: '/home', element: <Home></Home> },
					{
						path: '/order',
						element: (
							<PrivateRouter>
						
								<Order></Order>
							</PrivateRouter>
						),
					},
					{ path: 'login', element: <Login></Login> },
					{ path: '/register', element: <Register></Register> },
				],
			},
		]);

export default router;