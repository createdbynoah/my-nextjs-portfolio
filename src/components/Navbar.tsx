'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MenuText from './texts/MenuText';

const Navbar: React.FC = () => {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();
  const closeDropdown = () => {
    detailsRef.current?.removeAttribute('open');
  };

  return (
    <div className="navbar px-0 py-8">
      <div className="navbar-start">
        <details ref={detailsRef} className="dropdown">
          <summary className="btn btn-ghost hover:text-fg hover:opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </summary>
          <ul className="menu menu-sm dropdown-content bg-bg rounded-box z-[1] mt-3 w-52 p-2">
            <li className="hover:text-primary" onClick={closeDropdown}>
              <Link href="/">
                <MenuText className={pathname === '/' ? 'text-primary' : ''}>
                  Home
                </MenuText>
              </Link>
            </li>
            <li className="hover:text-primary" onClick={closeDropdown}>
              <Link href="/about">
                <MenuText
                  className={pathname === '/about' ? 'text-primary' : ''}
                >
                  About
                </MenuText>
              </Link>
            </li>
            <li className="hover:text-primary" onClick={closeDropdown}>
              <Link href="/projects">
                <MenuText
                  className={pathname === '/projects' ? 'text-primary' : ''}
                >
                  Projects
                </MenuText>
              </Link>
            </li>
            <li className="hover:text-primary" onClick={closeDropdown}>
              <Link href="/experience">
                <MenuText
                  className={pathname === '/experience' ? 'text-primary' : ''}
                >
                  Experience
                </MenuText>
              </Link>
            </li>
            <li className="hover:text-primary" onClick={closeDropdown}>
              <Link href="/education">
                <MenuText
                  className={pathname === '/education' ? 'text-primary' : ''}
                >
                  Education
                </MenuText>
              </Link>
            </li>
            <li className="hover:text-primary" onClick={closeDropdown}>
              <Link href="/contact">
                <MenuText
                  className={pathname === '/contact' ? 'text-primary' : ''}
                >
                  Contact
                </MenuText>
              </Link>
            </li>
          </ul>
        </details>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">[logo]</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-primary font-sans text-base">
          Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
