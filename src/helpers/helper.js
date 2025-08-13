export function formatDate(date) {
  if (!date) return "";
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();

  return `${day}.${month}.${year}`;
}

export const resetFilters = (setLanguage, setCinema, setDate) => {
  setLanguage("");
  setCinema("");
  setDate(null);
};

export const sortByTime = (a, b) => {
  const [ah, am] = a.time.split(":").map(Number);
  const [bh, bm] = b.time.split(":").map(Number);
  return ah * 60 + am - (bh * 60 + bm);
};
