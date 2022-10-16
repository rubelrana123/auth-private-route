
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/userContext';

const Header = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleSignOut = () => {
		logOut()
			.then(() => {})
			.catch((error) => console.error(error));
	};

	return (
		<div>
			<div className='navbar bg-primary text-primary-content'>
				<Link to='/' className='btn btn-ghost normal-case text-xl'>
					..Auth..
				</Link>
				<Link to='/home' className='btn btn-ghost normal-case text-xl'>
					Home
				</Link>
				<Link to='/order' className='btn btn-ghost normal-case text-xl'>
					order
				</Link>
				<Link to='/login' className='btn btn-ghost normal-case text-xl'>
					LogIn
				</Link>
				<Link to='/register' className='btn btn-ghost normal-case text-xl'>
					Registration
				</Link>
				{user?.email && <li>WellCome ,{user.email}</li>}
				{user?.email && 
					<button onClick={handleSignOut} className='btn btn-sm'>
						Log out
					</button>
				}
			</div>
		</div>
	);
};

export default Header;
