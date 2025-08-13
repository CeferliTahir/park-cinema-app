import SocialMedia from "./SocialMedia";
import logo from "../../assets/icons/logo.svg";
import visa from "../../assets/icons/Visa.svg";
import { FOOTER_LINK_GROUPS } from "../../helpers/constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-0003 py-8">
      <div className="container">
        <ul className="flex flex-wrap gap-36 flex-row max-sm:flex-col max-sm:items-center max-sm:text-center max-md:gap-10">
          <li className="flex flex-col max-md:flex-1 max-xs:items-center">
            <Link
              to="/"
              className="w-[190px] max-sm:flex max-sm:justify-center"
            >
              <img
                src={logo}
                alt="Park Cinema Logo"
                className="w-full h-[40px] object-contain max-lg:w-[140px]"
              />
            </Link>
          </li>

          {FOOTER_LINK_GROUPS.map((section, index) => (
            <li key={index}>
              <ul className="flex flex-col gap-5 max-xs:items-center">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="text-0001 text-base hover:text-white duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}

          <li className="max-md:flex-1">
            <h3 className="text-0001 text-base mb-5 max-xs:text-center cursor-default">
              Bizi izləyin
            </h3>
            <SocialMedia />
          </li>

          <li className="flex gap-7 items-start max-lg:flex-col max-md:flex-row max-xs:justify-center">
            <img
              src={visa}
              alt="Visa"
              className="max-lg:w-[70px] w-[50px] h-[50px]"
            />
          </li>
        </ul>
        <div className="flex items-center justify-between text-sm leading-5 max-md:flex-col max-md:gap-4 py-3 px-5 text-0001">
          <p className="cursor-default">© Park Cinema, 2025</p>
          <a
            href="https://www.esam-innovations.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            ESAM Innovations
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
