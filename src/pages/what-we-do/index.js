import Footer from "../../../Components/Footer";
import HeaderComp from "../../../Components/Header";
import { BreadCrumbs, CloneDetailsSection, CommonHeading, DetailsSection } from "../../../Components/Small";

export default function WhatWeDo(){


    return(


        <div>


<HeaderComp special="What" main="we do" />


<BreadCrumbs/>



<div>


{[1,2,3,4,5].map((elem,index)=>{

return <CloneDetailsSection noFindOut={index==0&&true} reverse={index%2==0&&true}  />

})}



</div>






<Footer/>




        </div>



    )


}