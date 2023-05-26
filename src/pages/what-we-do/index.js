import axios from "axios";
import Footer from "../../../Components/Footer";
import HeaderComp from "../../../Components/Header";
import { BreadCrumbs, CloneDetailsSection, CommonHeading, DetailsSection } from "../../../Components/Small";

export default function WhatWeDo({navMenu}){


    return(


        <div>


<HeaderComp navMenu={navMenu} special="What" main="we do" />


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


export const getStaticProps = async()=>{

    const navMenu =  await axios.get('https://workingrevivedigital.000webhostapp.com/wp-json/wp-api-menus/v2/menus/3').then(resp=>{
  
return resp.data.items
    
    })

    return {
        props : {
            navMenu : navMenu,
        },
    revalidate:60,

    }



}