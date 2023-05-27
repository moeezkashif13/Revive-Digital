
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../../../../Components/Footer";
import HeaderComp from "../../../../Components/Header";
import { BreadCrumbs, CommonHeading } from "../../../../Components/Small";
import TempBread from "../../../../Components/Tempbread";
import axiosClient, { menuFetchURL } from "../../../../utils/axiosClient";
import { ManageContent } from "../../../../utils/utils";




export default function Article({gotArticle,breadcrumbs,navMenu}){


  
    const [blogCategories,setBlogCategories] = useState([])

    const [recentPosts,setRecentPosts] = useState([])

    const [article,setArticle] = useState({});


    useEffect(()=>{

      const fetchRecentPosts = async ()=>{

        axiosClient.get('/blog?per_page=10').then(resp=>{
          
          setRecentPosts(resp.data)
        }).catch(err=>{
          console.log(err);
        })
      
      }

      fetchRecentPosts();



const fetchBlogCategories = async ()=>{

  axiosClient.get('/blog-category?per_page=50').then(resp=>{
    
    setBlogCategories(resp.data)
  }).catch(err=>{
    console.log(err);
  })

}

fetchBlogCategories()


    },[])


useEffect(()=>{

  ManageContent();


},[article])


const breadCrumbsData = breadcrumbs.map((c) => {
  return {
    label: c.text,
    path: c.url,
  };
})




    return(


        <div>


{/* <TempBread items={breadCrumbsData} /> */}



<HeaderComp navMenu={navMenu} text={gotArticle.title.rendered} special="understanding" main="and implementing the meta pixel (formerly facebook pixel)"  />


<TempBread items={breadCrumbsData} />


{/* <BreadCrumbs/> */}



<div className="flex flex-col lg:flex-row px-mobilePadding md:px-tabletPadding lg:px-desktopPadding gap-x-8 mb-8">


<div className="w-full lg:w-3/4  pr-8 space-y-5 text-lg text-[#777777]">
    

<p>19/04/2023</p>


{/* CONTENTTT STARTTT HEREEE */}

<div className="space-y-5" dangerouslySetInnerHTML={{__html:gotArticle?.content?.rendered}}></div>


        {/* <p>If you are currently using Facebook or Instagram Ads, or plan on using them in the future, there’s one important tool that you should start using straight away.  The Facebook Pixel, now the Meta Pixel, will help you better analyse what’s going on and get the very most of your social media marketing budget. Here’s what you need to know about it and how it works.</p>

<img src="https://revive.digital/wp-content/uploads/2020/03/what-is-a-meta-pixel-1024x576.png" alt="" />


<p>We are looking for a Computer Science (or similar) graduate to join our team as a trainee developer. We will consider candidates with experience, but this role is aimed at new graduates.</p>


<p>You will work as part of Revive’s development team, and will work on a variety of back-end web projects, further your skills in programming, and learn app development and database design and management.</p>



<p>The ideal candidate needs to be a motivated, quick self-learner, but also be able to take instruction and be comfortable working well with others. Ideally you should love solving problems, enjoy elegant solutions, and be prepared to work hard to do things the right way.</p>


<p>Our agency works on both open-source and established development stacks – so a strong foundation in programming is helpful as you will be involved with a number of languages.</p>


<p>If you don’t like problem solving or a challenge – this probably isn’t for you.</p>

<p>Our culture is friendly and fun – we don’t do office politics, and we support each other in our respective roles. We all work for a common goal, which is our clients’ success – we celebrate when they get results. We do pizzas once a month, dress smart casual during the week and dress down on Fridays. We get down the pub for the occasional drink, and we party hard at Christmas! The culture is work hard, but enjoy the work.</p> */}


{/* CONTENTTT ENDDD HEREEE */}




</div>


<div className="w-full lg:w-1/4 space-y-12">
    
<div>
<CommonHeading   special="recent" main="posts"  />

<div className="pl-6 font-semibold flex flex-col gap-y-4 pt-4">

{recentPosts?.map((eachRecentPost,index)=>{



return <Link key={index} className="underline" href={`/blog/${eachRecentPost.slug}`}>{eachRecentPost?.title?.rendered}</Link>




})}





</div>


</div>



<div>
<CommonHeading   special="categories" main=""  />

<div className="pl-6 font-semibold flex flex-col gap-y-4 pt-4">


{blogCategories?.map((eachCategory,index)=>{
    return <Link key={index}  href={`/blog/category/${eachCategory.slug}`}><span className="underline">{eachCategory.name}</span> ({eachCategory.count}) </Link>

    

})}






</div>


</div>


</div>




</div>





<Footer/>




        </div>


    )



}


export const getServerSideProps = async(context)=>{


   const gotArticle =  await axiosClient.get(`/blog/?slug=${context.query.article}`).then(resp=>{

    
        delete resp.data[0]['_links']

        return resp.data[0]


}).catch(err=>{
  console.log(err);
})



// TEMPPPPPPPPPPPPPP

const db = [
  {
    "slug": gotArticle.slug,
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
        "text": gotArticle.title.rendered,
        "url": "/blog/branding"
      },
      // {
      //   "text": "Python",
      //   "url": "/course/python"
      // }
    ]
  }
]


const slug = gotArticle.slug;
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

  

return {
  props:{
    gotArticle:gotArticle,

    navMenu : navMenu,

    // TEMPPPPPPPP
    breadcrumbs: data.breadcrumbs,
    courseTitle: data.courseTitle,
// TEMPPPPPPPP




  }
}


}