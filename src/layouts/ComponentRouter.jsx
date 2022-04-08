import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router';
import Login from './Login';

export default function Router() {
	return (
		<div>
			<ToastContainer position='bottom-right' />
			<Routes>
				<Route exact path='/login' element={<Login />} />
				{/* <Route exact path='/' component={Index} />
			<Route exact path='/dashboard' component={Dashboard} />
			<Route path='/products/:name' component={} />
			<Routes exact path='/profile' component={Profile} /> */}
			</Routes>
		</div>
	);
}
