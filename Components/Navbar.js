import axios from "axios";
import Link from "next/link";

import { useEffect, useState } from "react";

import {FaPhoneAlt} from 'react-icons/fa'
import axiosClient from "../utils/axiosClient";

const WhoWeAreLink = ({elem})=>{
  return   <div  className="  bg-[#ffffff] lg:bg-[#ffffffe6] flex justify-center absolute top-7 z-20 w-[250px] lg:w-[350px] px-6 py-4" style={{transition:'all 0.3s',left:'50%',transform:'translateX(-50%)'}}  >

  <div className="flex  justify-between">
  
   <div Link={`/what-we-do/`} className="flex flex-col gap-y-2.5">
  
  
  {elem?.children?.map((main)=>{
    return <Link href={`/${main.object_slug}`} className="text-secondary font-medium text-[15px]">{main.title}</Link>
  })}
  
  
      </div>
    
  </div>
  
  
  
  
  
    </div>
}


const WhatWeDoLink = ({parentTitle,checkArr,})=>{
  
  // 
  
  // toggleIt
  return   <div  className=" bg-[#ffffff] lg:bg-[#ffffffe6] absolute top-7 shadow-2xl z-20  w-full lg:w-[750px] px-6 py-4  " style={{transition:'all 0.3s',left:'50%',transform:'translateX(-50%)'}}  >

  <div className=" flex flex-wrap flex-col   lg:flex-row gap-x-5 gap-y-3  ">
  
    {checkArr?.map(eachChild=>{
  
  if(eachChild){

    const checkavien = Object.keys(eachChild)
  
  
  
    return <><Link href={`/what-we-do/${eachChild.slug}`} className=" w-full text-center lg:text-left  flex flex-col gap-y-1  lg:w-[22.8%] ">

<p className="mb-2 text-lg  text-primary font-semibold">
  
{checkavien[0]}


</p>

{eachChild[checkavien[0]]?.map((main)=>{
  return <Link href={`/what-we-do/${eachChild.slug}/${main.slug}`} className="text-secondary font-medium text-[15px]">{main.title.rendered}</Link>
})}


    </Link>
    

   


</>


  }
  

      
    })}
  </div>
  
  
  
  
  
    </div> 


  
}





export default function Navbar({navMenu}){


    // const [navMenu,setNavMenu] = useState([]);

    const [checkArr,setCheckArr] = useState([]);


    useEffect(()=>{
  
  // axios.get(menuFetchURL).then(resp=>{
  
  // // console.log(resp.data.items);
  
  //   setNavMenu(resp.data.items)
  
  // })


  const fetchInnerWhatWeDoTax = ()=>{

    axiosClient.get('/services-categories?order=desc').then(resp=>{
      // console.log(resp.data);


      const gotARR = resp.data.map(eachTax=>{

        if(eachTax.count==0){
          return;
        }


        return  axiosClient.get(`/eachservice?${eachTax.taxonomy}=${eachTax.id}`).then(gotIt=>{


          return {
            [eachTax.name] :gotIt.data,
            slug: eachTax.slug
          }
        })

      });

       Promise.all(gotARR).then(check=>{
      
        setCheckArr(check)

      })
      

      // console.log(gotARR);



    })


  }


  fetchInnerWhatWeDoTax()

  
    },[])


    
    const [showWhoWeAreLink,setShowWhoWeAreLink] = useState(false);

    const [showWhatWeDo,setShowWhatWeDo] = useState(false);




return (

    <div className="   flex  flex-col lg:flex-row gap-y-3 justify-between items-center capitalize  ">




<Link href='/'>

<img width={200} src="/logo.svg" alt="" />
</Link>


<div className="flex flex-col w-full lg:w-auto items-center lg:items-start lg:flex-row gap-y-3 gap-x-5 z-40 ">


{navMenu.map(elem=>{

  return <div className={` flex  w-full justify-center lg:w-auto lg:justify-start  relative `}>



<Link href={`/${elem.object_slug}`} className={`text-lg  font-medium  `}>
  
<p  onMouseEnter={(event)=>{


if(event.target.innerText=='Who We Are'){
  
  setShowWhoWeAreLink(true)
}else{
  setShowWhoWeAreLink(false)

}


if(event.target.innerText=='What We Do'){
  
  setShowWhatWeDo(true)
}else{
  setShowWhatWeDo(false)

}



}}  >{elem.title}</p>


 {(showWhoWeAreLink&&elem.title=='Who we are')&&

<WhoWeAreLink  elem={elem} />

}

{(showWhatWeDo&&elem.title == 'What we do')&&

<WhatWeDoLink parentTitle={elem.title}  checkArr={checkArr} />


}




{/*

{elem.title=='What we do'&&

  <WhatWeDoLink parentTitle={elem.title}  checkArr={checkArr} />


} */}



  
  </Link>




  </div>
})}

</div>


<div className="flex gap-x-3 items-center ">


  <div className="w-9 h-9 text-[18px] border border-white flex justify-center items-center rounded-full ">
  <FaPhoneAlt />
  </div>

  <p>01702 619 139</p>


</div>

</div>


)

}