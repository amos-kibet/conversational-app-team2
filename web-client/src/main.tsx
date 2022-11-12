import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Register from './routes/Register';
import Login from './routes/Login';

const router = createBrowserRouter([
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/register',
		element: <Register />
	},
	{
		path: '/login',
		element: <Login />
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
