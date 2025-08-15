export const MOVIE_CATEGORIES = {
  ALL: "Hamısı",
  SOON: "Tezliklə",
  SCHEDULE: "Cədvəl",
};

export const NAV_LINKS = [
  { url: "cinemas", name: "Kinoteatrlar" },
  { url: "campaigns", name: "Aksiyalar" },
  { url: "faq", name: "FAQ" },
  { url: "contact", name: "Əlaqə" },
  { url: "sign-in", name: "Profil" },
];

export const CINEMA_OPTIONS = [
  "Park Bulvar",
  "Metro Park",
  "Flame Towers",
  "Sevinc Mall",
  "Shahdag",
];

export const FOOTER_LINK_GROUPS = [
  {
    links: [
      { label: "Kinoteatrlar", url: "#" },
      { label: "Aksiyalar", url: "#" },
      { label: "FAQ", url: "#" },
    ],
  },
  {
    links: [
      { label: "Profil", url: "#" },
      { label: "Əlaqə", url: "#" },
      { label: "Hüquqi Şərtlər", url: "#" },
    ],
  },
];

export const ITEMS_PER_PAGE = 10;

import aze from "../assets/icons/flags/az-flag.svg";
import en from "../assets/icons/flags/en-flag.svg";
import ru from "../assets/icons/flags/ru-flag.svg";
import tr from "../assets/icons/flags/tr-flag.svg";

export const LANGUAGE_LIST = [
  { code: "AZE", flag: aze },
  { code: "ENG", flag: en },
  { code: "RUS", flag: ru },
  { code: "TUR", flag: tr },
];

export const LANGUAGE_SHORT_MAP = {
  Azerbaijan: "AZE",
  Turkish: "TUR",
  Russian: "RUS",
  English: "ENG",
};

export const LANGUAGE_FLAG_MAP = {
  AZE: aze,
  ENG: en,
  RUS: ru,
  TUR: tr,
};

export const LANGUAGE_NAME_TO_FLAG = {
  Azerbaijan: aze,
  English: en,
  Russian: ru,
  Turkish: tr,
};

export const LANGUAGE_OPTIONS = [
  { value: "Azerbaijan", label: "AZ" },
  { value: "Turkish", label: "TR" },
  { value: "Russian", label: "RU" },
  { value: "English", label: "EN" },
];

import banner_f1 from "../assets/images/banners/banner_f1.webp";
import banner_heyecanli_cume from "../assets/images/banners/banner__heyecanli_cume.webp";
import banner_draqon from "../assets/images/banners/banner_draqon.webp";
import banner_fantastic_dortluk from "../assets/images/banners/banner_fantastic_dortluk.webp";
import banner_lilo_stich from "../assets/images/banners/banner_lilo_stich.webp";
import banner_smurfs from "../assets/images/banners/banner_smurfs.webp";
import banner_superman from "../assets/images/banners/banner_superman.webp";
import banner_yura_dovru from "../assets/images/banners/banner_yura__dovru.webp";

export const BANNERS = [
  { src: banner_f1, alt: "f1", slug: "f1" },
  {
    src: banner_heyecanli_cume,
    alt: "heyecanli_cume",
    slug: "freakier-friday-2",
  },
  {
    src: banner_fantastic_dortluk,
    alt: "fantastic_dortluk",
    slug: "the-fantastic-four-first-steps",
  },
  { src: banner_superman, alt: "superman", slug: "superman" },
  {
    src: banner_yura_dovru,
    alt: "yura_dovru",
    slug: "jurassic-world-resurgence",
  },
];
