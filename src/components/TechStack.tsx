'use client';

import ReactLogo from '@public/icons/react-icon.svg';
import TypeScriptLogo from '@public/icons/typescript-icon.svg';
import ReduxLogo from '@public/icons/redux-icon.svg';
import ExpoLogo from '@public/icons/expo-icon.svg';
import RailsLogo from '@public/icons/rails-icon.svg';
import TailwindLogo from '@public/icons/tailwind-icon.svg';
import VueLogo from '@public/icons/vue-icon.svg';
import HerokuIcon from '@public/icons/heroku-icon.svg';
import { SUBTITLE_CLASSNAMES, TITLE_CLASSNAMES } from '@/utils/constants';

const TECHNOLOGIES = [
  {
    title: 'TypeScript',
    Icon: TypeScriptLogo,
    className: 'text-sky-600 hover:text-sky-300',
    href: 'https://www.typescriptlang.org/',
  },
  {
    title: 'React',
    Icon: ReactLogo,
    className: 'text-cyan-400 hover:text-cyan-100',
    href: 'https://react.dev/',
  },
  {
    title: 'Redux',
    Icon: ReduxLogo,
    className: 'text-purple-600 hover:text-violet-400',
    href: 'https://redux.js.org/',
  },
  {
    title: 'Expo',
    Icon: ExpoLogo,
    className: 'text-black hover:text-slate-700 dark:text-slate-300 dark:hover:text-white',
    href: 'https://expo.dev/',
  },
  {
    title: 'Ruby on Rails',
    Icon: RailsLogo,
    className: 'text-red-600 hover:text-red-300',
    href: 'https://rubyonrails.org/',
  },
  {
    title: 'Tailwind',
    Icon: TailwindLogo,
    className: 'text-cyan-500 hover:text-cyan-200',
    href: 'https://tailwindcss.com/',
  },
  {
    title: 'Vue',
    Icon: VueLogo,
    className: 'text-emerald-500 hover:text-emerald-200',
    href: 'https://vuejs.org/',
  },
  {
    title: 'Heroku',
    Icon: HerokuIcon,
    className: 'text-[#6762a6] hover:text-indigo-300',
    href: 'https://www.heroku.com/',
  },
];

function TechStackIcons() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-8 md:gap-20">
      {TECHNOLOGIES.map(({
        title, Icon, className, href,
      }) => (
        <a
          key={title}
          title={title}
          target="_blank"
          href={href}
          rel="noreferrer"
        >
          <Icon className={`text-8xl ${className}`} />
        </a>

      ))}
    </div>
  );
}

export default function TechStack() {
  return (
    <div className="flex-col justify-between items-center space-y-14">
      <div className="flex flex-col justify-between items-center h-20 md:h-24">
        <p className={TITLE_CLASSNAMES}> My Tech Stack</p>
        <p className={SUBTITLE_CLASSNAMES}>Technologies I&apos;ve been working with recently</p>
      </div>

      <TechStackIcons />
    </div>
  );
}
