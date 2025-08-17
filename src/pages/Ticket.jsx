import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import SeatMap from "../components/Ticket/SeatMap";
import useFetch from "../hooks/useFetch";
import { addToBasket } from "../store/reducer/basketSlice";

import herobg from "../assets/icons/ticket-herobg.svg";
import dateIcon from "../assets/icons/date-com-two.svg";
import clockIcon from "../assets/icons/clock.svg";

const TICKET_PRICE = 9;

const Ticket = () => {
  const [dataMovie, setDataMovie] = useState(null);
  const [dataTimes, setDataTimes] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const { slug, id } = useParams();
  const { data, error } = useFetch("/movies");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = selectedSeats.length * TICKET_PRICE;

  useEffect(() => {
    if (error) {
      toast.error("Məlumat yüklənərkən xəta baş verdi!");
    }
  }, [error]);

  useEffect(() => {
    if (data && slug) {
      const movie = data.find((item) => item.slug === slug);
      setDataMovie(movie || null);
    }
  }, [data, slug]);

  useEffect(() => {
    if (dataMovie && id) {
      const time = dataMovie.times.find((item) => item.id === id);
      setDataTimes(time || null);
    }
  }, [dataMovie, id]);

  const handleBuyTicket = (e) => {
    e.preventDefault();

    if (total === 0) {
      toast.error("Zəhmət olmasa yer seçin!");
      return;
    }

    dispatch(
      addToBasket({
        title: dataTimes?.title,
        cinema: dataTimes?.cinema,
        releaseDate: dataMovie?.releaseDate,
        time: dataTimes?.time,
        hall: dataTimes?.hall,
        seat: selectedSeats,
        price: total,
      })
    );

    navigate(
      `/movies-details/${dataTimes?.slug}/ticket/${dataTimes?.id}/payment`
    );
  };

  return (
    <div className="container">
      <div className="mt-32 mb-10">
        <h1 className="text-3xl mb-3 text-white">Oturacaq Seçimi</h1>

        <div
          className="relative w-full h-[300px] bg-cover rounded-xl z-0 overflow-hidden before:absolute before:w-full before:h-full before:bg-[#161616d6] before:z-[-1]"
          style={{ backgroundImage: `url(${herobg})` }}
        >
          <div className="flex gap-4 p-3 h-full text-[#D9DADB] duration-200 max-lg:w-full md:w-1/2 lg:w-1/3">
            <div className="flex items-center h-full rounded-xl overflow-hidden max-md:w-[50%] md:w-[40%]">
              <img src={dataMovie?.posterUrl} alt="movie" className="h-full" />
            </div>

            <div className="flex flex-col justify-between max-md:w-[50%]">
              <div className="flex flex-col gap-2 md:gap-3 max-sm:text-[15px]">
                <h1 className="truncate text-nowrap">{dataTimes?.title}</h1>
                <p className="text-[18px] font-semibold">2D</p>
                <p className="flex items-center gap-2">
                  <img src={dateIcon} alt="date" />
                  {dataMovie?.releaseDate}
                </p>
                <p className="flex items-center gap-2">
                  <img src={clockIcon} alt="clock" />
                  {dataTimes?.time}
                </p>
              </div>

              <div className="flex flex-col gap-1 md:gap-2 max-sm:text-[13px]">
                <p>
                  <span className="font-semibold">Dil:</span> {dataTimes?.lang}
                </p>
                <p>
                  <span className="font-semibold">Kinoteatr:</span>{" "}
                  {dataTimes?.cinema}
                </p>
                <p>
                  <span className="font-semibold">Zal:</span> {dataTimes?.hall}
                </p>
                <p>
                  <span className="font-semibold">Müddət:</span>{" "}
                  {dataMovie?.duration}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 md:flex justify-between items-center">
          <ul className="flex flex-wrap items-center justify-center gap-2 md:gap-8">
            <li className="flex items-center gap-2 text-[#D9DADB]">
              <div className="w-[18px] h-[18px] rounded-full bg-[#D9DADB]" />
              Mövcuddur
            </li>
            <li className="flex items-center gap-2 text-[#D9DADB]">
              <div className="w-[18px] h-[18px] rounded-full bg-black" />
              Tutulmuş
            </li>
            <li className="flex items-center gap-2 text-[#D9DADB]">
              <div className="w-[18px] h-[18px] rounded-full bg-[#D52B1E]" />
              Seçilmiş
            </li>
          </ul>

          <p className="mt-2 text-[#D9DADB] max-md:text-[14px] max-md:min-w-max">
            Böyük <strong className="font-semibold">{TICKET_PRICE} AZN</strong>
          </p>
        </div>

        <div className="mt-12 my-5">
          <SeatMap
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
          />

          <div className="flex justify-between mt-6 max-md:flex-col">
            <p className="font-semibold text-[#D9DADB]">Ümumi: {total} AZN</p>
            <button
              onClick={handleBuyTicket}
              className="flex items-center justify-center bg-[#D52B1E] text-[#D9DADB] rounded-[20px] w-[250px] h-[40px] duration-200 cursor-pointer max-md:w-full max-md:mx-auto hover:opacity-80"
            >
              Bilet Al
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
