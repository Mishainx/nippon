import Link from "next/link";
import MenuIcon from "@/icons/MenuIcon";
import ArrowIcon from "@/icons/ArrowIcon";

const MenuList = ({ open, handleClose, pages }) => {
  return (
    <div className={`${open ? 'visible opacity-100' : 'invisible opacity-0'} transition-all fixed inset-0 bg-gray-700/60 flex justify-end z-40`}>
      <aside className={`${!open ? 'translate-x-full md:translate-x-48 rounded-l-xl' : 'translate-x-0'} bg-slate-100 transition-all duration-500 w-full md:w-56  flex flex-col items-center p-2 shadow-lg ${open ? 'rounded-none' : ''}`}>
        <div onClick={handleClose} className="cursor-pointer mb-4 flex justify-center w-full">
        <MenuIcon width={25} height={25}/>
        </div>
        <nav className="flex-1 overflow-auto w-full">
          <ul className="grid gap-1  w-full">
            {pages.map((page, i) => (
              <li key={i} className="w-full rounded-lg">
                <Link
                  href={page.href}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg hover:bg-gray-700 hover:text-gray-200"
                  prefetch={false}
                >
                  {page.src}
                  <span className="text-xs">{page.title}</span>
                  <div className="flex-grow" /> {/* Espacio flexible para alinear a la derecha */}
                <ArrowIcon width={15} height={15}/>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default MenuList;
