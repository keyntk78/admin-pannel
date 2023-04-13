import React, { useRef } from 'react'

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener('mousedown', (e) => {
    // user click toggle
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle('ct-active-dropdown')
    } else {
      // user click outside toggle and content
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove('ct-active-dropdown')
      }
    }
  })
}

const Dropdown = (props) => {
  const dropdown_toggle_el = useRef(null)
  const dropdown_content_el = useRef(null)

  clickOutsideRef(dropdown_content_el, dropdown_toggle_el)

  return (
    <div className='relative z-50'>
      <button ref={dropdown_toggle_el} className='relative bg-transparent'>
        {props.icon ? <i className={`text-[26px] text-txt-color dark:text-white ${props.icon}`}></i> : ''}
        {props.badge ? (
          <span className='absolute right-[-10px] top-[-12px] flex h-[25px] w-[25px] items-center justify-center rounded-[50%] bg-main-color text-xs text-white'>
            {props.badge}
          </span>
        ) : (
          ''
        )}
        {props.cusTomToggle ? props.cusTomToggle() : ''}
      </button>
      <div
        ref={dropdown_content_el}
        className='absolute right-0 top-[45px] w-max max-w-[400px] origin-top-right scale-0 overflow-hidden rounded-xl bg-main-bg shadow-main transition-transform delay-0 duration-300 ease-linear dark:bg-main-bg-dark dark:shadow-box-shadow-dark'
      >
        <div className='h-[10px]'></div>
        {props.contentData && props.renderItems
          ? props.contentData.map((item, index) => props.renderItems(item, index))
          : ''}
        {props.renderFooter ? <div className='px-4 py-4 text-center '>{props.renderFooter()}</div> : ''}
      </div>
    </div>
  )
}

export default Dropdown
