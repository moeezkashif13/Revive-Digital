import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer(){

    return (
        <div className=" md:h-auto flex flex-col   md:space-y-0 md:flex-row md:justify-between relative bg-[#262729] py-10 md:py-14 px-5 text-white">


  <div>
    <img width={80} src="/footer-logo.svg" alt="" />
  </div>


  <div className="relative left-44 top-5 md:bottom-0 md:absolute md:top-3 md:flex md:flex-col md:justify-center    md:left-[50%]" style={{transform:'translateX(-50%)'}}>
    <p className="text-center md:text-left text-[14px]">7th Floor, Maitland House, Warrior Square, Southend on Sea, Essex, SS1 2JY</p>

<div className="space-x-5 text-center text-sm mt-1">
<Link href='/' className="underline">Terms</Link>
<Link href='/' className="underline">Privacy</Link>
</div>

  </div>




<div className="flex gap-x-4 justify-center mt-10 lg:mt-0 items-center text-2xl text-white ">


<div>
    <FaFacebookF />
  </div>

  <div>
    <FaTwitter />
  </div>


  <div>
    <FaLinkedin />
  </div>


  <div>
    <FaInstagram />
  </div>


  <div>
    <FaYoutube />
  </div>




</div>






</div>
    )

}