import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import { BiSubdirectoryRight } from "react-icons/bi";
import { useSelector } from "react-redux";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';

const Email = () => {
  const emailVis = useSelector((state) => state.visibilty.email);
  const formRef = useRef(); // ✅ Reference for the form element

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID, // ✅ your service ID
        import.meta.env.VITE_TEMPLATE_ID, // ✅ your template ID
        formRef.current, // ✅ actual HTML <form> element
        import.meta.env.VITE_PUBLIC_KEY // ✅ your public key
      )
      .then(
        () => {
          toast("✅ Message sent successfully!");
          reset(); // ✅ Clears all inputs after sending
        },
        (error) => {
          toast("EmailJS Error:", error);
          alert("❌ Failed to send message.");
        }
      );
  };

  return (

    <>
      <div
        className={`w-full h-10/12 lg:h-screen mt-10 bg-transparent overflow-y-hidden p-4 sm:p-8 md:p-16 lg:p-28 flex flex-col items-center fixed top-0 ${emailVis ? "translate-x-0" : "translate-x-full"
          } transition-all duration-700`}
      >
        <h1 className="font-bold font-Mona text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white text-center">
          Let's Connect
        </h1>

        <div className="w-full sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2 h-full mt-6 sm:mt-8 lg:mt-10">
          <form
            ref={formRef} // ✅ attach the ref to your form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-full flex flex-col items-center justify-evenly border border-white/60 rounded-2xl bg-transparent backdrop-blur-lg py-6 sm:py-8"
          >
            {/* Name Input */}
            <input
              className="w-11/12 h-20 p-3 sm:p-4 lg:p-5 text-sm sm:text-base text-white rounded-xl sm:rounded-2xl bg-transparent border border-white/60 focus:border-[#91FB03] focus:ring-0 outline-none transition-all duration-200"
              placeholder="Name"
              {...register("user_name")}
            />

            {/* Email Input */}
            <input
              className="w-11/12 h-20 p-3 sm:p-4 lg:p-5 text-sm sm:text-base text-white rounded-xl sm:rounded-2xl bg-transparent border border-white/60 focus:border-[#91FB03] focus:ring-0 outline-none transition-all duration-200"
              placeholder="Email"
              {...register("user_email")}
            />

            {/* Message Textarea */}
            <textarea
              className="w-11/12 h-32 sm:h-36 md:h-40 p-3 sm:p-4 lg:p-5 text-sm sm:text-base text-white rounded-xl sm:rounded-2xl bg-transparent border border-white/60 focus:border-[#91FB03] focus:ring-0 outline-none resize-none transition-all duration-200"
              placeholder="Message"
              {...register("message")}
            />

            {/* Submit Button */}
            <Button icon={<BiSubdirectoryRight />} title={"Submit"} />
          </form>
        </div>
      </div>
      </>
  );
};

export default Email;
