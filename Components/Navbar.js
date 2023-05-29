import axios from "axios";
import Link from "next/link";

import { useEffect, useState } from "react";

import {FaPhoneAlt} from 'react-icons/fa'
import axiosClient from "../utils/axiosClient";

const WhoWeAreLink = ({elem,show})=>{
  return   <div  className={` ${show?'visible':'invisible'}   bg-[#ffffff] lg:bg-[#ffffffe6] flex justify-center absolute top-7 z-20 w-[250px] lg:w-[350px] px-6 py-4`} style={{transition:'all 0.3s',left:'50%',transform:'translateX(-50%)'}}  >

  <div className="flex  justify-between">
  
   <Link href={`/what-we-do/`} className="flex flex-col gap-y-2.5">
  
  
  {elem?.children?.map((main,index)=>{
    return <Link key={index} href={`/${main.object_slug}`} className="text-secondary font-medium text-[15px]">{main.title}</Link>
  })}
  
  
      </Link>
    
  </div>
  
  
  
  
  
    </div>
}


const WhatWeDoLink = ({parentTitle,checkArr,show})=>{
  
  // 
  
  // toggleIt
  return   <div  className={` ${show?'visible':'invisible'} bg-[#ffffff] lg:bg-[#ffffffe6] absolute top-7 shadow-2xl z-20  w-full lg:w-[750px] px-6 py-4  `} style={{transition:'all 0.3s',left:'50%',transform:'translateX(-50%)'}}  >

  <div className=" flex flex-wrap flex-col   lg:flex-row gap-x-5 gap-y-3  ">
  
    {checkArr.length>0?checkArr.map((eachChild,index)=>{
  
  if(eachChild){

    const checkavien = Object.keys(eachChild)
  
  
  
    return <><Link key={index} href={`/what-we-do/${eachChild.slug}`} className=" w-full text-center lg:text-left  flex flex-col gap-y-1  lg:w-[22.8%] ">

<p className="mb-2 text-lg  text-primary font-semibold">
  
{checkavien[0]}


</p>

{eachChild[checkavien[0]]?.map((main,index)=>{
  return <Link key={index} href={`/what-we-do/${eachChild.slug}/${main.slug}`} className="text-secondary font-medium text-[15px]">{main.title.rendered}</Link>
})}


    </Link>
    

   


</>


  }
  

      
    }):<div className="text-2xl capitalize text-red-500 mx-auto">error in fetchingg. Please reload the page</div>}
  </div>
  
  
  
  
  
    </div> 


  
}





export default function Navbar({navMenu,}){

    // const [navMenu,setNavMenu] = useState([]);

    // const [checkArr,setCheckArr] = useState([]);


  //   useEffect(()=>{
  
  // // axios.get(menuFetchURL).then(resp=>{
  
  // // // console.log(resp.data.items);
  
  // //   setNavMenu(resp.data.items)
  
  // // })


  // const fetchInnerWhatWeDoTax = ()=>{

  //   axiosClient.get('/services-categories?order=desc').then(resp=>{
  //     // console.log(resp.data);


  //     const gotARR = resp.data.map(eachTax=>{

  //       if(eachTax.count==0){
  //         return;
  //       }


  //       return  axiosClient.get(`/eachservice?${eachTax.taxonomy}=${eachTax.id}`).then(gotIt=>{


  //         return {
  //           [eachTax.name] :gotIt.data,
  //           slug: eachTax.slug
  //         }
  //       })

  //     });

  //      Promise.all(gotARR).then(check=>{
      
  //       // setCheckArr(check)

  //     })

      
  //   })


  // }


  // fetchInnerWhatWeDoTax()

  
  //   },[])


    
    const [showWhoWeAreLink,setShowWhoWeAreLink] = useState(false);

    const [showWhatWeDo,setShowWhatWeDo] = useState(false);




return (

    <nav   className="   flex  flex-col lg:flex-row gap-y-3 justify-between items-center capitalize  ">




<Link href='/'>

<img width={200} src="/logo.svg" alt="" />
</Link>


<div className="flex flex-col w-full lg:w-auto items-center lg:items-start lg:flex-row gap-y-3 gap-x-5 z-40 ">


{navMenu.navMenu?

navMenu.navMenu.map((elem,index)=>{


  return <div key={index} className={` flex  w-full justify-center lg:w-auto lg:justify-start  relative `}>
  
  
  
  <Link href={`/${elem.object_slug}`} className={`text-lg  font-medium  `}>
  
  <p  onMouseEnter={()=>{
  
  if(elem.title == 'What we do'){
    setShowWhatWeDo(true)
  }else{
    setShowWhatWeDo(false)
  }
  
  if(elem.title == 'Who we are'){
    setShowWhoWeAreLink(true)
  }else{
    setShowWhoWeAreLink(false)
  }
  
  }}
  >{elem.title}</p>
  
  
  {elem.title == 'Who we are'&&
  <WhoWeAreLink show={showWhoWeAreLink} elem={elem} />
  
  }
  
  
  {elem.title=='What we do'&&
  
  <WhatWeDoLink show={showWhatWeDo} parentTitle={elem.title}  checkArr={navMenu.checkArr} />
  
  }
  
  
  
  {/*
  
  {elem.title=='What we do'&&
  
  <WhatWeDoLink parentTitle={elem.title}  checkArr={checkArr} />
  
  
  } */}
  
  
  
  
  </Link>
  
  
  
  
  </div>
  })
  



:


<div className="text-red-500 text-2xl -mt-2 font-bold " style={{textTransform:'none'}}>Error in fetching navbar. Please reload the page</div>}


</div>


<div className="flex gap-x-3 items-center ">


  <div className="w-9 h-9 text-[18px] border border-white flex justify-center items-center rounded-full ">
  <FaPhoneAlt />
  </div>

  <p>01702 619 139</p>


</div>

</nav>


)

}