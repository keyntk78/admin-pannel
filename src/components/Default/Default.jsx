import React, { useState } from 'react'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
const Default = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false)

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar)
  }

  return (
    <div className='flex w-screen font-roboto text-[16px] text-txt-color dark:text-white'>
      <div
        className={`${
          openSidebar ? 'fixed z-50 w-[250px]' : 'hidden'
        }  tablet:fixed tablet:z-50 tablet:block tablet:w-[250px]`}
      >
        <SideBar handleSidebar={handleSidebar} />
      </div>
      <div className={`w-screen  tablet:pl-[250px]`}>
        <div className={`${openSidebar ? 'pl-[250px]' : ''} fixed top-0 z-50 w-full tablet:pr-[250px]`}>
          <Header handleSidebar={handleSidebar} openSidebar={openSidebar} />
        </div>
        <main className='relative top-[90px] min-h-screen w-full bg-second-bg dark:bg-second-bg-dark'>
          <div className='px-[30px] py-6'>{children}</div>
        </main>
      </div>
    </div>
  )
}

export default Default

//fixed z-50 w-[250px]
//pl-[250px]
