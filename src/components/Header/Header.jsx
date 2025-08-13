import { useState } from "react";
import { Link } from "react-router-dom";
import LanguageSelect from "./LanguageSelect";
import logo from "../../assets/icons/logo.svg";
import { NAV_LINKS } from "../../helpers/constants";

const Header = () => {
  const [lang, setLang] = useState("AZE");

  return (
    <>
      <header>
        <div className="container">
          <div className="flex justify-between items-center duration-200 container bg-transparent absolute top-0 left-1/2 -translate-x-1/2 z-[15]">
            <div className="flex items-center h-[85px] gap-36 max-lg:gap-20 max-md:justify-center w-full">
              <Link to="/">
                <img className="w-[150px]" src={logo} alt="logo" />
              </Link>
              <nav className="max-md:hidden">
                <ul className="flex justify-center items-center gap-[60px] max-lg:gap-[40px]">
                  {NAV_LINKS.map(({ url, name }) => {
                    return (
                      <li
                        key={url}
                        className="cursor-pointer [&.active]:text-0002 text-0001 hover:text-0002 duration-300"
                      >
                        <Link to="/">{name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div className="text-0001 max-md:hidden">
              <LanguageSelect lang={lang} setLang={setLang} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
