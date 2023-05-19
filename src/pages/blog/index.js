import Footer from "../../../Components/Footer";
import HeaderComp from "../../../Components/Header";
import { BreadCrumbs, EachBlogCard } from "../../../Components/Small";

export default function Blog(){


    return(

        
        <div>


<HeaderComp/>

<BreadCrumbs/>


<div className="px-28  pt-10 pb-20 bg-[#FAFAFA] flex flex-wrap justify-between gap-y-8">


{[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map(()=>{
    return <EachBlogCard/>
})}



</div>




<div className="flex justify-center gap-x-5 py-5 font-semibold ">

{[1,2,3,4,5].map(elem=>{
    return <div className="border border-primary text-primary underline px-3 py-1 ">{elem}</div>
})}


<div className="border border-primary text-primary px-3 py-1 ">...</div>

<div className="border border-primary text-primary px-3 py-1 underline ">Last</div>




</div>


<Footer/>



        </div>





    )


}