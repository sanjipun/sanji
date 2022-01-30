import { Link } from 'gatsby';
import React from 'react';
import HEADER_CONTENTS from '../constants/HeaderContents';
import useHamburger from '../store/Hamburger.store';

interface HeaderMobileProps {}

const HeaderMobile: React.FC<HeaderMobileProps> = () => {
  const { openMenu, setOpenMenu } = useHamburger();
  return (
    <div
      className={`${
        openMenu ? 'max-h-96 py-10' : 'max-h-0 py-0'
      } overflow-hidden transition-all duration-300 ease-in bg-pink-400 text-white`}>
      {HEADER_CONTENTS.map((header, index) => (
        <Link key={index} to={header.path}>
          <a
            className="mx-2 p-2 text-sm flex flex-col items-center justify-center hover:bg-black
           hover:text-white transition-all duration-300 ease-in-out">
            0{index + 1}
            <span className="text-lg">{header.name}</span>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default HeaderMobile;
