import { TITLE_CLASSNAMES, SUBTITLE_CLASSNAMES, DEVELOPER_EMAIL } from '@/utils/constants';

function ContactButton() {
  return (
    <a
      href={`mailto:${DEVELOPER_EMAIL}`}
      className="flex items-center justify-center bg-gray-200 dark:bg-neutral-700 w-80 h-16 rounded-lg"
    >
      <button type="button" className="text-xl uppercase text-slate-600 dark:text-zinc-300">{DEVELOPER_EMAIL}</button>
    </a>
  );
}

export default function Contact() {
  return (
    <div id="contact" className="flex-col justify-between items-center space-y-10">
      <div className="flex flex-col justify-between items-center h-20 md:h-24 w-screen">
        <p className={TITLE_CLASSNAMES}> Contact</p>
        <p className={SUBTITLE_CLASSNAMES}>Interested? Let&apos;s get in touch</p>
      </div>
      <ContactButton />
    </div>

  );
}
