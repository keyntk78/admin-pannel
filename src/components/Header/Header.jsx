import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import notifications from '../../assets/JsonData/notification.json';
import { Link } from 'react-router-dom';
import user_image from '../../assets/images/kiet.jpg';
import user_menu from '../../assets/JsonData/user_menus.json';
import ThemeMenu from '../ThemeMenu/ThemeMenu';
import ThemeMode from '../ThemeMode/ThemeMode';

const curr_user = {
  name: 'Tuấn kiệt',
  image: user_image,
};

const renderNotificationItem = (item, index) => {
  return (
    <div
      className='flex items-center px-5 py-4 hover:bg-third-color dark:hover:bg-slate-400 cursor-pointer'
      key={index}
    >
      <i className={`${item.icon} mr-4`}></i>
      <span className=''>{item.content}</span>
    </div>
  );
};

const renderUserToggle = (user) => {
  return (
    <div className='flex items-center'>
      <div className='text-lg font-semibold'>{user.name}</div>
      <div className='w-[40px] h-[40px] rounded-full overflow-hidden ml-[10px]'>
        <img src={user.image} alt='avatar' className='w-full' />
      </div>
    </div>
  );
};

const renderMenuUser = (item, index) => {
  return (
    <div
      className='flex items-center px-5 py-4 hover:bg-third-color dark:hover:bg-slate-400 cursor-pointer'
      key={index}
    >
      <i className={`${item.icon} mr-4`}></i>
      <span className=''>{item.content}</span>
    </div>
  );
};

const Header = () => {
  return (
    <div className='pl-[250px] bg-second-bg dark:bg-second-bg-dark'>
      <div className='px-[30px] py-[30px] h-[90px] flex items-center justify-between'>
        <div className='relative h-[50px] bg-main-bg dark:bg-main-bg-dark flex items-center shadow-main dark:shadow-box-shadow-dark rounded-2xl overflow-hidden '>
          <input
            type='text'
            placeholder='Search here ...'
            className='h-full w-full py-[10px] pr-[60px] pl-[20px] text-xs rounded-2xl bg-main-bg dark:bg-main-bg-dark'
          />
          <i className='fa-solid fa-magnifying-glass text-[16px] absolute right-5'></i>
        </div>
        <div className='flex items-center'>
          <div className='ml-[30px]'>
            <Dropdown
              icon='fa-regular fa-bell'
              badge='12'
              contentData={notifications}
              renderItems={(item, index) => renderNotificationItem(item, index)}
              renderFooter={() => <Link to='/'>View All</Link>}
            />
          </div>
          <div className='ml-[30px]'>
            <Dropdown
              cusTomToggle={() => renderUserToggle(curr_user)}
              contentData={user_menu}
              renderItems={(item, index) => renderMenuUser(item, index)}
            />
          </div>
          <div className='ml-[30px]'>
            <ThemeMode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
