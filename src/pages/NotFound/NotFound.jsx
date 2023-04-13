import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='relative h-screen bg-second-bg dark:bg-second-bg-dark dark:text-white'>
      <div className='absolute bottom-0 left-0 right-0 top-0 m-auto flex h-[500px] w-[800px] items-center justify-center rounded-[15px]  bg-main-bg py-16 shadow-main dark:bg-main-bg-dark dark:shadow-box-shadow-dark'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-[150px] font-bold'>404</h1>
          <h2 className='mb-6 text-[50px]'>Page not found</h2>
          <p className='text-[16px]'>
            Oops! The page you are looking for does not exist. It might have been moved or deleted.
          </p>
          <div className='mt-8 rounded-[15px] bg-main-color px-6 py-4 text-white'>
            <Link to='/'>
              <i className='fa-solid fa-left-long mr-2'></i> Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
