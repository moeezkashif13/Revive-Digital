import Link from "next/link";
import Footer from "../../../Components/Footer";
import HeaderComp from "../../../Components/Header";

export default function Careers(){


    return(


        <div >


<HeaderComp/>


<div  className="px-common py-10 space-y-8 text-primary">


{[1,2,3].map((elem)=>{


    return <div style={{transition:'all 0.4s'}} className="hover:shadow-lg flex px-8 border py-9 rounded-lg">

        <Link href="#!" className="font-bold text-xl underline ">Graduate Web Developer Role</Link>

<Link href="/" className="ml-auto font-semibold border border-primary rounded-3xl px-6 py-1.5">
    View Details
</Link>



    </div>
})}



</div>






<Footer/>




        </div>



    )


}