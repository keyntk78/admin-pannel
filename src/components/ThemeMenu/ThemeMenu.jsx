import React, { useRef, useState, useEffect } from 'react'
import useDarkMode from '../../useDarkMode'
import user_image from '../../assets/images/kiet.jpg'
import userMenu from '../../assets/JsonData/user_menus.json'

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener('mousedown', (e) => {
    // user click toggle
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle('active')
    } else {
      // user click outside toggle and content
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove('active')
      }
    }
  })
}

const ThemeMenu = () => {
  const menu_ref = useRef(null)
  const menu_toggle_ref = useRef(null)

  clickOutsideRef(menu_ref, menu_toggle_ref)

  const setActiveMenu = () => menu_ref.current.classList.add('theme-menu--active')

  const closeMenu = () => {
    return menu_ref.current.classList.remove('theme-menu--active')
  }

  const [currMode, setcurrMode] = useState('light')

  const setMode = (mode) => {
    setcurrMode(mode.id)
    localStorage.setItem('theme', mode.name)
  }

  const [isDarkMode, toggleDarkMode] = useDarkMode()

  console.log(isDarkMode)

  return (
    <div>
      <button ref={menu_toggle_ref} onClick={() => setActiveMenu()}>
        <i className='fa-solid fa-palette text-[26px] text-txt-color'></i>
      </button>
      <div
        ref={menu_ref}
        className='fixed -right-[300px] top-0 z-50 h-screen w-[300px] bg-main-bg p-5 shadow-main transition-all duration-500 ease-cubic dark:bg-main-bg-dark dark:shadow-box-shadow-dark'
      >
        <div className='flex items-center'>
          <div className='mr-[10px] h-[40px] w-[40px] overflow-hidden rounded-full'>
            <img src={user_image} alt='avatar' className='w-full' />
          </div>
          <div className='text-lg font-semibold'>Tuấn kiệt</div>
        </div>
        <button className='absolute right-5 top-[17px] bg-transparent text-xl' onClick={() => closeMenu()}>
          <i className='fa-solid fa-x'></i>
        </button>
        <div className='mt-10 border-t'>
          <div>
            {userMenu.map((item, index) => {
              return (
                <div className='mt-4 cursor-pointer p-4 hover:bg-third-color dark:hover:bg-gray-400'>
                  <i className={`${item.icon} mr-4 text-lg`}></i>
                  <span className='text-kg'>{item.content}</span>
                </div>
              )
            })}
            <div className=' mt-4 cursor-pointer p-4 hover:bg-third-color dark:hover:bg-gray-400'>
              <i className={`fa-regular fa-bell relative mr-4 text-lg`}>
                <span className='absolute right-[-10px] top-[-12px] flex h-[25px] w-[25px] items-center justify-center rounded-[50%] bg-main-color text-xs text-white'>
                  12
                </span>
              </i>

              <span className='text-kg'>Notification</span>
            </div>
          </div>
        </div>
        <div className='mt-10'>
          <span className='text-lg font-semibold'>Choose mode</span>
          <ul className='mt-5'>
            {isDarkMode ? (
              <li className='mt-[10px] flex cursor-pointer items-center' onClick={() => toggleDarkMode(!isDarkMode)}>
                <div
                  className={`mr-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-main-bg text-lg shadow-main`}
                >
                  <i
                    className={`fa-solid fa-check transition-transform duration-500 ease-cubic ${
                      isDarkMode ? 'scale-1' : 'scale-0'
                    }`}
                  ></i>
                </div>
                <span className=''>Light</span>
              </li>
            ) : (
              <li className='mt-[10px] flex cursor-pointer items-center' onClick={() => toggleDarkMode(!isDarkMode)}>
                <div
                  className={`mr-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-main-bg-dark text-lg shadow-main`}
                >
                  <i className={`fa-solid fa-check scale-1 transition-transform duration-500 ease-cubic`}></i>
                </div>
                <span className=''>Dark</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ThemeMenu
