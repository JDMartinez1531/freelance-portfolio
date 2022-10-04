import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

function Header() {
  const [showMenu, setShowMenu] = useState("md:hidden");
  const router = useRouter();
  const menuItems = [
    {
      label: "Home",
      key: "/",
    },
    {
      label: "Portfolio",
      key: "/portfolio",
    },
    {
      label: "Contact",
      key: "/contact",
    },
    {
      label: "Services",
      key: "/services",
    },
  ];

  const handleMenu = () => {
    showMenu == "md:hidden" ? setShowMenu("md:flex") : setShowMenu("md:hidden");
  };

  return (
    <div className="text-white font-mont fixed top-0 left-0 right-0 z-50">
      <div
        className={`flex bg-theme justify-between items-center p-2 shadow-lg ${
          showMenu == "md:flex" && "md:flex-col"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <h1 className="text-4xl font-semibold">J D M</h1>
          <FaBars
            onClick={handleMenu}
            className="hidden md:flex cursor-pointer"
          />
        </div>
        <div className="flex md:hidden">
          {menuItems.map((item) => {
            return (
              <li
                className={`list-none mx-5 p-1 ${
                  item.key == router.asPath && "bg-white rounded-md text-black"
                }`}
                key={item.key}
              >
                <Link href={item.key}>
                  <a>{item.label}</a>
                </Link>
              </li>
            );
          })}
        </div>
        {/* mobile menu */}
        <div className={`mt-3 flex-col w-full hidden ${showMenu}`}>
          {menuItems.map((item) => {
            return (
              <li
                className={`list-none px-1 w-fit ${
                  item.key == router.asPath &&
                  "bg-white rounded-md text-black px-5"
                }`}
                key={item.key}
              >
                <Link href={item.key}>
                  <a>{item.label}</a>
                </Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
