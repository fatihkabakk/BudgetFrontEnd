import React from 'react';
import { Link } from 'react-router-dom';

export default function SignedIn({ setActive, signOut }) {
	return (
		<>
			<li onClick={setActive} className='nav-item'>
				<Link className='nav-link' to='/dashboard'>
					Dashboard
				</Link>
			</li>
			<li onClick={signOut} className='nav-item'>
				<a className='nav-link'>Log Out</a>
			</li>
		</>
	);
}
