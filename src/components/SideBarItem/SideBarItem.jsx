import React from 'react';

const SideBarItem = (props) => {
  const active = props.active
    ? 'ct-btn__sidebar--active'
    : 'hover:text-main-color';
  return (
    <div className=''>
      <div
        className={`px-[25px] py-[15px] flex items-center font-semibold transition-colors duration-300  delay-0 ${active}`}
      >
        <i className={`mr-4 ${props.icon}`}></i>
        <span className='capitalize'>{props.title}</span>
      </div>
    </div>
  );
};

export default SideBarItem;
