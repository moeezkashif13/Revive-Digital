import axios from "axios";
import Link from "next/link";

import { useEffect, useState } from "react";

import {FaPhoneAlt} from 'react-icons/fa'

const WhoWeAreLink = ({elem})=>{
  return   <div  className="  whoweareelem visible opacity-100 toggleIt  flex justify-center absolute top-9 w-[350px] px-6 py-4" style={{transition:'all 0.3s',backgroundColor:'rgba(255,255,255,0.9)',left:'50%',transform:'translateX(-50%)'}}  >

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
  return   <div  className="whatwedomainelem   visible opacity-100  absolute top-9 shadow-2xl w-[750px] px-6 py-4  " style={{transition:'all 0.3s',backgroundColor:'rgba(255,255,255,0.9)',left:'50%',transform:'translateX(-50%)'}}  >

  <div className=" flex flex-wrap gap-x-5 gap-y-3  ">
  
    {checkArr?.map(eachChild=>{
  
  if(eachChild){

    const checkavien = Object.keys(eachChild)
  
  
  
    return <><Link href={`/what-we-do/${eachChild.slug}`} className="flex flex-col gap-y-1  w-[22.8%] ">

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





export default function Navbar(){


    const [navMenu,setNavMenu] = useState([]);

    const [checkArr,setCheckArr] = useState([]);


    useEffect(()=>{
  
  axios.get('http://localhost/revivedigitalbackend/wp-json/wp-api-menus/v2/menus/3').then(resp=>{
  
  // console.log(resp.data.items);
  
    setNavMenu(resp.data.items)
  
  })


  const fetchInnerWhatWeDoTax = ()=>{

    axios.get('http://localhost/revivedigitalbackend/wp-json/wp/v2/services-categories?order=desc').then(resp=>{
      // console.log(resp.data);

      console.log(resp.data);

      const gotARR = resp.data.map(eachTax=>{

        if(eachTax.count==0){
          return;
        }


        return  axios.get(`http://localhost/revivedigitalbackend/wp-json/wp/v2/eachservice?${eachTax.taxonomy}=${eachTax.id}`).then(gotIt=>{


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


    
useEffect(()=>{

  const mainEventWhatWeDo = (event)=>{

    event.stopPropagation()

    const mainElem = document.querySelector('.whatwedomainelem')
mainElem.classList.toggle('toggleIt')

  }

  const mainEventWhoWeAre = (event)=>{

    event.stopPropagation()

    const mainElem = document.querySelector('.whoweareelem')
mainElem.classList.toggle('toggleIt')

  }



  // document.querySelector('.whatwedoclass')?.addEventListener('mouseenter',mainEventWhatWeDo,)

  // document.querySelector('.whoweareclass')?.addEventListener('mouseenter',mainEventWhoWeAre,)

  
  

  return()=>{
    // document.querySelector('.whatwedoclass')?.removeEventListener('mouseleave',mainEventWhatWeDo)
  // 
  // document.querySelector('.whoweareclass')?.removeEventListener('mouseleave',mainEventWhoWeAre,)

    
  }



},[navMenu.length])




return (

    <div className="   flex  justify-between items-center   ">




<Link href='/'>

<img width={200} src="/logo.svg" alt="" />
</Link>


<div className="flex gap-x-5 z-40 ">


{navMenu.map(elem=>{

  return <div className={` flex   relative ${elem.title=='What we do'?'whatwedoclass':''} ${elem.title=='Who we are'?'whoweareclass':''} `}>



<Link href={`/${elem.object_slug}`} className={`text-lg font-medium  `}>
  
<p>{elem.title}</p>


{elem.title=='Who we are'&&

<WhoWeAreLink  elem={elem} />


}



{elem.title=='What we do'&&

  <WhatWeDoLink parentTitle={elem.title}  checkArr={checkArr} />


}



  
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