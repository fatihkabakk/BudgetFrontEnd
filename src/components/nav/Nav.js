import React, { useState, useEffect } from 'react';
import './Nav.css';

export default function Nav({ isLogged }) {
	let [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		isLogged ? setLoggedIn(true) : setLoggedIn(false);
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
				<a className='navbar-brand navbar-logo ms-5' href='#'>
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
						<li onClick={setActive} className='nav-item active'>
							<a className='nav-link' href='/index.html'>
								<i className='fas fa-tachometer-alt'></i>Dashboard
							</a>
						</li>
						<li onClick={setActive} className='nav-item'>
							<a className='nav-link' href='#'>
								<i className='far fa-address-book'></i>Address Book
							</a>
						</li>
						<li onClick={setActive} className='nav-item'>
							<a className='nav-link' href='#'>
								<i className='far fa-clone'></i>Components
							</a>
						</li>
						<li onClick={setActive} className='nav-item'>
							<a className='nav-link' href='#'>
								<i className='far fa-calendar-alt'></i>Calendar
							</a>
						</li>
						<li onClick={setActive} className='nav-item'>
							<a className='nav-link' href='#'>
								<i className='far fa-chart-bar'></i>Charts
							</a>
						</li>
						<li onClick={setActive} className='nav-item'>
							<a className='nav-link' href='#'>
								<i className='far fa-copy'></i>Documents
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
