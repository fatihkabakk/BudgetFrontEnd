import React from 'react';
import Login from './Login';
import Register from './Register';
import { Routes, Route } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function Router() {
	return (
		<div>
			<ToastContainer
				position='bottom-right'
				autoClose={2000}
				closeOnClick
				rtl={false}
				draggable
				pauseOnHover
			/>
			<Routes>
				<Route exact path='/login' element={<Login />} />
				<Route exact path='/register' element={<Register />} />
				{/* <Route exact path='/' component={Index} />
			<Route exact path='/dashboard' component={Dashboard} />
			<Route path='/products/:name' component={} />
			<Routes exact path='/profile' component={Profile} /> */}
			</Routes>
		</div>
	);
}
