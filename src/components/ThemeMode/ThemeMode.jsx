import React from 'react';
import useDarkMode from '../../useDarkMode';

const ThemeMode = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <div onClick={() => toggleDarkMode(!isDarkMode)}>
      {isDarkMode ? (
        <i className='fa-solid fa-sun cursor-pointer text-[26px]'></i>
      ) : (
        <i className='fa-solid fa-moon cursor-pointer text-[26px]'></i>
      )}
    </div>
  );
};

export default ThemeMode;
