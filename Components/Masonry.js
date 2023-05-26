import { MasonryGrid } from "@egjs/react-grid";
import { useEffect, useState } from "react";


export default function MasonryComp({gotAllWork}){


    const [columnsCount,setColumnsCount]  = useState(0);

    useEffect(()=>{

        console.log(window.innerWidth);

        window.innerWidth>1000?setColumnsCount(3):setColumnsCount(1);


    },[])
    

    
return (
    <div>

<MasonryGrid
    className="custom-container   "
    gap={20}
    defaultDirection={"end"}
    align={"justify"}
    column={columnsCount}
    columnSize={0}
    
    columnSizeRatio={0}
    // onRenderComplete={e => {
    //   console.log(e);
    // }}
  >
   {gotAllWork?.data?.map((eachWork,index)=>{



const getImage = gotAllWork?.mediaURL[index]




    return  <div className="w-full lg:w-[25%] item relative ">

<div className="h-full w-full overflow-hidden">

<img style={{transition:'all 0.3s '}} className=" hover:scale-110 w-full max-w-full h-full object-cover object-center" src={getImage?.source_url} alt="" />


</div>

{/* <div className="absolute w-full h-1/3 bg-pink-500 bottom-0"></div> */}


{/* (index + 1) % 4 === 2) */}
<div className={`absolute bottom-5  ${(index+1)%4===1 ?'left-3 lg:left-12':'left-3 lg:left-5' }   `}>

    <div className="bg-primary font-medium inline px-4 py-1.5 rounded-md"  >

btmkdddddd

    </div>



    <p className="mt-2.5   font-bold text-[5vw] lg:text-[1.6vw]" dangerouslySetInnerHTML={{__html:eachWork?.excerpt?.rendered}} ></p>


</div>



    </div>

   })}
  </MasonryGrid>

  </div>
)

    
}