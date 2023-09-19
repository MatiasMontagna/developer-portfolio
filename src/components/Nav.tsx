import Image from 'next/image';

import BurgerMenuIcon from './BurgerMenuIcon';

const NAV_OPTIONS = [
  'Home',
  'About',
  'Tech Stack',
  'Projects',
  'Contact',
];

const NAV_SOCIALS = [
  {
    logo: '/icons/github-icon.svg',
    url: 'https://github.com/MatiasMontagna',
    description: 'The Github logo.',
  },
  {
    logo: '/icons/linkedin-icon.svg',
    url: 'https://www.linkedin.com/in/mat%C3%ADas-montagna-38309b1b6/',
    description: 'The Linkedin logo.',
  },
];

export default function Nav() {
  return (
    <nav className="flex flex-row justify-between w-screen md:w-full mt-8">
      <div className="flex items-center justify-center w-1/4 text-stone-500 dark:text-neutral-400">
        MMC
      </div>
      <div className="flex justify-end pr-12 md:hidden w-3/4">
        <button
          type="button"
        >
          <BurgerMenuIcon />
        </button>
      </div>
      <div className="hidden md:flex flex-row w-3/4 justify-center items-center space-x-16 pl-10">
        <ul className="flex flex-row justify-center space-x-10">
          { NAV_OPTIONS.map((option) => (
            <li
              key={option}
              className="font-medium text-lg text-stone-500 dark:text-neutral-400"
            >
              {option}
            </li>
          ))}
        </ul>
        <div className="flex flex-row space-x-6">
          {NAV_SOCIALS.map((social) => (
            <a href={social.url}>
              <Image
                src={social.logo}
                alt={social.description}
                width={30}
                height={30}
              />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
