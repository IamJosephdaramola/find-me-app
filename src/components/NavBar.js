import React from 'react';

export default function NavBar() {
	return (
		<nav className='navbar fixed-top navbar-light  text-center font-weight-bold'>
			<div className='navbar-brand text-light'>
				<span className=' title font-italic'> Where am I? </span>
				<span role='img' aria-label='emoji' className='emoji font-weight-bold'>
					🤔
				</span>
				<p className='small'>
					Click on
					<strong className='text-yellow'>the icon below</strong> to get your
					location
				</p>
			</div>
		</nav>
	);
}
