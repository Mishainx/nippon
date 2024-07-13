import FacebookIcon from "@/icons/FacebookIcon";
import InstagramIcon from "@/icons/InstagramIcon";
import MailIcon from "@/icons/MailIcon";
import MapsIcon from "@/icons/MapsIcon";
import WhatsappIcon from "@/icons/WhatsappIcon";
import YoutubeIcon from "@/icons/YoutubeIcon";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-5 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-400 flex flex-col items-center justify-center">
      <div className="w-full">
      <div className="flex flex-col md:flex-row  items-center justify-around">
          {/*Logo*/}
          <div className="w-full md:w-1/3 flex items-center justify-center">
          <div className="flex flex-col justify-center items-center text-center">
            <Image
              src="/nippon-game-logo.png"
              alt="Nippon game logo"
              width={250}
              height={250}
            />
          </div>
        </div>
        {/*Info*/}
        <div className="w-full md:w-1/3 text-xs flex my-7">
        <ul className="w-full flex flex-col items-center">
          <h3 className="text-slate-50 text-xl font-bold">Info</h3>

            <li className="flex justify-center items-center gap-2 cursor-pointer hover:text-white transition-colors duration-300">
              <MapsIcon />
              <p>Av. Corrientes 2416, CABA</p>
            </li>
            <li className="flex justify-center items-center gap-2 cursor-pointer hover:text-white transition-colors duration-300">
              <MailIcon />
              <p>nippongame@gmail.com</p>
            </li>
            <li className="flex justify-center items-center gap-2 cursor-pointer hover:text-white transition-colors duration-300">
              <WhatsappIcon />
              <p>+54911222222</p>
            </li>
        </ul>

        </div>

        <div className="w-full md:w-1/3 text-xs flex">
        <ul className="w-full flex flex-col items-center gap-1">
          <h3 className=" text-slate-50 text-xl font-bold">Contacto</h3>

            <li className="flex justify-center items-center gap-2 cursor-pointer hover:text-white transition-colors duration-300">
              <MapsIcon />
              <p>Av. Corrientes 2416, CABA</p>
            </li>
            <li className="flex justify-center items-center gap-2 cursor-pointer hover:text-white transition-colors duration-300">
              <MailIcon />
              <p>nippongame@gmail.com</p>
            </li>
            <li className="flex justify-center items-center gap-2 cursor-pointer hover:text-white transition-colors duration-300">
              <WhatsappIcon />
              <p>+54911222222</p>
            </li>
        </ul>

        </div>
  
      </div>
      </div>
      {/*RRSS*/}

      <div className="p-6  flex justify-center items-center gap-3">
          <FacebookIcon
            width={50}
            height={50}
            className="cursor-pointer p-1 text-white rounded-full bg-red-500/90 hover:bg-red-800"
          />
          <InstagramIcon
            width={50}
            height={50}
            className="cursor-pointer p-1 text-white rounded-full bg-red-500/90 hover:bg-red-800"
          />
          <YoutubeIcon
            width={50}
            height={50}
            className="cursor-pointer p-2 text-white rounded-full bg-red-500/90 hover:bg-red-800 transition duration-200 ease-in-out"
          />
        </div>  
      <div className="w-2/4 border-t border-red-500/90"></div>
            {/*Copyright*/}

      <p className="text-sm text-center p-3">© 2024 Nippon Game. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
