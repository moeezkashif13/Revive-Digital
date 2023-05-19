import axios from "axios"
import Link from "next/link";
import { useEffect, useState } from "react"


import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import MasonryComp from "../../Components/Masonry";




export default function Home() {





  return (

<div>

{/* FIRSTTT SECTIONNN STARTT */}
    <div className="h-[550px]  relative ">
      
    <div className="bg-purple-500 h-full heroSectVideoDiv">

    <video width="100%" height="100%"  autoPlay loop muted playsinline>
<source src="/intro.mp4" type="video/mp4" />
</video>

    </div>




<div className="absolute top-4 pl-4 h-full frontDiv w-full text-white" >
  
<div className="h-full" style={{backgroundColor:'rgba(0,0,0,0.7)'}}>


{/* NAVBARR STARTT */}

<Navbar/>

{/* NAVBARR ENDDD */}




<div className=" h-full  z-20  absolute bottom-0 w-[65%] flex flex-col justify-center" style={{left:'50%',transform:'translateX(-50%)'}}> 


<h1 className="text-[4.2rem] font-semibold leading-[5.5rem] ">

  <span className="text-primary">WE</span>
<span> help you get more leads through Digital Marketing</span>
</h1>


<div className="flex gap-x-7 mt-7 font-medium">


<Link href="/" className="border  px-6 py-1 rounded-2xl">Who we are</Link>
<Link href="/" className="border  px-6 py-1 rounded-2xl">Our work</Link>



</div>



</div>



</div>







</div>



    </div>


{/* FIRSTT SECTIONN ENDDDD */}


{/* MASONRY START */}


<div className="py-8">


<div className="mb-10 ml-28">
  <CommonHeading/>
</div>



<MasonryComp/>






  </div>




{/* MASONRY END */}









<div>

{[1,2,3,4].map((elem,index)=>{

return <div className={`flex  ${index%2!=0&&'flex-row-reverse'} `}>

<div className="w-1/2 px-24 py-10">


<CommonHeading   special="full"   main="service digital marketing agency"  />  



<div className="text-[15px] flex flex-col gap-y-5">
  <p>Revive Digital is a full-service digital marketing agency based in Essex that specialises in search engine marketing and web design. We’re the digital marketing agency for some of the most discerning clients across London, locally in the South East and nationally too. They come to us for unmistakeable branding, awesome websites, powerfully effective marketing strategies, share-worthy social media, brilliant videos and fabulous apps.</p>

<p>We’re not just an agency; we’re inventors, we’re creative and digital engineers.</p>


<p>With us you’ll find a team of professionals, each one passionate about their field. They listen, they help. They’ll be honest if something isn’t right for you or could be done better. They monitor, analyse and improve… constantly and consistently.</p>

<p>Because at Revive.Digital we want people to be moved to action by your marketing. Not just see it.</p>


</div>

</div>





<div className="w-1/2 bg-gray-500">



  <img className="w-full h-full object-cover max-w-full" src="https://revive.digital/wp-content/uploads/2017/06/digital-marketing-agency.jpg" alt="" />

</div>


</div>


})}

</div>







{/* FOOTER START */}

<Footer/>


{/* FOOTERR ENDDD */}









</div>


  )
}
