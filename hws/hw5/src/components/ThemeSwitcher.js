import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './actions';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={`app ${theme}`}>
      <button onClick={handleToggle}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
