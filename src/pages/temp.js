import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react"
import TempBread from "../../Components/Tempbread";

export default function Temp(){

  
  const [gotIt,setGotIt] = useState([])


  useEffect(()=>{

    const originalArray = [
      'details-background-color',
      'details-background-color_1',
      'details-background-color_2',
      'details-heading',
      'details-heading_1',
      'details-heading_2',
      'details-image',
      'details-image_1',
      'details-image_2',
      'details-paragraph',
      'details-paragraph_1',
      'details-paragraph_2'
    ];
    
    const newArray = [];
    const numbsArray = [];

    
    var r = /\d+/;

    
    const prefixes = ['details-background-color', 'details-heading', 'details-image', 'details-paragraph'];
    
    const howMuchNumbers = originalArray.map(eachElem=>{

      var s = eachElem.match(r);

      if(s){
        return Number(s[0])
      }

    }).filter(removeUnwanted=>removeUnwanted)

    let uniqueChars = [...new Set(howMuchNumbers)];

    console.log(uniqueChars);




    const seperate = uniqueChars.map(checkAvien=>{


 const mainHello = originalArray.filter(eachCheck=>eachCheck.includes(`_${checkAvien}`))
      
//  console.log(mainHello);

 return mainHello

    })

    console.log(seperate);


    const finalArray = [prefixes,...seperate]
    
    console.log(finalArray);


setGotIt(finalArray)

    
    
    // console.log(newArray);

    // setGotIt(newArray)
    
    


  },[])

    
    return (
<>


      <div>

{gotIt.map((checking,index)=>{ 




   return <div>dadasdasd</div> 

 })}



      </div>





    {/* <img src="/layslogo.png"  /> */}


      </>

        // <div className="container mx-auto">
        //   <h1 className="my-2"> Welcome To NextJS Tailwind Starter</h1>
        //   <div className="my-2">
        //     <TempBread
        //       items={[
        //         {
        //           label: 
        //             <Image src="/logo.svg" height={200} width={200} alt="home icon" />
        //           ,
        //           path: "/",
        //         },
        //         {
        //           label: "Development",
        //           path: "/courses/development",
        //         },
        //         {
        //           label: "Programming Languages",
        //           path: "/courses/development/programming-languages",
        //         },
        //         {
        //           label: "Python",
        //           path: "/topic/python",
        //         },
        //       ]}
        //     />
    
        //     <TempBread
        //       items={[
        //         {
        //           label: "Home",
        //           path: "/",
        //         },
        //         {
        //           label: "Development",
        //           path: "/courses/development",
        //         },
        //         {
        //           label: "Programming Languages",
        //           path: "/courses/development/programming-languages",
        //         },
        //         {
        //           label: "Python",
        //           path: "/topic/python",
        //         },
        //       ]}
        //     />
        //   </div>
        // </div>
      );
    

}