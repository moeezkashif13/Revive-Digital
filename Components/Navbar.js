import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

import {FaPhoneAlt} from 'react-icons/fa'

const WhoWeAreLink = ({elem})=>{
  return   <div className="    absolute top-9 w-[800px] px-6 py-4" style={{backgroundColor:'rgba(255,255,255,0.9)',left:'50%',transform:'translateX(-50%)'}}  >

  <div className="flex  justify-between">
  
  
   <Link href={`/what-we-do/`} className="flex flex-col gap-y-2.5">
  
  
  {elem?.children?.map((main)=>{
    return <Link href={`/${main.object_slug}`} className="text-secondary font-medium text-[15px]">{main.title}</Link>
  })}
  
  
      </Link>
    
  </div>
  
  
  
  
  
    </div>
}


const WhatWeDoLink = ({checkArr,})=>{
  
  
  return   <div className="    absolute top-9 w-[800px] px-6 py-4" style={{backgroundColor:'rgba(255,255,255,0.9)',left:'50%',transform:'translateX(-50%)'}}  >

  <div className="flex  justify-between">
  
    {checkArr.map(eachChild=>{
  
  
  const checkavien = Object.keys(eachChild)
  
  
  
      return <Link href={`/what-we-do/${eachChild.slug}`} className="flex flex-col gap-y-2.5">
  
  <p className="mb-2 text-lg text-primary font-semibold">
    
  {checkavien[0]}
  
  
  </p>
  
  {eachChild[checkavien[0]]?.map((main)=>{
    return <Link href={`/what-we-do/${eachChild.slug}/${main.slug}`} className="text-secondary font-medium text-[15px]">{main.title.rendered}</Link>
  })}
  
  
      </Link>
    })}
  </div>
  
  
  
  
  
    </div> 


  
}





export default function Navbar(){


    const [navMenu,setNavMenu] = useState([]);

    const [checkArr,setCheckArr] = useState([]);


    useEffect(()=>{
  
  axios.get('http://localhost/revivedigitalbackend/wp-json/wp-api-menus/v2/menus/3').then(resp=>{
  
  // console.log(resp.data.items);
  
    setNavMenu(resp.data.items)
  
  })


  const fetchInnerWhatWeDoTax = ()=>{

    axios.get('http://localhost/revivedigitalbackend/wp-json/wp/v2/custom_category?order=desc').then(resp=>{
      // console.log(resp.data);

      const gotARR = resp.data.map(eachTax=>{

        return  axios.get(`http://localhost/revivedigitalbackend/wp-json/wp/v2/inner-what-we-do?${eachTax.taxonomy}=${eachTax.id}`).then(gotIt=>{


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

    
return (

    <div className=" px-4 pt-4 flex items-center justify-between">



<div>
<img width={200} src="/logo.svg" alt="" />
</div>


<div className="flex gap-x-5 z-40">

{navMenu.map(elem=>{

  return <div className="relative ">



<Link href={`/${elem.object_slug}`} className="text-lg font-medium ">{elem.title}</Link>


{elem.title=='Who we are'&&

<WhoWeAreLink  elem={elem} />


}



{elem.title=='What we do'&&

  <WhatWeDoLink  checkArr={checkArr} />


}



  </div>
})}

</div>


<div className="flex gap-x-3 items-center">


  <div className="w-9 h-9 text-[18px] border border-white flex justify-center items-center rounded-full ">
  <FaPhoneAlt />
  </div>

  <p>01702 619 139</p>


</div>

</div>


)

}