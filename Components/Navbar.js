import axios from "axios";
import { useEffect, useState } from "react";

import {FaPhoneAlt} from 'react-icons/fa'


export default function Navbar(){


    const [navMenu,setNavMenu] = useState([]);

    useEffect(()=>{
  
  axios.get('http://localhost/revivedigitalbackend/wp-json/wp-api-menus/v2/menus/3').then(resp=>{
  
  
    setNavMenu(resp.data.items)
  
  })
  
  
    },[])
  

return (

    <div className=" px-4 pt-4 flex items-center justify-between">



<div>
<img width={200} src="/logo.svg" alt="" />
</div>


<div className="flex gap-x-5 z-40">

{navMenu.map(elem=>{
  console.log(elem);
  return <div className="relative">


<div className="text-lg font-medium ">{elem.title}</div>

{elem.title=='What we do'&&

  <div className=" hidden   absolute top-9 w-[800px] px-6 py-4" style={{backgroundColor:'rgba(255,255,255,0.9)',left:'50%',transform:'translateX(-50%)'}}  >

<div className="flex  justify-between">

  {elem?.children?.map(eachChild=>{
    return <div className="flex flex-col gap-y-2.5">

<p className="mb-2 text-lg text-primary font-semibold">{eachChild.title}</p>

{[1,2,3,4,5].map(()=>{
  return <p className="text-secondary font-medium text-[15px]">Google advertising</p>
})}


    </div>
  })}
</div>





  </div>


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