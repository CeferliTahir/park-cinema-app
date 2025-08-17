import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const HookForm = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    toast.success("Form successfully submitted!");
    reset();

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  const onError = (formErrors) => {
    Object.values(formErrors).forEach((err) => {
      toast.error(err.message);
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex flex-col gap-9 md:xlg:w-2/3 lg:w-full"
    >
      <div>
        <input
          type="email"
          placeholder="Email"
          className="border-b outline-none text-white border-b-[#D9DADB] bg-transparent py-2 w-full"
          {...register("mail", {
            required: "Email Address is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
        />
      </div>

      <div>
        <div className="flex items-center border-b border-b-[#D9DADB]">
          <span className="text-white mr-2">+994</span>
          <input
            type="number"
            placeholder="51 511 11 11"
            className="bg-transparent outline-none text-white py-2 flex-1"
            {...register("phoneNumber", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{2}\s?[0-9]{3}\s?[0-9]{2}\s?[0-9]{2}$/,
                message: "Please enter a valid phone number",
              },
            })}
          />
        </div>
      </div>

      <label className="flex items-center gap-2 text-0001 text-[14px] md:text-[16px]">
        <Checkbox
          className="w-[24px] h-[24px]"
          {...label}
          {...register("terms", {
            required: "You must agree to the terms",
          })}
          sx={{
            color: "#d9dadb",
            "&.Mui-checked": {
              color: "#d9dadb",
            },
          }}
        />
        Mən
        <a href="#" className="underline text-white">
          Qaydalar və şərtlər
        </a>
        oxudum və razıyam.
      </label>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-3 rounded-2xl w-[170px] hover:bg-red-700 transition-colors"
        >
          Ödənişə keç
        </button>
      </div>
    </form>
  );
};

export default HookForm;
