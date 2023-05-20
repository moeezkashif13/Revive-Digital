import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { BreadCrumbs } from "../../Components/Small";

export default function OurClients(){


    return(

        
        <div>


<Header  text="our clients"  />


<BreadCrumbs/>



<div className="px-8 py-12 bg-[#fafafa] flex flex-wrap   gap-[1.78rem] ">


{[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22].map(()=>{
    return <div className="w-[190px]  h-[120px] bg-white flex items-center">

        <img className="w-full max-w-full  object-cover" src="https://revive.digital/wp-content/uploads/2017/10/rossi.jpg" alt="" />

    </div>
})}


</div>







<Footer/>




        </div>




    )


}