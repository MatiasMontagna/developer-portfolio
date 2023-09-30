export default function ProjectCard({ title, description, className }:{
  title: string
  description: string
  className: string
}) {
  return (
    <div className={`flex-col h-80 w-56 rounded-xl shadow ${className}`}>
      <div className="h-2/5 w-full bg-slate-400 dark:bg-slate-200 rounded-t-xl items-center justify-center">Image Here</div>
      <div className="flex-col h-3/5 rounded-b-xl w-full dark:bg-neutral-700 justify-between p-4">
        <div className=" flex-col items-center space-y-2">
          <p className="dark:text-stone-300 font-medium">{title}</p>
          <p className="text-stone-500 dark:text-stone-300 font-light">{description}</p>
        </div>
        <div className="flex-row justify-between px-4">
          <p>Preview</p>
          <p>Github</p>
        </div>
      </div>
    </div>
  );
}
