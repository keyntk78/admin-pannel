import React from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
const Default = ({ children }) => {
  return (
    <div className='font-roboto text-[16px] text-txt-color dark:text-white '>
      <SideBar />
      <div className=''>
        <Header />
        <main className='bg-second-bg dark:bg-second-bg-dark min-h-screen pl-[250px]'>
          <div className='px-[30px] py-6'>{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Default;
