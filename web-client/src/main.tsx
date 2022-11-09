import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';

const router = createBrowserRouter([
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/',
		element: <Home />,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
