import axios from "axios";
import { useEffect } from "react";
import Footer from "../../Components/Footer";
import HeaderComp from "../../Components/Header";


import TempBread from "../../Components/Tempbread";
import axiosClient, { menuFetchURL } from "../../utils/axiosClient";
import fetchWholeNavbar from "../../utils/fetchWholeNavbar";

export default function Contact({navMenu}){

        // TEMPPPPPPPPPPPPPP


const db = [
    {
      "slug": "learn-python",
      "courseTitle": "Learn Python: Python for Beginners",
      "breadcrumbs": [
        {
          "text": "Home",
          "url": "/"
        },
        {
          "text": "Contact",
          "url": "/contact"
        },
     
      ]
    }
  ]


  const slug = 'learn-python';
  // simulate a call to the backend server here to get the data
  const data = db.find((page) => page.slug === slug);
  if (!data) {
    return {
      notFound: true,
    };
  }

// TEMPPPPPPPP

const breadCrumbsData = data.breadcrumbs.map((c) => {
    return {
      label: c.text,
      path: c.url,
    };
  })


return(


    <div>


<HeaderComp navMenu={navMenu} text="Contact"  />

{/* <BreadCrumbs/> */}

<TempBread items={breadCrumbsData} />




{/*  */}
<div className="px-mobilePadding md:px-tabletPadding lg:px-desktopPadding flex flex-col lg:flex-row gap-y-4 pb-8 lg:pb-16 pt-0 lg:pt-8">


<div className="w-full lg:w-1/2 text-[15px] text-[#777]">
    <p>Contact Revive Digital via email, phone or carrier pigeon. If you use the pigeon, make sure you feed it first and point it in the right direction. Our phone is answered during office hours, and our e-mails are checked a lot more than they probably should be. We look forward to hearing from you.

</p>
</div>



<div className="w-full lg:w-1/2 flex gap-x-4 justify-center lg:justify-end items-center">


<div className="w-9 h-9 rounded-full bg-teal-400"></div>

<p className="text-primary font-extrabold text-[1.8rem] underline"> 01702 619 139</p>


</div>



</div>

{/*  */}



<div className="flex flex-col lg:flex-row">


<div className="w-full lg:w-1/2 py-6 lg:py-10 px-mobilePadding lg:px-8 bg-[#fafafa]">


<p className=" font-extrabold text-2xl mb-10 text-primary">

     <span className="text-black relative"> Online  
     
     <span className="absolute w-full h-1 bg-primary -bottom-1.5 left-0"></span>
     
     
     </span> Enquiry


</p>


    <div className="pl-4 lg:pl-8 pr-4 flex flex-col lg:flex-row flex-wrap justify-between gap-y-6 font-semibold">

    {[1,2,3,4].map((elem,index)=>{

        return <div key={index} className="w-full lg:w-[47%]  bg-yellow-500">

            <input type="text" className="w-full text-[#262729] placeholder:text-[#757575]  outline-none px-3 py-2 text-xl" placeholder="Name" />    


        </div>

    })}


<textarea className="w-full text-[#262729] placeholder:text-[#757575]  outline-none px-3 py-2 text-xl " rows={10}  placeholder="How can we help:" ></textarea>


captchaaa



    </div>





<div className="mt-6 mb-3 lg:mb-0 lg:mt-10">

<div className="border border-primary inline rounded-lg px-8  py-2 font-semibold text-primary text-2xl">

Send
</div>

</div>





</div>



<div className="w-full lg:w-1/2 h-[450px] lg:h-auto ">


<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.684340008343!2d67.03697217461504!3d24.87462844469191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e5e736977c1%3A0x70ed36c8a6891d3a!2sMazar-e-Quaid!5e0!3m2!1sen!2s!4v1684529304405!5m2!1sen!2s"  style={{border:'none',width:'100%',height:'100%'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>



</div>



</div>




{/*  */}




<Footer/>





    </div>


)




}



export const getStaticProps = async()=>{

const navMenu = await fetchWholeNavbar()


    return{
      props : {
        navMenu : navMenu

        

      }
    }


}