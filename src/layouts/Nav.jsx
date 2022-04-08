import React, { useState, useEffect } from 'react';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './styles/Nav.css';

export default function Nav({ isLogged }) {
	let [isAuthenticated, setAuthenticated] = useState(false);
	let [isDark, setIsDark] = useState(false);
	const navigate = useNavigate();

	function handleSignOut() {
		setAuthenticated(false);
		navigate('/');
	}

	function handleSignIn() {
		setAuthenticated(true);
	}

	let handleThemeChange = (e) => {
		localStorage.setItem('theme', e.target.checked);
		setStoredTheme();
	};

	let setStoredTheme = () => {
		setIsDark(localStorage.getItem('theme'));
	};

	useEffect(() => {
		isLogged ? setAuthenticated(true) : setAuthenticated(false);
		setStoredTheme();
		setTimeout(initActive);
	}, [isLogged]);

	let initActive = () => {
		var elems = document.querySelectorAll('.nav-item');
		elems && elems.length > 0
			? setTimeout(initActive, 100)
			: elems.forEach((el) => {
					el.href.split('/').pop() === window.location.href.split('/').pop()
						? el.classList.add('active')
						: el.classList.remove('active');
			  });
	};

	let setActive = (e) => {
		document.querySelectorAll('.nav-item').forEach((el) => {
			el.classList.remove('active');
		});
		e.target.closest('li').classList.add('active');
	};

	return (
		<nav className='navbar navbar-expand-custom navbar-mainbg'>
			<div className='container-fluid'>
				<a className='navbar-brand navbar-logo ms-lg-4' href='#'>
					Budgee
				</a>
				<button
					className='navbar-toggler'
					type='button'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<i className='fas fa-bars text-white'></i>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav ms-auto me-5'>
						{isAuthenticated ? (
							<SignedIn setActive={setActive} signOut={handleSignOut} />
						) : (
							<SignedOut signIn={handleSignIn} />
						)}
						<li onClick={handleThemeChange} className='nav-item my-auto ms-4'>
							<div>
								<input type='checkbox' className='checkbox' id='chk' />
								<label className='label' htmlFor='chk'>
									<FontAwesomeIcon className='fa-moon' icon={faMoon} />
									<FontAwesomeIcon className='fa-sun' icon={faSun} />
									<div className='ball'></div>
								</label>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
