import { MasonryGrid } from "@egjs/react-grid";
import { useEffect } from "react";


export default function MasonryComp({gotAllWork}){

  


return (
    <div>

<MasonryGrid
    className="custom-container   "
    gap={20}
    defaultDirection={"end"}
    align={"justify"}
    column={4}
    columnSize={0}
    
    columnSizeRatio={0}
    onRenderComplete={e => {
      console.log(e);
    }}
  >
   {gotAllWork?.data?.map((eachWork,index)=>{


const getImage = gotAllWork.mediaURL[index]




    return  <div className="item relative ">

<div className="h-full w-full overflow-hidden">

<img style={{transition:'all 0.3s '}} className=" hover:scale-110 w-full max-w-full h-full object-cover object-center" src={getImage?.source_url} alt="" />


</div>

{/* <div className="absolute w-full h-1/3 bg-pink-500 bottom-0"></div> */}


{/* (index + 1) % 4 === 2) */}
<div className={`absolute bottom-5  ${(index+1)%4===1 ?'left-12':'left-5' }   `}>

    <div className="bg-primary font-medium inline px-4 py-1.5 rounded-md"  >

btmk

    </div>



    <p className="mt-2.5   font-bold text-[1.6vw]" dangerouslySetInnerHTML={{__html:eachWork?.title?.rendered}} ></p>


</div>



    </div>

   })}
  </MasonryGrid>

  </div>
)

    
}