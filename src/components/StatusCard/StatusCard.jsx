import React from 'react'

const StatusCard = (props) => {
  return (
    <div className='relative z-10 flex items-center overflow-hidden rounded-[15px] bg-main-bg px-[30px] py-[30px] shadow-main transition-colors delay-0 duration-500 ease-linear dark:bg-main-bg-dark dark:shadow-box-shadow-dark '>
      <div className='z-10 flex h-full w-4/12 items-center justify-center text-[40px]'>
        <i className={`${props.icon} text-main-color `} style={{ color: props.color }}></i>
      </div>
      <div className='z-10 flex-grow text-center capitalize'>
        <h4 className='mb-1 text-[35px]'>{props.count}</h4>
        <span>{props.title}</span>
      </div>
    </div>
  )
}

export default StatusCard
