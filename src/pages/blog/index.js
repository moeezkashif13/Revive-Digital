import axios from "axios";
import { useEffect } from "react";
import Footer from "../../../Components/Footer";
import HeaderComp from "../../../Components/Header";
import { BreadCrumbs, EachBlogCard } from "../../../Components/Small";
import TempBread from "../../../Components/Tempbread";

export default function Blog({allBlogPosts,breadcrumbs}){

    console.log(breadcrumbs);

    const breadCrumbsData = breadcrumbs.map((c) => {
        return {
          label: c.text,
          path: c.url,
        };
      })



    return(

        
        <div>


<HeaderComp  text="Blog"  />

{/* <BreadCrumbs/> */}

<TempBread items={breadCrumbsData} />



<div className="px-28  pt-10 pb-20 bg-[#FAFAFA] flex flex-wrap justify-between gap-y-8">


{allBlogPosts.map((eachBlogDetail)=>{
    return <EachBlogCard  details={eachBlogDetail}   />
})}



</div>




<div className="flex justify-center gap-x-5 py-5 font-semibold ">

{[1,2,3,4,5].map(elem=>{
    return <div className="border border-primary text-primary underline px-3 py-1 ">{elem}</div>
})}


<div className="border border-primary text-primary px-3 py-1 ">...</div>

<div className="border border-primary text-primary px-3 py-1 underline ">Last</div>




</div>


<Footer/>



        </div>





    )


}


export const getServerSideProps = async ()=>{

    const fetchBlogPosts = await axios.get('http://localhost/revivedigitalbackend/wp-json/wp/v2/blog?_fields=title,excerpt,slug,featured_media').then(resp=>{
        return resp.data
    }).catch(err=>{
        console.log(err);
    })



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
          "text": "Blog",
          "url": "/blog"
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



    return {
        props:{
            allBlogPosts:fetchBlogPosts,


            // TEMPPPPPPPP
        breadcrumbs: data.breadcrumbs,
        courseTitle: data.courseTitle,
// TEMPPPPPPPP



        }
    }


}