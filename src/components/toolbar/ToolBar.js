import React from 'react';
import { NavLink } from 'react-router-dom';

const Toolbar = () => {
  return (
    <nav className="w-full bg-gray-900 flex justify-around py-4 rounded-t-xl">
      <NavLink to="/" className="flex flex-col items-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h3m12 0h3M4 6h16M4 18h16M6 6l.4 6m11.2 0L18 6M5 18l1-8m12 8l-1-8" />
        </svg>
        <span className="text-xs">Главная</span>
      </NavLink>

      <NavLink to="/projects" className="flex flex-col items-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
        <span className="text-xs">Задачи</span>
      </NavLink>

      <NavLink to="/post" className="flex flex-col items-center text-purple-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7l4-4 4 4M8 17l4 4 4-4M12 3v18" />
        </svg>
        <span className="text-xs">Публикация</span>
      </NavLink>

      <NavLink to="/profile" className="flex flex-col items-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8h1m-1-4h1m4-4h.4a1 1 0 00.8-.4l1.6-2.4M2 20h.4a1 1 0 00.8-.4L5 16h5" />
        </svg>
        <span className="text-xs">Профиль</span>
      </NavLink>

      <NavLink to="/settings" className="flex flex-col items-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m0 0h6m-6 0H6m12 0v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2" />
        </svg>
        <span className="text-xs">Настройки</span>
      </NavLink>
    </nav>
  );
};

export default Toolbar;
