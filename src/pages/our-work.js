import { FaHome } from "react-icons/fa";
import Footer from "../../Components/Footer";
import HeaderComp from "../../Components/Header";
import Header from "../../Components/Header";
import MasonryComp from "../../Components/Masonry";
import Navbar from "../../Components/Navbar";
import { BreadCrumbs } from "../../Components/Small";
import TempBread from "../../Components/Tempbread";



export default function OurWork({breadcrumbs,splittedName}){

    const breadCrumbsData = breadcrumbs.map((c) => {
        return {
          label: c.text,
          path: c.url,
        };
      })



    return(

<div>

{/* HEADERRRRR STARTTT */}


<HeaderComp  text={splittedName} />



{/* HEADERRRRR ENDDD */}


<TempBread items={breadCrumbsData} />




<div className="mb-6">
<MasonryComp/>
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
splittedName:splittedName,
        breadcrumbs: data.breadcrumbs,
        courseTitle: data.courseTitle,
// TEMPPPPPPPP



    }
}


}