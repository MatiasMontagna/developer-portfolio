'use client';

import { useState } from 'react';

import Image from 'next/image';

import BurgerMenuIcon from './BurgerMenuIcon';

const NAV_OPTIONS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const NAV_SOCIALS = [
  {
    title: 'Github',
    logo: '/icons/github-icon.svg',
    url: 'https://github.com/MatiasMontagna',
    description: 'The Github logo.',
  },
  {
    title: 'Linkedin',
    logo: '/icons/linkedin-icon.svg',
    url: 'https://www.linkedin.com/in/mat%C3%ADas-montagna-38309b1b6/',
    description: 'The Linkedin logo.',
  },
];

export default function Nav() {
  const [isNavVisible, setisNavVisible] = useState(false);
  const toggleNav = () => setisNavVisible(!isNavVisible);

  return (
    <nav className="flex relative flex-row bg-primary-light dark:bg-black justify-between w-screen md:w-full mt-8">
      <div className="flex invisible items-center justify-center w-1/4 text-stone-500 dark:text-neutral-400">
        MMC
      </div>
      <div className="flex justify-end pr-8 md:hidden w-3/4">
        <button
          onClick={toggleNav}
          type="button"
        >
          <BurgerMenuIcon />
        </button>
      </div>
      <div className={`${isNavVisible ? 'flex' : 'hidden'} md:flex transition-all md:transition-none duration-700 ease-in bg-inherit flex-column md:flex-row md:w-3/4 justify-center items-center md:space-x-16 md:pl-10`}>
        <ul className="flex top-9 right-0 h-[80vh]  md:h-auto  absolute md:static w-1/2 md:w-auto bg-inherit flex-col md:flex-row md:justify-center space-y-10 md:space-x-10 md:space-y-0">
          { NAV_OPTIONS.map(({ name, href }) => (
            <li
              key={name}
              className="font-medium text-lg text-stone-500 dark:text-neutral-400 pl-7 md:pl-0 hover:text-stone-300 dark:hover:text-neutral-200"
            >
              <a href={href} onClick={() => setisNavVisible(false)}>{name}</a>
            </li>
          ))}
          {NAV_SOCIALS.map((social) => (
            <li>
              <a
                className="flex pl-6 space-x-6 items-end"
                href={social.url}
              >
                <Image
                  src={social.logo}
                  alt={social.description}
                  width={30}
                  height={30}
                />
                <p className="font-medium text-lg text-stone-500 dark:text-neutral-400 md:hidden">{social.title}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
