import { Link } from 'gatsby';
import React from 'react';
import HEADER_CONTENTS from '../constants/HeaderContents';
import { CgMenuGridO } from '@react-icons/all-files/cg/CgMenuGridO';
import { CgClose } from '@react-icons/all-files/cg/CgClose';
import useHamburger from '../store/Hamburger.store';

const Header = () => {
  const { openMenu, setOpenMenu } = useHamburger();
  const handleScroll = (id: string) => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <header className="max-w-8xl mx-auto">
      <div className="flex justify-between items-center px-10 py-10">
        <h1 className="text-2xl uppercase tracking-widest">Sanji</h1>
        <div className="hidden md:inline-flex">
          {HEADER_CONTENTS.map((header, index) => (
            <div
              key={index}
              onClick={() => handleScroll(header.path)}
              className="mx-2 p-2 text-sm flex flex-col items-end hover:bg-black hover:text-white 
          transition-all duration-300 ease-in">
              0{index + 1}
              <span className="text-lg">{header.name}</span>
            </div>
          ))}
        </div>
        <CgMenuGridO
          onClick={() => setOpenMenu()}
          className={`${
            openMenu && 'hidden'
          } w-6 h-6 cursor-pointer text-black md:hidden transition-all duration-300 ease-in`}
        />
        <CgClose
          onClick={() => setOpenMenu()}
          className={`${
            !openMenu && 'hidden'
          } w-6 h-6 cursor-pointer text-black md:hidden transition-all duration-300 ease-in`}
        />
      </div>
    </header>
  );
};

export default Header;
