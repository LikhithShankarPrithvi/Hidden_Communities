import React from 'react'

const Home = () => {
	return (
		<>
			{/* Section -Home */}
			<div className='flex justify-start px-10'>
				<div className='flex flex-col pl-12 p-10 pr-32 pt-16'>
					<div className='text-orange-600 font-bold text-6xl'>
						Want Unity of Ideas?
					</div>
					<div className='text-black font-bold max-w-md pt-8 pl-2'>
						Join Communities of your interest, no-more clash of
						ideas, communicate with people, develop yourself and
						help others grow...
					</div>
					<div className='flex [&>*]:py-1 [&>*]:px-10 [&>*]:mr-16 py-8 px-2'>
						<div className='text-black bg-orange-400 rounded-lg text-lg '>
							Sign Up
						</div>
						<div className='text-black bg-orange-400 rounded-lg text-lg '>
							Log In
						</div>
					</div>
				</div>
				<div className='max-w-xl pr-20'>
					<img
						className='object-cover'
						src={require('../Images/HomeImage.jpg')}
						alt='HomeImage'
					/>
				</div>
			</div>
			{/* Section - Features */}
			<div className='flex flex-col text-xl m-10 px-10 '>
				<div className='text-center font-bold pb-8'>Features</div>
				<div className='flex max-h-5 justify-center'>
					<div className='max-w-md px-6 '>
						Join communities of your choice and develop yourself and
						also help others grow
					</div>
					<div className=' pr-20'>
						<img
							className='object-cover w-32 h-32'
							src={require('../Images/FeaturesImg2.jpg')}
							alt='HomeImage'
						/>
					</div>
				</div>
				<div className='flex max-h-5 justify-center'>
					<div className=' pr-20'>
						<img
							className='object-cover w-32 h-32'
							src={require('../Images/FeaturesImg1.jpg')}
							alt='HomeImage'
						/>
					</div>
					<div className='max-w-md px-6 '>
						Meet like minded folks and expand your views
					</div>
				</div>
				<div className='flex max-h-5 justify-center'>
					<div className='max-w-md px-6 '>
						Have an idea? Make your create your own community
					</div>
					<div className=' pr-20'>
						<img
							className='object-cover w-32 h-32'
							src={require('../Images/FeaturesImg3.jpg')}
							alt='HomeImage'
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
