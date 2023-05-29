
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../../../Components/Footer";
import HeaderComp from "../../../Components/Header";
import { BreadCrumbs, EachBlogCard, Loader } from "../../../Components/Small";
import TempBread from "../../../Components/Tempbread";

import axiosClient, { menuFetchURL } from "../../../utils/axiosClient";
import fetchWholeNavbar from "../../../utils/fetchWholeNavbar";


var pagesCount = [];


export default function Blog({breadcrumbs,navMenu}){

  const [allBlogPosts,setAllBlogPosts] = useState([])

  const [pageNumber,setPageNumber] = useState(1);

  const [errorMessage,setErrorMessage] = useState('');

  // const [pagesCount,setPagesCount] = useState(0)

  // const [loading,setLoading] = useState(false)



useEffect(()=>{


  const fetchBlogPosts = async()=>{

    
    
    setAllBlogPosts([]);
    
   const allBlogs =  await axiosClient.get(`/blog?_fields=title,excerpt,slug,featured_media&page=${pageNumber}&order=asc`).then(resp=>{

   
    if(pagesCount.length==0){
      for(var i=1; i<=resp.headers['x-wp-totalpages']; i++) {
        pagesCount.push(i.toString());
     }
    }


   
  //  setPagesCount(resp.headers['x-wp-totalpages'])

    setErrorMessage('')

    return resp.data

}).catch(err=>{
    console.log(err);
    setErrorMessage('Error in fetching articles')
  return [];
  })



  setAllBlogPosts(allBlogs);

    



}


fetchBlogPosts()


},[pageNumber])


const fetchNewPages = (event)=>{


  const pageNumber = event.target.innerText;
  
  setPageNumber(pageNumber)
  

}

  
    const breadCrumbsData = breadcrumbs.map((c) => {
        return {
          label: c.text,
          path: c.url,
        };
      })

     

      // useEffect(()=>{

        // 5aea4aa14be64107b9738a71075107b2

//         console.log(tempdata);

// tempdata.articles.forEach((eachArticle,index)=>{

//   const data = {
//     "title" : eachArticle.title,
//     "excerpt" : eachArticle.description,
//     "content" : eachArticle.content,
//     "status" : "publish"
  // }


  // axios.post('https://workingrevivedigital.000webhostapp.com/wp-json/wp/v2/blog',data,{

  //         headers:{
  //           // "Authorization" : `Basic admin:${process.env.NEXT_PUBLIC_APPLICATION_PASSWORD}`
  //           'Authorization': 'Basic ' + btoa('admin' + ':' + process.env.NEXT_PUBLIC_APPLICATION_PASSWORD)

  //         }


  //       }).then(resp=>{
  //         console.log(resp.data);
  //       }).catch(err=>{
  //         console.log(err.response);
  //       })

// })


        // axios.post('https://workingrevivedigital.000webhostapp.com/wp-json/wp/v2/blog',data,{

        //   headers:{
        //     // "Authorization" : `Basic admin:${process.env.NEXT_PUBLIC_APPLICATION_PASSWORD}`
        //     'Authorization': 'Basic ' + btoa('admin' + ':' + process.env.NEXT_PUBLIC_APPLICATION_PASSWORD)

        //   }


        // }).then(resp=>{
        //   console.log(resp.data);
        // }).catch(err=>{
        //   console.log(err.response);
        // })



      // },[])





    return(

        
        <div>


<HeaderComp navMenu={navMenu}  text="Blog"  />

{/* <BreadCrumbs/> */}

<TempBread items={breadCrumbsData} />



<div className={` px-mobilePadding md:px-tabletPadding lg:px-desktopPadding  pt-10 ${errorMessage?'pb-10':'pb-20'} bg-[#FAFAFA] flex flex-wrap justify-center md:justify-between gap-y-8`}>


{allBlogPosts.length>0?allBlogPosts.map((eachBlogDetail,index)=>{
    return <EachBlogCard  key={index} details={eachBlogDetail}   />
}):<Loader/>}




</div>

{errorMessage&&
<div className="pb-6 mb-6 bg-[#FAFAFA] text-center text-primary text-3xl font-semibold">

{errorMessage}

</div>

}


{errorMessage?null:

<div className="flex flex-wrap gap-y-4 justify-center gap-x-5 py-5 font-semibold ">

{pagesCount.map((eachNumber,index)=>{
    return <div key={index} style={{transition:'all 0.4s'}} onClick={fetchNewPages} className="hover:bg-primary hover:text-white   border border-primary cursor-pointer text-primary underline px-3 py-1 ">{eachNumber}</div>
})}





</div>

}


<Footer/>



        </div>





    )


}


export const getServerSideProps = async ()=>{

    // const fetchBlogPosts = await axios.get('https://workingrevivedigital.000webhostapp.com/wp-json/wp/v2/blog?_fields=title,excerpt,slug,featured_media').then(resp=>{
    //     return resp.data
    // }).catch(err=>{
    //     console.log(err);
    // })



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

const navMenu =  await fetchWholeNavbar();


    return {
        props:{
            // allBlogPosts:fetchBlogPosts,


            // TEMPPPPPPPP
        breadcrumbs: data.breadcrumbs,
        courseTitle: data.courseTitle,
        navMenu : navMenu,
// TEMPPPPPPPP



        }
    }


}