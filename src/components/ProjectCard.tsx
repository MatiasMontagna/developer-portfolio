import AppStoreIcon from '@public/icons/app-store-apple-logo.svg';
import GooglePlayIcon from '@public/icons/google-play-icon.svg';
import Image from 'next/image';

export default function ProjectCard({
  title, description, className, imagePath, imageContainerClassNames, playStoreHref, appStoreHref,
}:{
  title: string
  description: string
  className: string
  imagePath: string
  imageContainerClassNames: string
  playStoreHref: string
  appStoreHref: string
}) {
  return (
    <div className={`flex-row md:flex-col h-44 md:h-96 w-3/4 md:w-56 rounded-xl shadow ${className}`}>
      <div className={`h-full w-2/5 md:h-2/5 md:w-full rounded-l-xl md:rounded-tr-xl md:rounded-bl-none items-stretch justify-center ${imageContainerClassNames}`}>
        <Image
          src={imagePath}
          alt={`${title} logo.`}
          width={80}
          height={80}
          style={{
            width: '100%',
            objectFit: 'contain',
          }}

        />
      </div>
      <div className="flex-col w-3/5 md:h-3/5 rounded-r-xl md:rounded-bl-xl md:rounded-tr-none md:w-full dark:bg-neutral-700  px-4 pt-4 pb-2 justify-between">
        <div className=" flex-col items-center space-y-2">
          <p className="dark:text-stone-300 font-medium">{title}</p>
          <p className="text-stone-500 dark:text-stone-300 font-light">{description}</p>
        </div>
        <div className="flex-row w-full justify-end md:justify-between items-center md:px-6">
          <a
            href={appStoreHref}
            title="Download on the App Store"
          >
            <AppStoreIcon className="text-5xl" />
          </a>
          <a href={playStoreHref} title="Get it on Google Play">
            <GooglePlayIcon className="text-5xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
