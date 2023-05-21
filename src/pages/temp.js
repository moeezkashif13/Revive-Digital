import Image from "next/image";
import { useEffect } from "react"
import TempBread from "../../Components/Tempbread";

export default function Temp(){

    const arr = 'google'

    

    return (
        <div className="container mx-auto">
          <h1 className="my-2"> Welcome To NextJS Tailwind Starter</h1>
          <div className="my-2">
            <TempBread
              items={[
                {
                  label: 
                    <Image src="/logo.svg" height={200} width={200} alt="home icon" />
                  ,
                  path: "/",
                },
                {
                  label: "Development",
                  path: "/courses/development",
                },
                {
                  label: "Programming Languages",
                  path: "/courses/development/programming-languages",
                },
                {
                  label: "Python",
                  path: "/topic/python",
                },
              ]}
            />
    
            <TempBread
              items={[
                {
                  label: "Home",
                  path: "/",
                },
                {
                  label: "Development",
                  path: "/courses/development",
                },
                {
                  label: "Programming Languages",
                  path: "/courses/development/programming-languages",
                },
                {
                  label: "Python",
                  path: "/topic/python",
                },
              ]}
            />
          </div>
        </div>
      );
    

}