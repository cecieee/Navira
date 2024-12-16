import Logo from "../../assets/Logos/logo.png"
import { FaFacebook,FaInstagram, FaWhatsapp,FaPhone} from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function Footer() {
  return (
    <>
      <footer className="w-screen h-fit bg-dark flex justify-center flex-col items-center text-[#9ca3af] p-3">
        <img src={Logo} alt="" className="w-24 pt-8 pb-5"/>
        {/* <p className="text-lg font-semibold font-heading">NAVIRA</p> */}
        <span className="flex items-center gap-2 text-sm max-[425px]:flex-wrap max-[425px]:justify-center"><FaPhone />Phone: +919249986650<CiMail />Email: navira@cecieee.org</span>

        <p className="text-sm font-thin">Copyright © 2025 - All right reserved</p>
        <div className="flex gap-2 p-5">
          <FaFacebook  className="text-2xl hover:text-[#0866ff] cursor-pointer"/>
          <FaInstagram className="text-2xl hover:text-[#E1306C] cursor-pointer"/>
          <FaWhatsapp  className="text-2xl hover:text-[#128c7e] cursor-pointer"/>
        </div>
      </footer>
    </>
  )
}

export default Footer
