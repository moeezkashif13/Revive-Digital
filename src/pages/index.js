import axios from "axios"
import Link from "next/link";
import { useEffect, useState } from "react"


import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import MasonryComp from "../../Components/Masonry";
import { CommonHeading, Quote } from "../../Components/Small";


import { Splide, SplideSlide,SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import axiosClient, { menuFetchURL } from "../../utils/axiosClient";
import { extractFields, fetchDetailsSectionImages, splittingText } from "../../utils/utils";



export default function Home({gotAllWork,navMenu,fetchHomepageRelated,gotDetailsSectionImages}) {



  
  const heroSectArr = [

    {special:'WE',main:'help you get more leads through Digital Marketing'},
    {special:'WE',main:'help you get more leads through Digital Marketing'},
    {special:'WE',main:'help you get more leads through Digital Marketing'},


  ]

  const {custom_fields} = fetchHomepageRelated;

  const heroSectText = Object.keys(custom_fields).filter(eachField=>{
    return eachField.includes('homepage-hero-section-text')
  });


  // console.log(custom_fields);

  const detailsSectionHeadingsArray = extractFields(custom_fields,"homepage-details-section-heading");
  const detailsSectionParagraphsArray = extractFields(custom_fields,"homepage-details-section-paragraph");

  const detailsSectionImagesArray = extractFields(custom_fields,"homepage-details-section-image-video")

  

  

  return (

<div>

{/* FIRSTTT SECTIONNN STARTT */}
    <div className="h-[650px] lg:h-[550px]  relative ">
      
    <div className=" h-full heroSectVideoDiv">

    <video className="w-full h-full object-cover"  autoPlay loop muted playsinline>
<source src="/intro.mp4" type="video/mp4" />
</video>

    </div>




<div className="absolute top-2 lg:top-4 pl-2 lg:pl-4 h-full frontDiv w-full text-white" >
  
<div className="h-full px-6 pt-6" style={{backgroundColor:'rgba(0,0,0,0.7)'}}>


{/* NAVBARR STARTT */}

<Navbar navMenu={navMenu}  />

{/* NAVBARR ENDDD */}




<div className=" h-auto lg:h-full mt-8  lg:mt-0  z-20  relative lg:absolute lg:left-[50%] lg:-translate-x-[50%] bottom-0 w-full  lg:w-[65%] flex flex-col justify-center " > 


{/* <h1 className="text-[4.2rem] font-semibold leading-[5.5rem] "> */}

<Splide  options={{type:'loop',autoplay:true,pauseOnHover:true,interval:3000,arrows:false,pagination:false,}}  hasTrack={ false }>
  <SplideTrack >
    {heroSectText.map((elem)=>{

const gotText = splittingText(custom_fields[elem][0])




      return     <SplideSlide>

<h1 className="text-4xl leading-[3rem] text-center lg:text-start lg:text-[4.25rem] font-semibold lg:leading-[5.5rem] ">

<span className="text-primary">{gotText[0]}</span>
<span> {gotText[1]}</span>

</h1>
      
      </SplideSlide>
    })}

  </SplideTrack>
</Splide>


  {/* <span className="text-primary">WE</span>
<span> help you get more leads through Digital Marketing</span> */}

{/* </h1> */}


<div className="flex gap-x-7 mt-7 justify-center lg:justify-start font-medium">


<Link href="/who-we-are" className="border  px-6 py-1 rounded-2xl">Who we are</Link>
<Link href="/our-work" className="border  px-6 py-1 rounded-2xl">Our work</Link>



</div>



</div>



</div>







</div>



    </div>


{/* FIRSTT SECTIONN ENDDDD */}


{/* MASONRY START */}


<div className="py-8">


<div className="mb-10 pl-mobilePadding  lg:pl-desktopPadding">
  <CommonHeading/>
</div>



<MasonryComp  gotAllWork={gotAllWork} />






  </div>




{/* MASONRY END */}








<div>

{detailsSectionHeadingsArray.map((elem,index)=>{

const splitHeading = splittingText(custom_fields[elem][0])

const getRelavantPara = custom_fields[detailsSectionParagraphsArray[index]][0]

const getRelavantMediaID = custom_fields[detailsSectionImagesArray[index]][0];

const getRelavantMediURL = gotDetailsSectionImages.filter(eachMediaURL=>{
  return eachMediaURL.id == getRelavantMediaID
})[0];

console.log(getRelavantMediURL);




return <div className={`flex flex-col lg:flex-row  ${index%2!=0&&'lg:flex-row-reverse'} `}>

<div className="w-full lg:w-1/2  px-mobilePadding lg:px-24 py-10">


<CommonHeading   special={splitHeading[0]}   main={splitHeading[1]}  />  



<div className="text-[15px] flex flex-col gap-y-5" dangerouslySetInnerHTML={{__html:getRelavantPara}}>
  {/* <p>Revive Digital is a full-service digital marketing agency based in Essex that specialises in search engine marketing and web design. We’re the digital marketing agency for some of the most discerning clients across London, locally in the South East and nationally too. They come to us for unmistakeable branding, awesome websites, powerfully effective marketing strategies, share-worthy social media, brilliant videos and fabulous apps.</p>

<p>We’re not just an agency; we’re inventors, we’re creative and digital engineers.</p>


<p>With us you’ll find a team of professionals, each one passionate about their field. They listen, they help. They’ll be honest if something isn’t right for you or could be done better. They monitor, analyse and improve… constantly and consistently.</p>

<p>Because at Revive.Digital we want people to be moved to action by your marketing. Not just see it.</p> */}


</div>

</div>





<div className="w-full h-[300px] lg:h-auto lg:w-1/2 ">



  <img className="w-full h-full object-cover max-w-full" src={getRelavantMediURL.source_url} alt="" />

</div>


</div>


})}

</div>







{/* FOOTER START */}

<Footer/>


{/* FOOTERR ENDDD */}









</div>


  )
}


export const getStaticProps = async () => {
  const gotAllWork = await axiosClient
    .get(
      "/ourworktype?order=desc"
    )
    .then(async (resp) => {
     
      const getAllWorksMediaIDS = resp.data.map((eachWork) => {
        return eachWork.featured_media;
      });

      
      const getWorkMediaURL = await axiosClient
        .get(
          `/media?include=${[...getAllWorksMediaIDS]}`
        )
        .then((gotMedia) => {

          
          const main = getAllWorksMediaIDS.map((eachID) => {

            const check = gotMedia.data.filter((eachMedia) => {
              
              return eachMedia.id == eachID;
            });



            return check[0];
          });


          return main;
        })
        .catch((errorObj) => {
          console.log(errorObj);
        });

      // console.log(
      //   getWorkMediaURL,
      //   "getWorkMediaURL getWorkMediaURL getWorkMediaURL"
      // );


      return {
        data: resp.data,
        mediaURL: getWorkMediaURL,
      };
    })
    .catch((err) => {
      console.log(err, "err err err");
    });


    
    const fetchHomepageRelated = await axios.get('http://localhost/revivedigitalbackend/wp-json/wp/v2/homepage?slug=homepage-content').then(resp=>{
      return resp.data[0]
    }).catch(err=>{
      console.log(err);
    })



    const {custom_fields} = fetchHomepageRelated;

  const detailsSectionImagesArray = extractFields(custom_fields,"homepage-details-section-image-video").map(eachObjKey=>{

      return custom_fields[eachObjKey][0]

  });

// console.log(detailsSectionImagesArray,'detailsSectionImagesArray detailsSectionImagesArray');


const gotDetailsSectionImages = await fetchDetailsSectionImages(detailsSectionImagesArray);



// console.log(gotDetailsSectionImages,'gotDetailsSectionImages gotDetailsSectionImages gotDetailsSectionImages');


    const navMenu =  await axios.get(menuFetchURL).then(resp=>{
  
      return resp.data.items
          
  })






  return {
    props: {
      gotAllWork: gotAllWork,
      navMenu : navMenu,

      fetchHomepageRelated : fetchHomepageRelated,

      gotDetailsSectionImages : gotDetailsSectionImages,

    },
    revalidate:60,
  };
};