import Image from 'next/image';

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
    <nav className="flex flex-row justify-between w-full mt-8">
      <div className="flex items-center justify-center w-1/4 text-stone-500 dark:text-neutral-400">
        MMC
      </div>
      <div className="flex flex-row w-3/4 justify-center items-center space-x-16 pl-10">
        <div className="flex flex-row justify-center space-x-10">
          { NAV_OPTIONS.map((option) => <div className="font-medium text-lg text-stone-500 dark:text-neutral-400">{option}</div>)}
        </div>
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
