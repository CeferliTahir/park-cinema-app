import { Link } from "react-router-dom";
import { LANGUAGE_NAME_TO_FLAG } from "../../helpers/constants";

const Card = ({ posterUrl, title, releaseDate, ageLimit, language }) => {
  const languages = Array.isArray(language)
    ? language
    : language
    ? [language]
    : [];

  return (
    <div className="group">
      <Link to="/">
        <div className="aspect-[290/480] max-sm:w-full rounded-[18px] shadow-box relative cursor-pointer flex items-center overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#00000000] via-[#0000004E] to-black z-[10]"></div>
          <img
            src={posterUrl}
            alt="film"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 w-full px-3 pb-4 z-10">
            <h2 className="mb-3 text-white text-[22px] font-semibold">
              {title}
            </h2>
            <p className="text-0001 text-[14px]">{releaseDate}</p>
            <div className="flex items-center justify-between">
              <p className="text-0001">{ageLimit}</p>
              <div className="flex items-center gap-2">
                {languages.map(
                  (lang, i) =>
                    LANGUAGE_NAME_TO_FLAG[lang] && (
                      <img
                        key={`${lang}-${i}`}
                        src={LANGUAGE_NAME_TO_FLAG[lang]}
                        alt={lang}
                      />
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
