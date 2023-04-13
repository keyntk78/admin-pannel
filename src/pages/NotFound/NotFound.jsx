import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='bg-second-bg dark:text-white dark:bg-second-bg-dark h-screen relative'>
      <div className='h-[500px] w-[800px] py-16 m-auto absolute top-0 right-0 left-0 bottom-0 bg-main-bg dark:bg-main-bg-dark dark:shadow-box-shadow-dark  shadow-main rounded-[15px] flex items-center justify-center'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-[150px] font-bold'>404</h1>
          <h2 className='text-[50px] mb-6'>Page not found</h2>
          <p className='text-[16px]'>
            Oops! The page you are looking for does not exist. It might have
            been moved or deleted.
          </p>
          <div className='mt-8 bg-main-color px-6 py-4 rounded-[15px] text-white'>
            <Link to='/'>
              <i className='fa-solid fa-left-long mr-2'></i> Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
