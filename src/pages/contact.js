import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { BreadCrumbs } from "../../Components/Small";

export default function Contact(){


return(


    <div>


<Header/>

<BreadCrumbs/>

{/*  */}
<div className="px-28 flex pb-16 pt-8">


<div className="w-1/2 text-[15px] text-[#777]">
    <p>Contact Revive Digital via email, phone or carrier pigeon. If you use the pigeon, make sure you feed it first and point it in the right direction. Our phone is answered during office hours, and our e-mails are checked a lot more than they probably should be. We look forward to hearing from you.

</p>
</div>



<div className="w-1/2 flex gap-x-4 justify-end items-center">


<div className="w-9 h-9 rounded-full bg-teal-400"></div>

<p className="text-primary font-extrabold text-[1.8rem] underline"> 01702 619 139</p>


</div>



</div>

{/*  */}



<div className="flex">


<div className="w-1/2 py-10 px-8 bg-[#fafafa]">


<p className=" font-extrabold text-2xl mb-10 text-primary">

     <span className="text-black relative"> Online  
     
     <span className="absolute w-full h-1 bg-primary -bottom-1.5 left-0"></span>
     
     
     </span> Enquiry


</p>


    <div className="pl-8 pr-4 flex flex-wrap justify-between gap-y-6 font-semibold">

    {[1,2,3,4].map(()=>{

        return <div className="w-[47%]  bg-yellow-500">

            <input type="text" className="w-full text-[#262729] placeholder:text-[#757575]  outline-none px-3 py-2 text-xl" placeholder="Name" />    


        </div>

    })}


<textarea className="w-full text-[#262729] placeholder:text-[#757575]  outline-none px-3 py-2 text-xl " rows={10}  placeholder="How can we help:" ></textarea>


captchaaa




    </div>





<div className="mt-10">

<div className="border border-primary inline rounded-lg px-8  py-2 font-semibold text-primary text-2xl">

Send
</div>

</div>





</div>








<div className="w-1/2 bg-purple-500">


asdasd


</div>



</div>




{/*  */}




<Footer/>





    </div>


)




}