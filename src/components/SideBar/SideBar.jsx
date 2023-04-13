import React from 'react';
import sidebar_item from '../../assets/JsonData/sidebar_routes.json';
import logo from '../../assets/images/ezone.png';
import { Link } from 'react-router-dom';
import SideBarItem from '../SideBarItem/SideBarItem';

const SideBar = () => {
  const activeItem = sidebar_item.findIndex(
    (item) => item.route === window.location.pathname
  );

  return (
    <div className='h-screen fixed w-[250px] bg-main-bg dark:bg-main-bg-dark  left-0 top-0  shadow-main dark:shadow-box-shadow-dark'>
      <div className='h-[90px] flex items-center justify-center '>
        <Link to='/' className=''>
          <img src={logo} alt='Logo' className='h-[80px] ' />
        </Link>
      </div>
      <div className='px-[20px] mt-6'>
        {sidebar_item.map((item, index) => {
          return (
            <Link to={item.route} key={index}>
              <SideBarItem
                icon={item.icon}
                title={item.display_name}
                active={index === activeItem}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
