import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      setActive('');
    }
  }, [toggle]);

  const renderNavLinks = (isMobile = false) => (
    <ul
      className={`list-none flex ${isMobile ? 'flex-col' : 'flex-row'} gap-6`}
    >
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? 'text-white' : isMobile ? 'text-secondary' : 'text-white'
          } hover:text-white text-[18px] font-medium cursor-pointer`}
          onClick={() => {
            setActive(link.title);
            if (isMobile) setToggle(false);
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <span className="text-white text-[20px] font-bold hidden sm:block">
            MadAboutCoding
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex">{renderNavLinks()}</div>

        {/* Mobile Hamburger */}
        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-6 h-6 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          {/* Mobile Dropdown */}
          <div
            className={`absolute top-16 right-4 w-48 bg-[#1f1f1f] text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out z-50 ${
              toggle ? 'flex' : 'hidden'
            }`}
          >
            <div className="p-4 w-full">{renderNavLinks(true)}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;