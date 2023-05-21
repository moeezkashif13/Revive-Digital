import Footer from "../../../../../Components/Footer";
import HeaderComp from "../../../../../Components/Header";
import { BreadCrumbs, CommonHeading, DetailsSection } from "../../../../../Components/Small";

export default function Check(){

    return(
        <div>
            

<HeaderComp anotherAppearance={true}   />


<BreadCrumbs/>


<DetailsSection   secondType={true}  />



{/*  */}


<div className="py-14">


<p className="text-center mb-12 text-[#262729] font-semibold text-3xl">Fabulous clients we work with</p>

<div className="px-28 flex flex-wrap justify-between gap">
    

    {[1,2,3,4,5,6].map(()=>{
        return <div className="w-[200px] h-[125px] bg-pink-500">

            <img className="w-full max-w-full object-cover h-full" src="https://revive.digital/wp-content/uploads/2017/10/diageo.jpg" alt="" />

        </div>
    })}


</div>




</div>





{/*  */}


<DetailsSection  secondType={true} reverse={true} />




{/*  */}


<div className="my-4">


<div className="bg-[#262729] text-white py-8 text-center">


<p className="text-2xl font-medium">What do our clients say</p>


<p className="px-32 text-primary my-4 text-2xl font-medium leading-[2.3rem]">"I have been using Revive since 2005 for our website builds and digital marketing. Not only do they build excellent websites with reliable back end technology they know how to get the best out of e-marketing. A team of experts who have the experience and knowledge to make your website and marketing work."</p>


<p className="font-bold">Ian Banks</p>


</div>

</div>



{/*  */}


<div className="mb-4 flex gap-x-4 px-4">


<div className="bg-green-300 w-[390px] min-w-[390px]">

        <img className="w-full max-h-full h-full object-cover" src="https://revive.digital/wp-content/uploads/2017/07/e-commerce-websites-contact.jpg" alt="" />


</div>



<div className="bg-[#FAFAFA]   space-y-6 py-28 pl-20 pr-12">
    

<CommonHeading  special="contact" main="" />


<p className="text-[#777777] ">Sound appealing? If you’re in need of a new ecommerce site, the Revive team can help. Simply fill out the contact form and specify your request, and one of our team will be in contact to discuss your new shopping site.</p>


<div className="px-6 flex flex-wrap justify-between  gap-y-4">


{['Name','Email','Phone'].map((elem)=>{

    return <div className="w-[230px] ">

        <label htmlFor={elem}  className="font-semibold" >{elem}:*</label>

        <input type="text"  placeholder={elem} className="font-semibold bg-white px-3 py-1.5 outline-none text-lg w-full" name={elem} id={elem} />
    </div>
})}


<div className="w-full ">

        <label htmlFor="message"  className="font-semibold" >Message / Comments:*</label>

        <textarea rows={8}  placeholder="Enter message" className="font-semibold bg-white px-3 py-1.5 outline-none text-lg w-full" name="message" id="message" />



    </div>



<div>

<p>CAPTCHA</p>

<div className="w-[300px] h-[100px] bg-purple-500"></div>


</div>






</div>




<div className="pt-3">
<div style={{transition:'all 0.3s'}} className="hover:bg-primary hover:text-white   border-primary text-xl text-primary inline font-semibold border px-6 cursor-pointer py-2 rounded-3xl">Submit</div>
</div>




</div>




</div>






{/*  */}



<Footer/>






        </div>
    )

}