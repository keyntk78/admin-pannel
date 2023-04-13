import React, { useRef } from 'react';

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener('mousedown', (e) => {
    // user click toggle
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle('ct-active-dropdown');
    } else {
      // user click outside toggle and content
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove('ct-active-dropdown');
      }
    }
  });
};

const Dropdown = (props) => {
  const dropdown_toggle_el = useRef(null);
  const dropdown_content_el = useRef(null);

  clickOutsideRef(dropdown_content_el, dropdown_toggle_el);

  return (
    <div className='relative z-50'>
      <button ref={dropdown_toggle_el} className='bg-transparent relative'>
        {props.icon ? (
          <i
            className={`text-[26px] text-txt-color dark:text-white ${props.icon}`}
          ></i>
        ) : (
          ''
        )}
        {props.badge ? (
          <span className='flex items-center justify-center absolute top-[-12px] right-[-10px] h-[25px] w-[25px] rounded-[50%] bg-main-color text-white text-xs'>
            {props.badge}
          </span>
        ) : (
          ''
        )}
        {props.cusTomToggle ? props.cusTomToggle() : ''}
      </button>
      <div
        ref={dropdown_content_el}
        className='absolute w-max max-w-[400px] right-0 top-[45px] bg-main-bg dark:bg-main-bg-dark dark:shadow-box-shadow-dark shadow-main overflow-hidden rounded-xl origin-top-right scale-0 ease-linear transition-transform delay-0 duration-300'
      >
        <div className='h-[10px]'></div>
        {props.contentData && props.renderItems
          ? props.contentData.map((item, index) =>
              props.renderItems(item, index)
            )
          : ''}
        {props.renderFooter ? (
          <div className='px-4 py-4 text-center '>{props.renderFooter()}</div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Dropdown;
