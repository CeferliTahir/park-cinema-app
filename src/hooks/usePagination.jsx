import { useState } from "react";

const usePagination = (data, itemsPerPage = 10) => {
  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * itemsPerPage;
  const selectedData = data.slice(startIndex, startIndex + itemsPerPage);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  return {
    page,
    setPage,
    selectedData,
    pageCount,
    startIndex,
  };
};

export default usePagination;
