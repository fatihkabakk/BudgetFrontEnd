import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthService from '../services/authService';
import './styles/LoginRegister.css';

export default function Login() {
	let [username, setUsername] = useState('');
	let [password, setPassword] = useState('');
	let [usernameError, setUsernameError] = useState('');
	let [passwordError, setPasswordError] = useState('');
	let [isValid, setIsValid] = useState(false);

	const navigate = useNavigate();

	const authService = new AuthService();

	const doNothing = () => {};

	const handleForm = (e) => {
		e.preventDefault();
		if (!isValid) {
			checkUsername();
			checkPassword();
			return;
		}
		let id = toast.loading('Signing in...', { autoClose: 2000 });
		const response = authService.login(username, password);
		response
			.then(({ data }) => {
				return new Promise((resolve, reject) => {
					if (!data.success) {
						reject(data);
					} else {
						toast.update(id, {
							render: 'Signed in, redirecting...',
							type: 'success',
							isLoading: false,
							autoClose: 1000,
						});
						localStorage.setItem('token', data.data.token);
						navigate('/');
						resolve(data);
					}
				});
			})
			.catch((data) => {
				toast.update(id, {
					render: data.message,
					type: 'error',
					isLoading: false,
					autoClose: 2000,
				});
			});
		// toast
		// 	.promise(response, {
		// 		pending: 'Logging in...',
		// 		success: 'Logged in, redirecting...',
		// 	})
		// 	.then((data) => {
		// 		let result = data.data;
		// 		localStorage.setItem('token', result.data.token);
		// 		navigate('/');
		// 	})
		// 	.catch((data) => toast.error(data.data.message));
	};

	useEffect(() => {
		let isUsernameValid = username.length >= 2;
		let isPasswordValid = password.length >= 6;
		setIsValid(isUsernameValid && isPasswordValid);
		username.length >= 1 ? checkUsername() : doNothing();
		password.length >= 1 ? checkPassword() : doNothing();
	}, [username, password]);

	const checkUsername = () => {
		if (username.length >= 2) {
			setUsernameError('');
		} else {
			setUsernameError('Username is too short');
		}
	};

	const checkPassword = () => {
		if (password.length >= 6) {
			setPasswordError('');
		} else {
			setPasswordError('Password is too short');
		}
	};

	return (
		<div className='mx-auto'>
			<form>
				<h3>Sign In</h3>
				<div className='form-group'>
					<label>Username</label>
					<input
						type='username'
						className={
							(usernameError && 'form-control error-border') || 'form-control'
						}
						placeholder='Username'
						onChange={({ target }) => {
							setUsername(target.value);
						}}
					/>
					{usernameError && <span className='error'>{usernameError}</span>}
				</div>
				<div className='form-group'>
					<label>Password</label>
					<input
						type='password'
						className={
							(passwordError && 'form-control error-border') || 'form-control'
						}
						placeholder='Password'
						onChange={({ target }) => {
							setPassword(target.value);
						}}
					/>
					{passwordError && <span className='error'>{passwordError}</span>}
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
				<button
					onClick={handleForm}
					className={`btn-outline my-2 ${!isValid && 'opacity-50'}`}
				>
					Submit
				</button>
				<p className='mt-2' style={{ fontSize: '.75rem' }}>
					Don't have an account? <Link to='/register'>Sign Up</Link>
				</p>
			</form>
		</div>
	);
}
