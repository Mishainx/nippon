import Logo from "../logo/logo";
import NavBar from "./nav.js/navBar";

export default function Header() {
    return (
        <header className="w-full h-14 sm:h-16 py-2 px-4 flex items-center justify-between shadow-lg">
            <Logo />
            <NavBar/>

        </header>
    );
}