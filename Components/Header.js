import Navbar from "./Navbar";

export default function HeaderComp(){
    return (
        <div className="h-[280px]  relative ">
      
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


  
  
  <div className=" h-1/2  z-20 bottom-4 text-4xl font-extrabold  absolute  left-28   w-[65%] flex flex-col justify-center" > 
  
  <p>
<span className='relative'>
        
Our

<span className='absolute left-0 -bottom-1 bg-white w-full h-1'></span>
    
    
    </span>  Work
  
    </p>
  
  </div>
  
  
  
  </div>
  
  
  
  
  
  
  
  </div>
  
  
  
      </div>
    )
}