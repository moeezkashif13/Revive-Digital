import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { BreadCrumbs } from "../../Components/Small";
import TempBread from "../../Components/Tempbread";

export default function OurClients({breadcrumbs,splittedName}){

    const breadCrumbsData = breadcrumbs.map((c) => {
        return {
          label: c.text,
          path: c.url,
        };
      })


    return(

        
        <div>


<Header  text={splittedName}  />


<TempBread items={breadCrumbsData} />


<div className="px-8 py-12 bg-[#fafafa] flex flex-wrap   gap-[1.78rem] ">


{[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22].map(()=>{
    return <div className="w-[190px]  h-[120px] bg-white flex items-center">

        <img className="w-full max-w-full  object-cover" src="https://revive.digital/wp-content/uploads/2017/10/rossi.jpg" alt="" />

    </div>
})}


</div>







<Footer/>




        </div>




    )


}



export const getServerSideProps = async (context)=>{


    // TEMPPPPPPPPPPPPPP

    const splittedName = context.resolvedUrl.split('/')[1].split('-').join(' ')



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

// TEMPPPPPPPP



return{
    props:{


// TEMPPPPPPPP
splittedName: splittedName,
        breadcrumbs: data.breadcrumbs,
        courseTitle: data.courseTitle,
// TEMPPPPPPPP



    }
}


}