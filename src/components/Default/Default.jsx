import React from 'react'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
const Default = ({ children }) => {
  return (
    <div className='flex w-screen font-roboto text-[16px] text-txt-color dark:text-white'>
      <div className='hidden tablet:fixed tablet:z-50 tablet:block tablet:w-[250px]'>
        <SideBar />
      </div>
      <div className='w-screen tablet:pl-[250px]'>
        <div className='fixed top-0 z-50 w-full tablet:pr-[250px]'>
          <Header />
        </div>
        <main className='relative top-[90px] min-h-screen bg-second-bg dark:bg-second-bg-dark'>
          <div className='px-[30px] py-6'>{children}</div>
        </main>
      </div>
    </div>
  )
}

export default Default
