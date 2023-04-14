import React from 'react'
import Dropdown from '../Dropdown/Dropdown'
import notifications from '../../assets/JsonData/notification.json'
import { Link } from 'react-router-dom'
import user_image from '../../assets/images/kiet.jpg'
import user_menu from '../../assets/JsonData/user_menus.json'
import ThemeMenu from '../ThemeMenu/ThemeMenu'
import ThemeMode from '../ThemeMode/ThemeMode'

const curr_user = {
  name: 'Tuấn kiệt',
  image: user_image
}

const renderNotificationItem = (item, index) => {
  return (
    <div
      className='flex cursor-pointer items-center px-5 py-4 hover:bg-third-color dark:hover:bg-slate-400'
      key={index}
    >
      <i className={`${item.icon} mr-4`}></i>
      <span className=''>{item.content}</span>
    </div>
  )
}

const renderUserToggle = (user) => {
  return (
    <div className='flex items-center'>
      <div className='text-lg font-semibold'>{user.name}</div>
      <div className='ml-[10px] h-[40px] w-[40px] overflow-hidden rounded-full'>
        <img src={user.image} alt='avatar' className='w-full' />
      </div>
    </div>
  )
}

const renderMenuUser = (item, index) => {
  return (
    <div
      className='flex cursor-pointer items-center px-5 py-4 hover:bg-third-color dark:hover:bg-slate-400'
      key={index}
    >
      <i className={`${item.icon} mr-4`}></i>
      <span className=''>{item.content}</span>
    </div>
  )
}

const Header = () => {
  return (
    <div className='w-full'>
      <div className='py-[30px flex h-[90px] items-center  justify-between bg-second-bg px-[30px] dark:bg-second-bg-dark'>
        <div className='phone:hidden'>
          <i class='fa-solid fa-bars mr-4 cursor-pointer text-[26px]'></i>
        </div>

        <div className='relative flex h-[50px] items-center overflow-hidden rounded-2xl bg-main-bg shadow-main dark:bg-main-bg-dark dark:shadow-box-shadow-dark '>
          <input
            type='text'
            placeholder='Search here ...'
            className='h-full w-full rounded-2xl bg-main-bg py-[10px] pl-[20px] pr-[60px] text-xs dark:bg-main-bg-dark'
          />
          <i className='fa-solid fa-magnifying-glass absolute right-5 text-[16px]'></i>
        </div>
        <div className='flex items-center'>
          <div className='ml-[30px] hidden phone:flex'>
            <Dropdown
              icon='fa-regular fa-bell'
              badge='12'
              contentData={notifications}
              renderItems={(item, index) => renderNotificationItem(item, index)}
              renderFooter={() => <Link to='/'>View All</Link>}
            />
          </div>
          <div className='ml-[30px] hidden phone:flex'>
            <Dropdown
              cusTomToggle={() => renderUserToggle(curr_user)}
              contentData={user_menu}
              renderItems={(item, index) => renderMenuUser(item, index)}
            />
          </div>
          <div className='ml-[30px] hidden phone:flex'>
            <ThemeMode />
          </div>
          <div className='ml-[30px] phone:hidden '>
            <i className='fa-solid fa-ellipsis-vertical cursor-pointer text-[26px]'></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
