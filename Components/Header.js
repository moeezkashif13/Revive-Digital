import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";




export default function HeaderComp({specialAppearanceFields,text,special="our", main="work",
anotherAppearance}){
    

  const splittingText = ()=>{

    if(text){



      
      const splitText = text.split(" ");

    
      const getFirstWord = splitText.shift();

      console.log(getFirstWord);

      const joiningRemainingWords = splitText.join(" ")
      console.log(joiningRemainingWords);

return {getFirstWord,joiningRemainingWords}

}


  }

  
const mainString = splittingText()


  
  return (
        <div className="h-[380px]  relative capitalize ">
      
      <div className="absolute text-white top-5 left-0 w-full px-2  z-20 ">
        
      <Navbar/>  





      </div>



      <div className="bg-purple-500 h-full heroSectVideoDiv">
  
      <video width="100%" height="100%"  autoPlay loop muted playsinline>
  <source src="/intro.mp4" type="video/mp4" />
  </video>
  
      </div>
  
  
  
  
  <div className="absolute top-4 pl-4 h-full frontDiv w-full text-white" >
    
  <div className="h-full relative " style={{backgroundColor:'rgba(0,0,0,0.7)'}}>


  {/* NAVBARR STARTT */}




  {/* NAVBARR ENDDD */}

{anotherAppearance


?


<div className=" h-full  z-20    absolute -bottom-3  w-full flex flex-col justify-center items-center gap-y-4" > 


<p className="text-5xl font-medium">{specialAppearanceFields?.['each-service-header']}</p>
{/* {specialAppearanceFields?.['each-service-paragraph']} */}
<p className="font-semibold text-xl w-1/2 ">{specialAppearanceFields?.['each-service-paragraph']} </p>


<div className="flex gap-x-6 font-semibold text-white text-lg">

  <Link style={{transition:'all 0.3s'}} href="/our-work" className="hover:bg-white hover:text-black border px-7 py-2 rounded-3xl ">View Portfolio</Link>


  <Link style={{transition:'all 0.3s'}} href="/contact" className="hover:bg-white hover:text-black border px-7 py-2 rounded-3xl ">Get a Quote</Link>

</div>



</div>



:
  
  
  <div className=" h-1/2  z-20 bottom-4 text-4xl font-extrabold  absolute  left-28   w-[65%] flex flex-col justify-center" > 
  
  <p>
<span className='relative '>


{mainString?<span>{mainString.getFirstWord}</span>: <span> {special}</span>}

<span className='absolute left-0 -bottom-1 bg-white w-full h-1'></span>
    
    
    </span>  
    
    {mainString?<span className="ml-3">{mainString.joiningRemainingWords}</span>: <span> {main}</span>}
  
    </p>
  
  </div>
  
}
  
  </div>
  
  
  
  
  
  
  
  
  </div>
  
  
  
      </div>
    )
}