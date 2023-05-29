
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CustomError from "../../../../Components/CustomError";
import Footer from "../../../../Components/Footer";
import HeaderComp from "../../../../Components/Header";
import { BreadCrumbs, CommonHeading, DetailsSection } from "../../../../Components/Small";
import TempBread from "../../../../Components/Tempbread";
import axiosClient, { menuFetchURL } from "../../../../utils/axiosClient";
import fetchWholeNavbar from "../../../../utils/fetchWholeNavbar";


const mainArr = [];



export default function WhatWeDoEachCategory({getAssociatedServices,breadcrumbs,getMedia,allMainServices,metaFields,navMenu}){

  
  
  if(allMainServices.length==0){
    return <CustomError type="service" />
  }

  

    const router = useRouter();

    console.log(router);

    const breadCrumbsData = breadcrumbs.map((c) => {
        return {
          label: c.text,
          path: c.url,
        };
      })

      





return (

            <div>

<HeaderComp navMenu={navMenu} special={router.query.category} main="services" /> 


{/* <BreadCrumbs/> */}

<TempBread items={breadCrumbsData} />




{/*  */}
<div className="px-mobilePadding md:px-tabletPadding lg:px-desktopPadding py-10  bg-[#FAFAFA]">


<CommonHeading special={router.query.category} main=" services" />



<div className={`flex flex-wrap  gap-x-8 lg:gap-x-0 justify-center lg:justify-between gap-y-8 ${getAssociatedServices.length>0?'mt-10':'mt-0'}`}>
{getAssociatedServices.length>0?getAssociatedServices.map((eachService,index)=>{


const relavantImage = getMedia.filter(eachURL=>{
  return eachURL.id == eachService.featured_media
})





    return <div key={index} className="w-[255px] bg-white">

            <div className="w-full h-[160px] ">
                
        <img className={`w-full max-w-full  h-full   ${relavantImage.length>0?'object-cover':'object-contain'}  `} src={relavantImage.length>0?relavantImage[0].source_url:'/no-image-found.png'} alt="" />


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


{allMainServices.map((checking,index)=>{

let hello = {};


checking.forEach((eachCheck,index)=>{


const subString = eachCheck.substring(8,50)


    hello[subString] = metaFields[eachCheck][0]




})


    return <DetailsSection key={index} allMedia={getMedia} details={hello} index={index} reverse={index%2!=0&&true}  />


})}


</div>





{/*  */}



<Footer/>






                </div>




)

}


export const getServerSideProps = async (context)=>{

 
    const categoryName = context.query.category;


    const getAssociatedServices = await axiosClient.get('/services-categories?_fields=slug,taxonomy,id,featured_media,mime_type,title,excerpt,id').then(async resp=>{

        const filterMainCateg = resp.data.filter(eachCateg=>{
          return eachCateg.slug == categoryName
        })

if(filterMainCateg.length>0){
        return await axiosClient.get(`/eachservice?${filterMainCateg[0].taxonomy}=${filterMainCateg[0].id}`).then(response=>{


        return response.data;


        }).catch(errObj=>{
          console.log(errObj,'errObj errObj errObj');
        })
  
        
}else{
  return []
}

  



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

    const getMedia = await axiosClient('/media?per_page=100&_fields=featured_media,mime_type,id,source_url').then(resp=>{

    return resp.data


    }).catch(err=>{
      return false

    })


    let metaFields = {}

    const allMainServices = await axiosClient.get('/mainservices?_fields=slug,custom_fields,mime_type').then(resp=>{


      const mainPage = resp.data.filter(eachPage=>{
        return eachPage.slug==categoryName
      })


if(mainPage.length>0){


      metaFields = {...mainPage[0].custom_fields}

      // console.log(mainPage);

const customFields = mainPage[0].custom_fields
      
      const getKeys = Object.keys(customFields)

// console.log(getKeys);

const onlyGetDetailsKey = getKeys.filter(eachKey=>{
return eachKey.startsWith('details')
}).sort();



var r = /\d+/;


const prefixes = ['details-background-color', 'details-heading', 'details-image', 'details-paragraph'];

const howMuchNumbers = onlyGetDetailsKey.map(eachElem=>{

var s = eachElem.match(r);

if(s){
return Number(s[0])
}

}).filter(removeUnwanted=>removeUnwanted)

let uniqueChars = [...new Set(howMuchNumbers)];


const seperate = uniqueChars.map(checkAvien=>{


const mainHello = onlyGetDetailsKey.filter(eachCheck=>eachCheck.includes(`_${checkAvien}`))

//  console.log(mainHello);

return mainHello

})


const finalArray = [prefixes,...seperate]


return finalArray;

}else{
  return []
}

      // const objWork = mainPage[0].custom_fields

      // console.log(Object.entries(objWork));


    }).catch(err=>{
      console.log(err);
    })



    const navMenu =  await fetchWholeNavbar();




    
    return {
        props : {

          
          navMenu : navMenu,

            getAssociatedServices:getAssociatedServices,
            getMedia: getMedia,

            allMainServices : allMainServices,
            metaFields : metaFields,

                // TEMPPPPPPPP
    breadcrumbs: data.breadcrumbs,
    courseTitle: data.courseTitle,
// TEMPPPPPPPP
        
        
        
        
        }
    }


}