import HookForm from "../components/Payment/HookForm";

const Payment = () => {
  return (
    <>
      <div className="pt-32 container max-w-container">
        <h1 className="text-3xl text-0001 font-medium ">Ödəniş</h1>
        <div className="w-full h-[6px] rounded-md bg-0002 mt-8"></div>
        <div className="md:min-h-[70vh]">
          <div className="grid grid-cols-2 gap-10 max-md:flex max-md:flex-col-reverse my-8">
            <div>
              <HookForm />
            </div>
            <div className="flex justify-end max-md:justify-start">
              <div className="bg-[#4D4D4D] text-0001 flex flex-col justify-between p-5 rounded-xl w-2/3 max-md:w-full">
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-medium">Çılpaq Silah</h2>
                  <p>Park Bulvar</p>
                  <p className="flex flex-wrap gap-4">
                    <span>10.08.2025 16:10</span>
                    <span>Zal: 2</span>
                  </p>
                  <p className="flex flex-wrap gap-6">Sıra 7, Yer 10 (Böyük)</p>
                </div>
                <p className="font-semibold mt-4 border-t border-0001/30 pt-3">
                  Ümumi: 18 AZN
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
