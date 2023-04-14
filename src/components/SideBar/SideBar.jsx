import React from 'react'
import sidebar_item from '../../assets/JsonData/sidebar_routes.json'
import logo from '../../assets/images/ezone.png'
import { Link } from 'react-router-dom'
import SideBarItem from '../SideBarItem/SideBarItem'

const SideBar = () => {
  const activeItem = sidebar_item.findIndex((item) => item.route === window.location.pathname)

  return (
    <div className='h-screen bg-main-bg shadow-main  dark:bg-main-bg-dark dark:shadow-box-shadow-dark'>
      <div className='flex h-[90px] items-center justify-center '>
        <Link to='/' className=''>
          <img src={logo} alt='Logo' className='h-[80px] ' />
        </Link>
      </div>
      <div className='mt-6 px-[20px]'>
        {sidebar_item.map((item, index) => {
          return (
            <Link to={item.route} key={index}>
              <SideBarItem icon={item.icon} title={item.display_name} active={index === activeItem} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default SideBar
