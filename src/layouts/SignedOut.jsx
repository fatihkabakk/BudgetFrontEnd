import React from 'react';
import { Link } from 'react-router-dom';

export default function SignedOut() {
	return (
		<>
			<li className='nav-item'>
				<Link className='nav-link' to='/login'>
					Log In
				</Link>
			</li>
			<li className='nav-item'>
				<Link className='nav-link' to='/register'>
					Register
				</Link>
			</li>
		</>
	);
}
