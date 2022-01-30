import { GatsbyNode } from 'gatsby';
import React from 'react';
import useHamburger from '../store/Hamburger.store';
import Header from './Header';
import HeaderMobile from './HeaderMobile';
import { globalHistory } from '@reach/router';

interface LayoutProps {
  children: GatsbyNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { openMenu, setOpenMenu } = useHamburger();

  React.useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === 'PUSH' && openMenu) setOpenMenu();
    });
  }, [openMenu]);

  return (
    <main className="max-w-8xl w-full mx-auto px-10">
      <Header />
      <HeaderMobile />
      {children}
      <footer>THis is footer</footer>
    </main>
  );
};

export default Layout;
