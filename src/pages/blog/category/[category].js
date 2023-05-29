
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CustomError from "../../../../Components/CustomError";
import Footer from "../../../../Components/Footer";
import HeaderComp from "../../../../Components/Header";
import { BreadCrumbs, EachBlogCard } from "../../../../Components/Small";
import TempBread from "../../../../Components/Tempbread";
import axiosClient, { menuFetchURL } from "../../../../utils/axiosClient";
import fetchWholeNavbar from "../../../../utils/fetchWholeNavbar";

export default function ArticleCategory({message,data,categoryName,breadcrumbs}){

if(!data){
  return   <CustomError message={message} type="category" />
}

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



{/* <HeaderComp navMenu={navMenu}  text={categoryName} /> */}


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

  let mainData = false;
  let message = '';

  const categoryName = context.query.category;


  try {


      await axiosClient.get(`/blog-category?per_page=50&_fields=title,excerpt,featured_media,id,slug,taxonomy,count`).then(async resp=>{

        const requiredCategory = resp.data.filter(eachCateg=>{

            return eachCateg.slug==categoryName
        })

        if(requiredCategory.length>0){

        const articlesByCateg = await axiosClient.get(`/blog?${requiredCategory[0].taxonomy}=${requiredCategory[0].id}&_fields=title,excerpt,featured_media,id,slug`).then(responseObj=>{

        return responseObj.data

        }).catch(errorObj=>{
          mainData = false;
          console.log('i musttt logged innn');
            throw new Error('Error caused by a network error.')

        })

        

        mainData = {mainDataCheck:articlesByCateg,count:requiredCategory[0].count}

    }else{
      mainData = {mainDataCheck:404}  

    }

    }).catch(err=>{
      mainData = false;
      throw new Error('This category does not exist');
    })


  } catch (error) {
    console.log(error);
    message = error.message;
    mainData = false;
    
  }



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




// const navMenu =  await fetchWholeNavbar()


return{
    props:{

        data : mainData,
        message : message,
        // navMenu : navMenu,

// TEMPPPPPPPP
      categoryName:categoryName,
        breadcrumbs: data.breadcrumbs,
        courseTitle: data.courseTitle,
// TEMPPPPPPPP



    }
}



}