/* eslint-disable react/no-unescaped-entities */
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className="relative flex flex-col px-24 gap-10 mb-10">
        <div>
          <h2 className="text-[#1E255E] font-semibold text-3xl">SEA Salon</h2>
          <h1 className="text-[#171A31] font-semibold text-5xl">Contact us</h1>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col gap-5 bg-[#200D35] p-5 text-white rounded-xl">
            <div className="flex items-center gap-3">
              <FaPhone />
              <h2 className="font-semibold text-xl">Thomas</h2>
            </div>
            <hr />
            <p className="text-md">
              Don't hesitate to contact us if you need our help and more
              information
            </p>
            <p className="text-lg underline cursor-pointer w-fit">
              +628123456789
            </p>
          </div>
          <div className="flex flex-col gap-5 bg-[#200D35] p-5 text-white rounded-xl">
            <div className="flex items-center gap-3">
              <FaPhone />
              <h2 className="font-semibold text-xl">Sekar</h2>
            </div>
            <hr />
            <p className="text-md">
              Don't hesitate to contact us if you need our help and more
              information
            </p>
            <p className="text-lg underline cursor-pointer w-fit">
            +628164829372
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
