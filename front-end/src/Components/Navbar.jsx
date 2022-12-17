import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	const menuBar = [
		{
			name: 'Home',
			link: '/',
		},
		{
			name: 'Features',
			link: '/features',
		},
		{
			name: 'About Us',
			link: '/about',
		},
		{
			name: 'Contact Us',
			link: '/contact',
		},
	]

	return (
		<>
			<div className='flex md:justify-between justify-between m-10 p-4 pb-5 text-2xl pr-32'>
				<div className='flex md:mx-10'>
					<div className='cursor-pointer text-black font-bold md:pr-10 '>
						HC Clubs
					</div>
				</div>
				<div className='hidden md:flex flex-row justify-between text-black [&>*]:px-6 [&>*]:cursor-pointer bg-orange-50'>
					{menuBar.map((item, id) => (
						<div
							key={id}
							className='hover:text-white hover:bg-orange-500 hover:shadow-sm hover:shadow-slate-600 rounded-md pb-1'
						>
							{item.name}
						</div>
					))}
				</div>
				{/* <div classname='bg-orange-500 text-black rounded-full'>
					<div className='px-8 rounded-full text-2xl text-bold bg-orange-500 text-black cursor-pointer'>
						SignUp
					</div>
				</div> */}
			</div>
		</>
	)
}

export default Navbar
