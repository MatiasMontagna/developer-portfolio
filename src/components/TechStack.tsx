'use client';

import ReactLogo from '@public/icons/react-icon.svg';
import TypeScriptLogo from '@public/icons/typescript-icon.svg';
import ReduxLogo from '@public/icons/redux-icon.svg';
import ExpoLogo from '@public/icons/expo-icon.svg';
import RailsLogo from '@public/icons/rails-icon.svg';
import TailwindLogo from '@public/icons/tailwind-icon.svg';
import VueLogo from '@public/icons/vue-icon.svg';
import HerokuIcon from '@public/icons/heroku-icon.svg';

const TECHNOLOGIES = [
  {
    title: 'TypeScript',
    Icon: TypeScriptLogo,
    className: '',
    href: 'https://www.typescriptlang.org/',
  },
  {
    title: 'React',
    Icon: ReactLogo,
    className: '',
    href: 'https://react.dev/',
  },
  {
    title: 'Redux',
    Icon: ReduxLogo,
    className: '',
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
    className: '',
    href: 'https://rubyonrails.org/',
  },
  {
    title: 'Tailwind',
    Icon: TailwindLogo,
    className: '',
    href: 'https://tailwindcss.com/',
  },
  {
    title: 'Vue',
    Icon: VueLogo,
    className: '',
    href: 'https://vuejs.org/',
  },
  {
    title: 'Heroku',
    Icon: HerokuIcon,
    className: '',
    href: 'https://vuejs.org/',
  },
];

function TechStackIcons() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-8 md:gap-20">
      {TECHNOLOGIES.map(({
        title, Icon, className, href,
      }) => (
        <a
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
        <p className="font-bold text-slate-600 text-3xl md:text-5xl dark:text-zinc-300"> My Tech Stack</p>
        <p className="text-lg text-stone-500 md:text-2xl dark:text-neutral-400">Technologies I&apos;ve been working with recently</p>
      </div>

      <TechStackIcons />
    </div>
  );
}
