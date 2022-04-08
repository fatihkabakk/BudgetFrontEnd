import React, { useState } from 'react';
import './styles/Login.css';

export default function Login() {
	let [username, setUsername] = useState('');
	let [password, setPassword] = useState('');

	let handleForm = (e) => {
		e.preventDefault();
	};

	return (
		<div className='mx-auto'>
			<form>
				<h3>Sign In</h3>
				<div className='form-group'>
					<label>Username</label>
					<input
						type='username'
						className='form-control'
						placeholder='Enter username'
					/>
				</div>
				<div className='form-group'>
					<label>Password</label>
					<input
						type='password'
						className='form-control'
						placeholder='Enter password'
					/>
				</div>
				<div className='form-group'>
					<div className='custom-control custom-checkbox'>
						<input
							type='checkbox'
							className='custom-control-input'
							id='customCheck1'
						/>
						<label className='custom-control-label' htmlFor='customCheck1'>
							Remember me
						</label>
					</div>
				</div>
				<button onClick={handleForm} type='submit' className='btn-outline'>
					Submit
				</button>
				<p style={{ fontSize: '.75rem' }}>
					Don't have an account? <a href='/register'>Sign Up</a>
				</p>
			</form>
		</div>
	);
}
