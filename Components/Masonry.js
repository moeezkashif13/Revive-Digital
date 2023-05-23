import { MasonryGrid } from "@egjs/react-grid";


export default function MasonryComp({gotAllWork}){
console.log(gotAllWork);
return (
    <div>

<MasonryGrid
    className="custom-container "
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
   {gotAllWork.map((eachWork,index)=>{



    return  <div className="item relative ">

<div className="h-full w-full overflow-hidden">

<img style={{transition:'all 0.3s '}} className=" hover:scale-110 w-full max-w-full h-full object-cover" src="https://revive.digital/wp-content/uploads/2017/08/ku-kitchens-1-768x768.jpg" alt="" />


</div>

{/* <div className="absolute w-full h-1/3 bg-pink-500 bottom-0"></div> */}


{/* (index + 1) % 4 === 2) */}
<div className={`absolute bottom-5  ${(index+1)%4===1 ?'left-12':'left-5' }   `}>

    <div className="bg-primary font-medium inline  py-1.5 rounded-md"  dangerouslySetInnerHTML={{__html:eachWork?.excerpt.rendered}}>



    </div>



    <p className="mt-2.5   font-bold text-[1.6vw]" dangerouslySetInnerHTML={{__html:eachWork?.title?.rendered}} ></p>


</div>



    </div>

   })}
  </MasonryGrid>

  </div>
)

    
}