import { useSelector } from "react-redux";
import HookForm from "../components/Payment/HookForm";

const Payment = () => {
  const basket = useSelector((state) => state.basket.items);

  return (
    <>
      <div className="pt-32 container">
        <h1 className="text-3xl text-0001 font-medium">Ödəniş</h1>
        <div className="w-full h-[6px] rounded-md bg-0002 mt-8"></div>
        <div className="md:min-h-[70vh]">
          <div className="grid grid-cols-2 gap-10 max-md:flex max-md:flex-col-reverse my-8">
            <div>
              <HookForm />
            </div>
            <div className="flex justify-end max-md:justify-start">
              {basket?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-[#4D4D4D] text-0001 flex flex-col justify-between p-5 rounded-xl w-2/3 max-md:w-full"
                  >
                    <div className="flex flex-col gap-2">
                      <h2 className="text-xl font-medium">{item.title}</h2>
                      <p>{item.cinema}</p>
                      <p className="flex flex-wrap gap-4">
                        <span>
                          {item.releaseDate} {item.time}
                        </span>
                        <span>Zal: {item.hall}</span>
                      </p>
                      <ul>
                        {item.seat.map((i, index) => {
                          const [row, col] = i.split("-");
                          return (
                            <li key={index} className="flex flex-wrap gap-6">
                              <p>{`Sıra ${row}, Yer ${col} (Böyük)`}</p>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <p className="font-semibold mt-4 border-t border-0001/30 pt-3">
                      Ümumi: {item.price} AZN
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
