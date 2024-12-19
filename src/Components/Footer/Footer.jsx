import Logo from "../../assets/Logos/logo.svg";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BsInstagram, BsLinkedin, BsGlobe, BsFacebook } from "react-icons/bs";

function Footer() {
  const instagram_link = "https://www.instagram.com/ieee_sb_cec/";
  const facebook_link = "https://www.facebook.com/IEEECEC";
  const sb_website_link = "https://cecieee.org/";
  const ias_website_link = "http://cecieee.org/";
  const linkedin_link = "https://www.linkedin.com/company/cecieee/";
  return (
    <>
      <footer className="w-screen p-5 h-fit bg-dark" id="contact">
        <footer className="w-full h-fit max-[528px]:flex-col max-[528px]:gap-5 font-heading flex bg-dark justify-between items-center text-[#9ca3af]">
          <div className="flex flex-col items-center gap-4 px-5 ">
            <img src={Logo} alt="" className="w-24" />
            {/* <div className="flex gap-2 ">
              <FaInstagram className="text-2xl hover:text-[#E1306C] cursor-pointer" />
              <FaFacebook className="text-2xl hover:text-[#0866ff] cursor-pointer" />
              <FaWhatsapp className="text-2xl hover:text-[#128c7e] cursor-pointer" />
            </div> */}
            <div className="flex w-full justify-end gap-4 max-[950px]:justify-center">
              <a href={instagram_link} className="flex items-center">
                <BsInstagram />
              </a>
              <a href={linkedin_link} className="flex items-center">
                <BsLinkedin />
              </a>
              <a href={facebook_link} className="flex items-center">
                <BsFacebook />
              </a>
              <a
                href={sb_website_link}
                className="pl-3 border-l-2 border-[#9ca3af]">
                @ieeesbcec
              </a>
            </div>
          </div>
          <div className="flex gap-3 max-[850px]:hidden">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#workshops">Workshops</a>
            <a href="#industrial visit">Industrial Visit</a>
          </div>
          <div className="flex flex-col items-start w-fit">
            <span className="flex items-start gap-2 text-sm max-[425px]:flex-wrap max-[425px]:justify-center">
              <FaPhone />
              Phone:{" "}
              <span>
                +91 8078779998 (Richa) <br />
                +91 8139887340 (Archana)
              </span>
            </span>
            <span className="flex items-center justify-center gap-3">
              <CiMail />
              Email: navira@cecieee.org
            </span>
          </div>
          {/* <p className="text-lg font-semibold font-heading">NAVIRA</p> */}
          {/* 
        <p className="text-sm font-thin">
        Copyright © 2025 - All right reserved
        </p> */}
        </footer>
        <div className="flex flex-col items-center pt-5 text-[#9ca3af]">
          <span className="w-full h-0 border border-[#9ca3af]"></span>
          <span className="pt-3">Copyright © 2025 - All right reserved</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
