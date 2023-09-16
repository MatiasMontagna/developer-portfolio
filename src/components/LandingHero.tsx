import Image from 'next/image';

export default function LandingHero() {
  const textClassNames = 'font-bold text-3xl md:text-6xl text-slate-600 dark:text-zinc-300';

  return (
    <div className="flex flex-col md:flex-row w-screen md:w-full space-y-8 justify-between md:px-10 items-center">
      <div className="justify-center items-center overflow-hidden rounded-full border-blue-500 border-2 md:border-4 w-1/2 md:w-auto md:order-2">
        <Image
          src="/images/profile-picture.jpeg"
          alt="Profile picture."
          width={280}
          height={280}
          layout="responsive"
        />
      </div>
      <div className="flex flex-col justify-center md:order-1">
        <p className={textClassNames}>Hi 👋,</p>
        <p className={textClassNames}>My name is</p>
        <span className="bg-gradient-to-r from-blue-600 to-indigo-400 font-bold inline-block text-transparent bg-clip-text text-3xl md:text-6xl">Matías Montagna</span>
        <p className={textClassNames}>I build digital products</p>
      </div>
    </div>
  );
}
