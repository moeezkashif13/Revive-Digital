import Link from "next/link";
import Footer from "../../Components/Footer";
import HeaderComp from "../../Components/Header";
import { BreadCrumbs, CommonHeading, EachBlogCard, Quote } from "../../Components/Small";


export default function WhoWeAre(){


    return(

<div>


<HeaderComp/>


<BreadCrumbs/>


{/*  */}


<div className="flex px-28 gap-x-16 text-[15px] mt-16 mb-16">

<div className="w-1/2">

<CommonHeading   special="why" main="revive" />


<div className="flex flex-col gap-y-5">

        <p>Your website, your brand, your logo, your colours. Your letters, business cards, your packaging, your lorries, your cars. Your advertising.</p>

<p>They all make a statement about you.</p>

<p>Revive isn’t just websites, or graphics. We’re not just keywords and acronyms. We understand. We seek to learn what makes you tick, and what your customers see in you, and want from you. We visualise you, your vision and message, and we monitor, analyse and improve, constantly, consistently.</p>

<p>We’re your partner. We don’t work for you, but we do work with you. We’ll be clear – and we’ll tell you if something isn’t right. We’ll always listen, always help. We won’t try and do anything we’re not really good at. When you work with Revive, you expect excellence, clarity, and results. We deliver.

</p>


</div>


</div>




<div className="w-1/2">

<CommonHeading   special="how" main="we work" />


<div className="flex flex-col gap-y-5">

        <p>We ask a lot of questions. We produce plans. We explain why, and we don’t use jargon.

</p>

<p>We make sure you’re happy with what we are going to do, the cost, and the timescale.

</p>

<p>We communicate regularly. We select the team most suited to your project and we schedule the work or campaign. We time-track, and log everything. We present, and review, monitor, and measure.

</p>

<p>And when you are happy – we, too are happy.



</p>


</div>


</div>




</div>





{/*  */}



<div className="bg-[#FAFAFA] px-28 py-12">


<CommonHeading special="our" main="blog"  />


<div className="flex flex-wrap justify-between gap-y-8">

{[1,2,3,4,5].map(()=>{

    return <EachBlogCard/>


})}
</div>



<div className="text-right mt-7">
<Link href="/" className="font-bold underline   ">

VIew all articles

</Link>
</div>



</div>







{/*  */}



<Quote/>




{/*  */}



<div className="px-28 bg-[#FAFAFA] py-10">


<CommonHeading special="meet" main="the team" />

<div className="flex flex-wrap justify-between gap-x-4 gap-y-10">


{[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17].map(()=>{

return <div className="w-[245px]">

        <div className="w-full h-[245px] bg-green-500">

                <img className="w-full max-w-full" src="https://revive.digital/wp-content/uploads/2021/09/James-Higgs-1.jpg" alt="" />

        </div>

    <div className="px-4 py-3 font-bold bg-white">
        <p className="uppercase">Phil Thomas</p>
        <p className="text-primary">Director</p>
    </div>


</div>


})}



</div>



</div>





{/*  */}




<Footer/>



</div>


    )

}