import { Link } from "react-router-dom";


export const Footer = () => {
  return (
    

<footer className="bg-white dark:bg-gray-900 text-black dark:text-white bg-neutral-primary-soft  shadow-xs border border-default m-4">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-body sm:text-center">© 2030 <Link to="/" className="hover:underline">Cinemate™</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
        <li>
            <a href="https://www.instagram.com" target="_blank" ref="noreferrer" className="hover:underline me-4 md:me-6">Instagram</a>
        </li>
        <li>
            <a href="https://www.linkdin.com" target="_blank"  ref="noreferrer" className="hover:underline me-4 md:me-6">Linkdin</a>
        </li>
        <li>
            <a href="https://www.youtube.com" target="_blank"  ref="noreferrer" className="hover:underline me-4 md:me-6">Youtube</a>
        </li>
        <li>
            <a href="https://www.gitHub.com" target="_blank"  ref="noreferrer" className="hover:underline">GitHub</a>
        </li>
    </ul>
    </div>
</footer>

  )
}
