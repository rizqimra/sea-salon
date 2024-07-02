import { SiStylelint } from "react-icons/si";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#200D35] to-[#E95E86] flex justify-between px-24 py-10 mx-24 rounded-xl">
      <div className="flex flex-col justify-center items-center gap-3">
        <SiStylelint size={60} fill="white" />
        <h1 className="text-2xl font-bold text-white">SEA Salon</h1>
      </div>
      <div className="flex items-center justify-center gap-1">
        <AiFillFacebook size={40} fill="white" className="cursor-pointer"/>
        <AiFillTwitterSquare size={40} fill="white" className="cursor-pointer"/>
        <FaInstagramSquare size={40} fill="white" className="cursor-pointer"/>
        <FaLinkedin size={40} fill="white" className="cursor-pointer"/>
      </div>
    </div>
  );
};

export default Footer;
