import Image from 'next/image';

export default function LandingHero() {
  const textClassNames = 'font-bold text-6xl text-slate-600 dark:text-zinc-300';

  return (
    <div className="flex flex-row w-full justify-between px-10">
      <div className="flex flex-col justify-center">
        <p className={textClassNames}>Hi 👋,</p>
        <p className={textClassNames}>My name is</p>
        <span className="bg-gradient-to-r from-blue-600 to-indigo-400 font-bold inline-block text-transparent bg-clip-text text-6xl">Matías Montagna</span>
        <p className={textClassNames}>I build digital products</p>
      </div>
      <div className="justify-center items-center overflow-hidden rounded-full border-blue-500 border-4">
        <Image
          src="/images/profile-picture.jpeg"
          alt="Profile picture."
          width={280}
          height={280}
        />
      </div>
    </div>
  );
}
