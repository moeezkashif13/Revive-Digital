import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react"
import TempBread from "../../Components/Tempbread";

export default function Temp(){

    
  useEffect(()=>{

    const funcTest = async()=>{

      try {
          await     axios.get('http://localhost/reviveeeedigitalbackend/wp-json/wp/v2/eachservice?slug=bespoke-systemsssssssssssss').then(resp=>{
            console.log(resp.data);

            if(resp.data.length==0){

              throw new Error('ERROR AA GYAAA')
              
            }

          }).catch(err=>{
            console.log(err);
          })



          setTimeout(() => {
              throw new Error('yahann b aagyaa')
          }, 5000);



      } catch (error) {
          console.log(error,'errorrrr fromm tryyyy catchhh blockkk');
      }
      
    }

    funcTest()



  },[])

    
    return (
<>

sdadasd


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