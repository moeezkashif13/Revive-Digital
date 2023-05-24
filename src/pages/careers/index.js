import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../../../Components/Footer";
import HeaderComp from "../../../Components/Header";
import TempBread from "../../../Components/Tempbread";

export default function Careers({breadcrumbs,allCareers}){


  const router = useRouter();

console.log(router);


    const splittedName = router.pathname.split('/')[1].split('-').join(' ')


    
const db = [
{
  "slug": "learn-python",
  "courseTitle": "Learn Python: Python for Beginners",
  "breadcrumbs": [
    {
      "text": "Home",
      "url": "/"
    },
    {
      "text": splittedName,
      "url": "/careers"
    },
 
  ]
}
]


const slug = 'learn-python';
// simulate a call to the backend server here to get the data
const data = db.find((page) => page.slug === slug);
if (!data) {
return {
  notFound: true,
};
}


 const breadCrumbsData = data.breadcrumbs.map((c) => {
        return {
          label: c.text,
          path: c.url,
        };
      })
  




    return(


        <div >


<HeaderComp  text="Careers" />


<TempBread items={breadCrumbsData} />



<div  className="px-common py-10 space-y-8 text-primary">


{allCareers?allCareers.map((eachcareer)=>{


    return <div style={{transition:'all 0.4s'}} className="hover:shadow-lg flex px-8 border py-9 rounded-lg">

        <Link href={`/careers/${eachcareer.slug}`} className="font-bold text-xl underline ">{eachcareer?.title?.rendered}</Link>

<Link href={`/careers/${eachcareer.slug}`} className="ml-auto font-semibold border border-primary rounded-3xl px-6 py-1.5">
    View Details
</Link>



    </div>
}):<div className="text-center text-3xl font-semibold">No careers available</div>}



</div>






<Footer/>




        </div>



    )


}



export const getStaticProps = async()=>{


const allCareers =  await axios.get('http://localhost/revivedigitalbackend/wp-json/wp/v2/careers').then(resp=>{
  return resp.data
}).catch(err=>{
  return false;
})



    return{
        props:{
    
    allCareers: allCareers,
            
            
    
    
        }
    }


}