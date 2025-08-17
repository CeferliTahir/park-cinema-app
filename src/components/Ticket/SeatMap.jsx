import { useMediaQuery } from "react-responsive";
import screen from "../../assets/icons/screen.svg";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const SeatMap = ({ selectedSeats, setSelectedSeats }) => {
  const rows = 12;
  const cols = 15;

  const toggleSeat = (row, col) => {
    const seatId = `${row}-${col}`;
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    );
  };

  const isXXXS = useMediaQuery({ maxWidth: 360 });
  const isXXS = useMediaQuery({ minWidth: 361, maxWidth: 480 });
  const isXS = useMediaQuery({ minWidth: 481, maxWidth: 640 });

  let initialScale = 1;
  if (isXXXS) initialScale = 0.47;
  else if (isXXS) initialScale = 0.5;
  else if (isXS) initialScale = 0.6;

  return (
    <div className="bg-[#4D4D4D] rounded-xl overflow-hidden flex flex-col justify-center items-center w-full min-h-[500px]">
      <TransformWrapper
        initialScale={initialScale}
        minScale={0.5}
        maxScale={3}
        centerOnInit
        wheel={{ disabled: true }}
        pinch={{ disabled: true }}
        doubleClick={{ disabled: true }}
      >
        {({ zoomIn, zoomOut }) => (
          <>
            <div className="w-full flex items-end justify-end pr-4 pt-4">
              <div className="flex flex-col gap-2 mb-4">
                <button
                  onClick={() => zoomIn()}
                  className="bg-[#D9DADB] md:p-1.5 cursor-pointer flex items-center justify-center rounded w-[34px] h-[34px] max-xxxs:w-[20px] max-xxxs:h-[20px] text-3xl"
                >
                  +
                </button>
                <button
                  onClick={() => zoomOut()}
                  className="bg-[#D9DADB] md:p-1.5 cursor-pointer flex items-center justify-center rounded w-[34px] h-[34px] max-xxxs:w-[20px] max-xxxs:h-[20px] text-3xl"
                >
                  -
                </button>
              </div>
            </div>

            <TransformComponent wrapperClass="!w-full !h-full">
              <div className="flex flex-col items-center w-full h-max md:py-[32px] md:px-[117px] px-3 py-3">
                <div className="flex flex-col gap-3 mb-10">
                  {Array.from({ length: rows }, (_, rowIndex) => (
                    <div key={rowIndex} className="flex items-center gap-4">
                      <div className="w-6 text-right text-sm text-0001">
                        {rows - rowIndex}
                      </div>

                      <div className="flex gap-2">
                        {Array.from({ length: cols }, (_, colIndex) => {
                          const seatId = `${rows - rowIndex}-${colIndex + 1}`;
                          const isSelected = selectedSeats.includes(seatId);

                          return (
                            <button
                              key={colIndex}
                              onClick={() =>
                                toggleSeat(rows - rowIndex, colIndex + 1)
                              }
                              className={`w-8 h-8 md:w-10 md:h-10 rounded-md duration-200 text-xs cursor-pointer flex items-center justify-center
              ${
                isSelected
                  ? "bg-red-500 text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
                            >
                              {colIndex + 1}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="w-full flex flex-col items-center text-0001 mt-6">
                  <span className="text-lg md:text-2xl mb-2">Ekran</span>
                  <img
                    src={screen}
                    alt="screen"
                    className="w-full md:w-3/4 object-cover"
                  />
                </div>
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default SeatMap;
