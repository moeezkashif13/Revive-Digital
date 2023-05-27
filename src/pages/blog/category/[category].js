
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../../../../Components/Footer";
import HeaderComp from "../../../../Components/Header";
import { BreadCrumbs, EachBlogCard } from "../../../../Components/Small";
import TempBread from "../../../../Components/Tempbread";
import axiosClient, { menuFetchURL } from "../../../../utils/axiosClient";

export default function ArticleCategory({data,categoryName,breadcrumbs,navMenu}){

const router = useRouter();

const [allArticles,setAllArticles] = useState([])




    const breadCrumbsData = breadcrumbs.map((c) => {
        return {
          label: c.text,
          path: c.url,
        };
      })



      
    return (

        <div>



<HeaderComp navMenu={navMenu}  text={categoryName} />


<TempBread items={breadCrumbsData} />



<div className="px-mobilePadding md:px-tabletPadding lg:px-desktopPadding bg-[#FAFAFA] py-12 flex flex-wrap  justify-center md:justify-between gap-y-10 mb-6">

{data.mainDataCheck==404?

<div className="text-center text-3xl font-medium  mx-auto">This category does not exist</div>


:


(data.count==0?<div className="text-center text-3xl font-medium  mx-auto">

No articles available in this category    


</div>


:



data.mainDataCheck.map((eachBlogDetail,index)=>{

  return <EachBlogCard key={index} details={eachBlogDetail} />
})



)



}




{/* {data.mainDataCheck==404?


<div className="text-center ">
    
    This category does not exist

</div>


:data.mainDataCheck.length>0&&data.mainDataCheck.map(()=>{
return <EachBlogCard/>

})} */}


{/* {data.length>0?data.map(()=>{

return <EachBlogCard/>

}):<div>dsadsa</div>} */}




</div>



<Footer/>



        </div>


    )


}


export const getServerSideProps = async(context)=>{


    const categoryName = context.query.category

    const url = `/blog-category?per_page=50`;
    

     const mainData = await axiosClient.get(url).then(async resp=>{

        const requiredCategory = resp.data.filter(eachCateg=>{

            return eachCateg.slug==categoryName
        })

        if(requiredCategory.length>0){

        const articlesByCateg = await axiosClient.get(`/blog?${requiredCategory[0].taxonomy}=${requiredCategory[0].id}`).then(responseObj=>{

        return responseObj.data

        }).catch(errorObj=>{
            console.log(errorObj);
        })

        

        return {mainDataCheck:articlesByCateg,count:requiredCategory[0].count}

    }else{
        return {mainDataCheck:404}
    }


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
        {
          "text": categoryName,
          "url": "/blog/branding"
        },
        // {
        //   "text": "Python",
        //   "url": "/course/python"
        // }
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




const navMenu =  await axios.get(menuFetchURL).then(resp=>{
  
return resp.data.items
    
    })




return{
    props:{

        data : mainData,

        navMenu : navMenu,

// TEMPPPPPPPP
      categoryName:categoryName,
        breadcrumbs: data.breadcrumbs,
        courseTitle: data.courseTitle,
// TEMPPPPPPPP



    }
}



}