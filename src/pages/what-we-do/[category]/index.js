import Link from "next/link";
import Footer from "../../../../Components/Footer";
import HeaderComp from "../../../../Components/Header";
import { BreadCrumbs, CommonHeading, DetailsSection } from "../../../../Components/Small";

export default function WhatWeDoEachCategory(){

return (

            <div>

<HeaderComp special="website" main="design" /> 


<BreadCrumbs/>


{/*  */}
<div className="px-28 py-10  bg-[#FAFAFA]">


<CommonHeading special="website" main="design services" />



<div className="flex flex-wrap justify-between gap-y-8 mt-10">
{[1,2,3,4,5,6].map(()=>{

    return <div className="w-[255px] bg-white">

            <div className="w-full h-[160px] bg-orange-500">
                
                <img className="w-full max-w-full  h-full object-cover" src="https://revive.digital/wp-content/uploads/2017/07/e-commerce-2.jpg" alt="" />


            </div>

    <div className="px-4 py-4 space-y-4">

<p className="font-bold underline">BESPOKE SYSTEMS</p>

<p className="text-[15px]">If you have a (software) problem, if no one else can help, and if you can find them, maybe you can hire Revive’s tech team.</p>


<div>
    <Link style={{transition:'all 0.3s'}} className="hover:bg-primary hover:text-white hover:no-underline  border border-primary text-primary font-medium px-5 py-1 rounded-2xl" href="/">Read More</Link>
</div>




    </div>



    </div>


})}


</div>
</div>

{/*  */}



<div>


{[1,2,3,4,5].map((elem,index)=>{
    return <DetailsSection reverse={index%2!=0&&true}  />
})}


</div>





{/*  */}



<Footer/>






                </div>




)

}