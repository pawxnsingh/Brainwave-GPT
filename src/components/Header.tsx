// this is the logo of the brainwave
import { useState } from "react";
import { navigation } from "../constants"; // this is the object of the of navigation
import { useLocation } from "react-router-dom"; // useLocation for ui rendering
import { disablePageScroll, enablePageScroll } from "scroll-lock"; //this is for disabling the scrollbar

import brainwave from "../assets/brainwave.svg";
import { HamburgerMenu } from "./design/Header";
import MenuSvg from "../assets/svg/MenuSvg";
import ButtonGradient from "../assets/svg/ButtonGradient";

import Button from "./Button";

const Header = () => {
   // this hook is used for
   const pathName = useLocation(); //Returns the current location object, which represents the current URL in web browsers.
   const [openNavigation, setOpenNavigation] = useState<boolean>(false);

   const toggleNavigation = () => {
      if (openNavigation) {
         setOpenNavigation(false);
         enablePageScroll();
      } else {
         setOpenNavigation(true);
         disablePageScroll();
      }
   };

   const handleClick = () => {
      if (!openNavigation) return;
      enablePageScroll();
      setOpenNavigation(false);
   };

   return (
      <div
         className={`fixed top-0 left-0 w-full z-50 border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
            openNavigation ? "bg-n-8" : "bg-n-8/90"
         }`}
      >
         <div className="flex items-center px-5 lg:px-7.5 xl:px-10  max-lg:py-4 ">
            <a className="block w-[12rem] xl:mr-8" href="#hero">
               <img src={brainwave} alt="brainwave" width={190} height={40} />
            </a>

            {/* in order to create the nav bar we can will use the nav tag*/}
            {/* this navBar className is for the mobile pov */}
            <nav
               className={`${
                  openNavigation ? "flex" : "hidden"
               }  fixed top-[4.5rem] left-0 bottom-0 right-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
            >
               <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row ">
                  {navigation.map((item) => (
                     <a
                        href={item.url}
                        key={item.id}
                        onClick={handleClick}
                        className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                           item.onlyMobile ? "lg:hidden" : ""
                        } px-8 py-6 md:py-8 lg:-mr-0.25  lg:text-xs lg:font-semibold ${
                           item.url === pathName.hash
                              ? "z-2 lg:text-n-1"
                              : " lg:text-n-1/50"
                        }  `}
                     >
                        {item.title}
                     </a>
                  ))}
               </div>
               <HamburgerMenu />
            </nav>
            <a
               href="#signup"
               className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block "
            >
               New Account
            </a>
            {/* absolute positioning in relative positioning- css tricks */}
            <Button className="hidden lg:flex">Sign in</Button>

            {/* here px is padding horizontal */}
            <Button
               className="ml-auto lg:hidden"
               px="px-3"
               onClick={toggleNavigation}
            >
               <MenuSvg openNavigation={openNavigation} />
            </Button>
            <ButtonGradient />
         </div>
      </div>
   );
};

export default Header;
