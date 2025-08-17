import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

import subIcon from "../../assets/icons/sub/sub.svg";
import noSub from "../../assets/icons/sub/noSub.svg";

import { Link } from "react-router-dom";
import usePagination from "../../hooks/usePagination";
import { LANGUAGE_FLAG_MAP, ITEMS_PER_PAGE } from "../../helpers/constants";

const TableSchedule = ({ data }) => {
  const { page, setPage, selectedData, pageCount, startIndex } = usePagination(
    data,
    ITEMS_PER_PAGE
  );

  return (
    <div className="overflow-x-auto flex flex-col items-end cursor-default">
      <table className="w-full border-0001 border-collapse">
        <tbody className="bg-0005 transition">
          {selectedData.map(
            ({ id, title, slug, time, cinema, hall, lang, sub }, index) => {
              return (
                <tr
                  key={startIndex + index}
                  className="bg-0005 text-white border-b border-gray-600"
                >
                  <td className="py-4 border-b border-white px-2 text-center text-sm max-sm:p-1">
                    {time}
                  </td>

                  <td className="py-4 border-b border-white px-2 text-center text-sm max-sm:p-1 max-sm:hidden">
                    <p className="hidden md:block">{title}</p>
                  </td>

                  <td className="md:hidden border-b border-white py-4 px-2 text-sm max-sm:p-1 max-sm:text-[12px]">
                    <div className="max-xxs:leading-none">
                      <p className="max-sm:text-[10px] text-ellipsis whitespace-nowrap overflow-hidden max-xs:max-w-[100px] max-xxs:text-[10px]">
                        {title}
                      </p>
                      <span className="max-xxs:text-[8px] max-xxs:leading-none">
                        {cinema} | {hall}
                      </span>
                    </div>
                  </td>

                  <td className="py-4 px-2 border-b border-white text-sm max-sm:p-1 max-sm:text-[12px] max-md:hidden">
                    <div className="flex justify-center items-center gap-2">
                      <span>
                        {cinema} | Zal: {hall}
                      </span>
                    </div>
                  </td>

                  <td className="py-4 px-2 border-b border-white text-sm max-sm:p-1 text-center">
                    2D
                  </td>

                  <td className="py-4 px-2 border-b border-white max-sm:p-1 text-center max-xxs:min-w-5">
                    <img src={LANGUAGE_FLAG_MAP[lang]} alt={lang} />
                  </td>

                  <td className="py-4 px-2 border-b border-white text-sm max-sm:p-1">
                    <div className="flex items-center justify-center">
                      {sub !== null ? (
                        <img src={subIcon} alt="sub" />
                      ) : (
                        <img src={noSub} alt="sub" />
                      )}
                    </div>
                  </td>

                  <td className="py-4 px-2 border-b border-white max-sm:p-1">
                    <Link
                      to={`/movies-details/${slug}/ticket/${id}`}
                      className="flex justify-end"
                    >
                      <button className="flex items-center justify-center cursor-pointer opacity-65 hover:opacity-100 duration-200 rounded-[20px] h-[36px] px-4 bg-[#C02020] text-white text-sm hover:bg-[#A81A1A] transition md:w-[160px] w-[100px] max-sm:w-[60px] max-sm:p-0 max-sm:text-[12px] max-sm:leading-3">
                        Bilet Al
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>

      <Stack spacing={2} className="mt-4 flex justify-center">
        <Pagination
          count={pageCount}
          page={page}
          onChange={(e, value) => setPage(value)}
          size="small"
          color="error"
          sx={{
            "& .MuiPaginationItem-root": { color: "#fff" },
          }}
        />
      </Stack>
    </div>
  );
};

export default TableSchedule;
