import Link from "next/link";
import Footer from "../../../Components/Footer";
import HeaderComp from "../../../Components/Header";
import TempBread from "../../../Components/Tempbread";

export default function Careers({breadcrumbs}){


    const breadCrumbsData = breadcrumbs.map((c) => {
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


{[1,2,3].map((elem)=>{


    return <div style={{transition:'all 0.4s'}} className="hover:shadow-lg flex px-8 border py-9 rounded-lg">

        <Link href="/careers/eachcareer" className="font-bold text-xl underline ">Graduate Web Developer Role</Link>

<Link href="/careers/eachcareer" className="ml-auto font-semibold border border-primary rounded-3xl px-6 py-1.5">
    View Details
</Link>



    </div>
})}



</div>






<Footer/>




        </div>



    )


}



export const getServerSideProps = async(context)=>{


    // TEMPPPPPPPPPPPPPP

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
          "text": "Careers",
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

// TEMPPPPPPPP



    return{
        props:{
    
    
    // TEMPPPPPPPP
    
            breadcrumbs: data.breadcrumbs,
            courseTitle: data.courseTitle,
    // TEMPPPPPPPP
    
    
    
        }
    }


}