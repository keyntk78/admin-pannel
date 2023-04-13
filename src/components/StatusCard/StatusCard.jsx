import React from 'react';

const StatusCard = (props) => {
  return (
    <div className='px-[30px] py-[30px] flex items-center bg-main-bg dark:bg-main-bg-dark dark:shadow-box-shadow-dark shadow-main rounded-[15px] relative overflow-hidden z-10 transition-colors duration-500 delay-0 ease-linear '>
      <div className='text-[40px] w-4/12 flex h-full justify-center items-center z-10'>
        <i
          className={`${props.icon} text-main-color `}
          style={{ color: props.color }}
        ></i>
      </div>
      <div className='flex-grow text-center z-10 capitalize'>
        <h4 className='text-[35px] mb-1'>{props.count}</h4>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default StatusCard;
