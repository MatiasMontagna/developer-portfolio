'use client';

import { SUBTITLE_CLASSNAMES, TITLE_CLASSNAMES } from '@/utils/constants';
import ProjectCard from './ProjectCard';

const PROJECTS_DATA = [
  {
    title: 'Duit',
    description: 'Mobile app where users execute routines of tasks made by their bosses.',
    imagePath: '/images/duit-icon.png',
    imageContainerClassNames: 'bg-blue-700',
    appStoreHref: 'https://apps.apple.com/app/duit-app/id1279375659',
    playStoreHref: 'https://play.google.com/store/apps/details?id=cl.arenalabs.duitapp&hl=en&gl=US&pli=1',
  },
  {
    title: 'Cleary',
    description: 'Mobile app for the Cleary Web App',
    imagePath: '/images/cleary-icon.png',
    imageContainerClassNames: 'bg-white border-r border-r-slate-200 md:border-r-none md:border-b md:border-b-slate-200 dark:border-0',
    appStoreHref: 'https://apps.apple.com/by/app/cleary/id6449472335',
    playStoreHref: 'https://play.google.com/store/apps/details?id=com.gocleary.cleary_mobile_app&hl=en_US',
  },
  {
    title: 'Re App',
    description: 'Mobile App that enhances recycling by listing nearby recyling stations and more.',
    imagePath: '/images/re-app-icon.png',
    imageContainerClassNames: 'bg-blue-500',
    appStoreHref: 'https://apps.apple.com/us/app/re-econom%C3%ADa-circular/id1529547693',
    playStoreHref: 'https://play.google.com/store/apps/details?id=com.Triciclos.ReApp&hl=es_CL',
  },
];

export default function Projects() {
  return (
    <div className="flex-col space-y-10 w-screen items-center" id="projects">
      <div className="flex-col justify-between items-center  h-20 md:h-24">
        <p className={TITLE_CLASSNAMES}>Projects</p>
        <p className={SUBTITLE_CLASSNAMES}>Things I&apos;ve worked on so far</p>
      </div>
      <div className="flex-col md:flex-row flex-wrap items-center">
        {PROJECTS_DATA.map(({
          title, description, imagePath, imageContainerClassNames, appStoreHref, playStoreHref,
        }) => (
          <ProjectCard
            title={title}
            description={description}
            imagePath={imagePath}
            imageContainerClassNames={imageContainerClassNames}
            appStoreHref={appStoreHref}
            playStoreHref={playStoreHref}
            className="m-2 md:m-4"
          />
        ))}
      </div>
    </div>
  );
}
