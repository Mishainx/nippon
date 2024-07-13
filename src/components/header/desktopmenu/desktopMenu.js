import Link from "next/link";

export default function DesktopMenu({ pages }) {
  return (
    <ul className="hidden lg:flex space-x-4">
      {pages.map((page, index) => (
        

        
        <li key={index} className="flex items-center justify-center gap-3 cursor-pointer py-2 text-xs relative group text-black hover:text-red-500/90">
          {page.src}
          <Link href={page.href} className="">
            {page.title}
          </Link>
          <span className=""></span>
        </li>
      ))}
      <Link href="/login">
        <button className="text-xs text-white shadow-md bg-red-500 p-2 rounded-3xl hover:bg-red-700">
          Iniciar sesión
        </button>
      </Link>

    </ul>
  );
}
