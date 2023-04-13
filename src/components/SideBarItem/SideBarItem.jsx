import React from 'react'

const SideBarItem = (props) => {
  const active = props.active ? 'ct-btn__sidebar--active' : 'hover:text-main-color'
  return (
    <div className=''>
      <div
        className={`flex items-center px-[25px] py-[15px] font-semibold transition-colors delay-0  duration-300 ${active}`}
      >
        <i className={`mr-4 ${props.icon}`}></i>
        <span className='capitalize'>{props.title}</span>
      </div>
    </div>
  )
}

export default SideBarItem
