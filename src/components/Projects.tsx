import { SUBTITLE_CLASSNAMES, TITLE_CLASSNAMES } from '@/utils/constants';
import ProjectCard from './ProjectCard';

const PROJECTS_DATA = [
  {
    title: 'Duit',
    description: 'Mobile app where users execute routines of tasks made by their bosses.',
  },
  {
    title: 'Cleary',
    description: 'Mobile app for the Cleary Web App',
  },
  {
    title: 'Re App',
    description: 'Mobile App that enhances recycling by listing nearby recyling stations and more.',
  },
];

export default function Projects() {
  return (
    <div className="flex-col space-y-10">
      <div className="flex-col justify-between items-center  h-20 md:h-24">
        <p className={TITLE_CLASSNAMES}>Projects</p>
        <p className={SUBTITLE_CLASSNAMES}>Things I&apos;ve worked on so far</p>
      </div>
      <div className="flex-row flex-wrap">
        {PROJECTS_DATA.map(({ title, description }) => <ProjectCard title={title} description={description} className="m-4" />)}
      </div>
    </div>
  );
}
