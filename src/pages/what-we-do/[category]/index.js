import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../../../../Components/Footer";
import HeaderComp from "../../../../Components/Header";
import { BreadCrumbs, CommonHeading, DetailsSection } from "../../../../Components/Small";
import TempBread from "../../../../Components/Tempbread";


const mainArr = [];



export default function WhatWeDoEachCategory({getAssociatedServices,breadcrumbs}){

    const router = useRouter();

    const breadCrumbsData = breadcrumbs.map((c) => {
        return {
          label: c.text,
          path: c.url,
        };
      })



      useEffect(()=>{



        axios.get('http://localhost/revivedigitalbackend/wp-json/wp/v2/mainservices').then(resp=>{


          const mainPage = resp.data.filter(eachPage=>{
            return eachPage.slug=='web'
          })

          // console.log(mainPage);

const customFields = mainPage[0].custom_fields
          
          const getKeys = Object.keys(customFields)

// console.log(getKeys);

const onlyGetDetailsKey = getKeys.filter(eachKey=>{
  return eachKey.startsWith('details')
}).sort();

console.log(onlyGetDetailsKey);


  



          // const objWork = mainPage[0].custom_fields

          // console.log(Object.entries(objWork));


        }).catch(err=>{
          console.log(err);
        })



      },[])


return (

            <div>

<HeaderComp special="website" main="design" /> 


{/* <BreadCrumbs/> */}

<TempBread items={breadCrumbsData} />




{/*  */}
<div className="px-28 py-10  bg-[#FAFAFA]">


<CommonHeading special="website" main="design services" />



<div className={`flex flex-wrap justify-between gap-y-8 ${getAssociatedServices.length>0?'mt-10':'mt-0'}`}>
{getAssociatedServices.length>0?getAssociatedServices.map((eachService)=>{


    return <div className="w-[255px] bg-white">

            <div className="w-full h-[160px] ">
                
                {/* <img className="w-full max-w-full  h-full object-cover" src="https://revive.digital/wp-content/uploads/2017/07/e-commerce-2.jpg" alt="" /> */}


            </div>

    <div className="px-4 py-4 space-y-4">

<p className="font-bold underline h-[24px] serviceCardHeading">{eachService?.title?.rendered}</p>

<p className="text-[15px] h-[90px] serviceCardParagraph" dangerouslySetInnerHTML={{__html:eachService?.excerpt?.rendered}}></p>


<div>
    <Link href={`${router.query.category}/${eachService.slug}`} style={{transition:'all 0.3s'}} className="hover:bg-primary hover:text-white hover:no-underline  border border-primary text-primary font-medium px-5 py-1 rounded-2xl" >Read More</Link>
</div>




    </div>



    </div>


})  :  <div className=" mx-auto font-bold text-4xl text-primary">No services yet</div> }


</div>
</div>

{/*  */}



<div>


{[1,2,3,4,5].map((elem,index)=>{
    return <DetailsSection reverse={index%2!=0&&true}  />
})}


</div>





{/*  */}



<Footer/>






                </div>




)

}


export const getServerSideProps = async (context)=>{

 
    const categoryName = context.query.category;


    const getAssociatedServices = await axios.get('http://localhost/revivedigitalbackend/wp-json/wp/v2/services-categories').then(async resp=>{

        const filterMainCateg = resp.data.filter(eachCateg=>{
          return eachCateg.slug == categoryName
        })


        return await axios.get(`http://localhost/revivedigitalbackend/wp-json/wp/v2/eachservice?${filterMainCateg[0].taxonomy}=${filterMainCateg[0].id}`).then(response=>{

          return response.data;


        }).catch(errObj=>{
          console.log(errObj);
        })
        



        }).catch(err=>{
          console.log(err);
        })
    
    



            // TEMPPPPPPPPPPPPPP

const splitIt = categoryName.split('-').join(' ')

const db = [
    {
      "slug": splitIt,
      "courseTitle": "Learn Python: Python for Beginners",
      "breadcrumbs": [
        {
          "text": "Home",
          "url": "/"
        },
        {
          "text": "What We Do",
          "url": "/what-we-do"
        },
        {
          "text": splitIt,
          "url": "/blog/branding"
        },
        // {
        //   "text": "Python",
        //   "url": "/course/python"
        // }
      ]
    }
  ]
  
  
  const slug = splitIt;
  // simulate a call to the backend server here to get the data
  const data = db.find((page) => page.slug === slug);
  if (!data) {
    return {
      notFound: true,
    };
  }
  
  // TEMPPPPPPPP
  

    
    return {
        props : {

            
            getAssociatedServices:getAssociatedServices,

                // TEMPPPPPPPP
    breadcrumbs: data.breadcrumbs,
    courseTitle: data.courseTitle,
// TEMPPPPPPPP
        
        
        
        
        }
    }


}