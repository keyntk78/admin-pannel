import React, { useRef, useState, useEffect } from 'react'
import useDarkMode from '../../useDarkMode'

const mode_settings = [
  {
    id: 'light',
    name: 'light',
    background: 'light-background'
  },
  {
    id: 'dark',
    name: 'dark',
    background: 'dark-background'
  }
]

const color_settings = [
  {
    id: 'blue',
    name: 'Blue',
    background: 'blue-color'
  },
  {
    id: 'red',
    name: 'Red',
    background: 'red-color'
  },
  {
    id: 'cyan',
    name: 'Cyan',
    background: 'cyan-color'
  },
  {
    id: 'green',
    name: 'Green',
    background: 'green-color'
  },
  {
    id: 'orange',
    name: 'Orange',
    background: 'orange-color'
  }
]

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

  const [currColor, setcurrColor] = useState('blue')

  const setColor = (color) => {
    setcurrColor(color.id)
    localStorage.setItem('color', color.name)
  }

  useEffect(() => {
    const themeName = mode_settings.find((e) => e.name === localStorage.getItem('theme', 'Light'))

    const colorName = color_settings.find((e) => e.name === localStorage.getItem('color', 'Light'))

    if (themeName !== undefined) setcurrMode(themeName.id)

    if (colorName !== undefined) setcurrColor(colorName.id)
  }, [])

  const [isDarkMode, toggleDarkMode] = useDarkMode()

  return (
    <div>
      <button ref={menu_toggle_ref} onClick={() => setActiveMenu()}>
        <i className='fa-solid fa-palette text-[26px] text-txt-color'></i>
      </button>
      <div
        ref={menu_ref}
        className='fixed -right-[300px] top-0 z-50 h-screen w-[300px] bg-main-bg p-5 shadow-main transition-all duration-500 ease-cubic'
      >
        <h4 className='text-xl font-semibold'>Theme Setting</h4>
        <button className='absolute right-5 top-[17px] bg-transparent text-xl' onClick={() => closeMenu()}>
          <i className='fa-solid fa-x'></i>
        </button>
        <div className='mt-10'>
          <span className='text-lg font-semibold'>Choose mode</span>
          <ul className='mt-5'>
            {mode_settings.map((item, index) => {
              return (
                <li
                  key={index}
                  className='mt-[10px] flex cursor-pointer items-center'
                  onClick={() => toggleDarkMode(!isDarkMode)}
                >
                  <div
                    className={`mr-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full text-lg shadow-main ${item.background}`}
                  >
                    <i
                      className={`fa-solid fa-check transition-transform duration-500 ease-cubic ${
                        isDarkMode ? 'scale-1' : 'scale-0'
                      }`}
                    ></i>
                  </div>
                  <span className=''>{item.name}</span>
                </li>
              )
            })}
          </ul>
        </div>

        <div className='mt-10'>
          <span className='text-lg font-semibold'>Choose color</span>
          <ul className='mt-5'>
            {color_settings.map((item, index) => {
              return (
                <li key={index} className='mt-[10px] flex cursor-pointer items-center' onClick={() => setColor(item)}>
                  <div
                    className={`mr-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full text-lg shadow-main ${item.background}`}
                  >
                    <i
                      className={`fa-solid fa-check transition-transform duration-500 ease-cubic ${
                        item.id === currColor ? 'scale-1' : 'scale-0'
                      }`}
                    ></i>
                  </div>
                  <span className=''>{item.name}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ThemeMenu
