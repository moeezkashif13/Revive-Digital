
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import CustomError from "../../../../../Components/CustomError";
import Footer from "../../../../../Components/Footer";
import HeaderComp from "../../../../../Components/Header";
import { BreadCrumbs, CommonHeading, DetailsSection, Loader } from "../../../../../Components/Small";
import TempBread from "../../../../../Components/Tempbread";
import axiosClient, { menuFetchURL } from "../../../../../utils/axiosClient";
import fetchWholeNavbar from "../../../../../utils/fetchWholeNavbar";


const splittingText = (text) => {
  if (text) {
    const splitText = text.split(" ");

    const getFirstWord = splitText.shift();

    const joiningRemainingWords = splitText.join(" ");

    return { getFirstWord, joiningRemainingWords };
  }
};



export default function Check({errorCame,breadcrumbs,gotMainService,gotMediaLinks,navMenu}){

  console.log(gotMainService);

  
  if(errorCame){
    return <CustomError/>
  }


  



        const breadCrumbsData = breadcrumbs.map((c) => {
          return {
            label: c.text,
            path: c.url,
          };
        })

        
        const {custom_fields} = gotMainService[0]


        const [bothSectionMedia,setBothSectionMedia] = useState({});

        const [imageLoading,setImageLoading] = useState(false);

        useEffect(()=>{

          const fetchMedias = async()=>{

            setImageLoading(true);

          const firstSectionMedia = custom_fields["each-service-details-section-image-video"][0]
          
          const secondSectionMedia = custom_fields["each-service-details-section-second-image-video"][0]


          const mediaArray = [firstSectionMedia,secondSectionMedia]

          const gotMedias = await axiosClient.get(`/media?include=${[...mediaArray]}`).then(resp=>{
            return resp.data
          }).catch(err=>{
            console.log(err);
          })

          setImageLoading(false)


          setBothSectionMedia(gotMedias)


        }


        fetchMedias()

        },[])



const firstSectionHeading = custom_fields["each-service-details-section-heading"][0]
const secondSectionHeading = custom_fields["each-service-details-section-second-heading"][0]

const firstSection = splittingText(firstSectionHeading);
const secondSection = splittingText(secondSectionHeading);




    return(




        <div>



<HeaderComp navMenu={navMenu}  specialAppearanceFields={custom_fields} anotherAppearance={true}   />

<TempBread items={breadCrumbsData} />



{/*  */}


<div
      className={`flex flex-col lg:flex-row gap-x-3.5   `}
    >
      <div className={`w-full lg:w-1/2 px-mobilePadding lg:px-20 py-8 lg:py-16   bg-[#FAFAFA] `}>
        <CommonHeading   special={firstSection.getFirstWord} main={firstSection.joiningRemainingWords} />

        <div className="lg:space-y-5 text-[#777777]"  dangerouslySetInnerHTML={{__html:custom_fields['each-service-details-section-paragraph']}} >
          {/* <p>
            Revive are a full service digital marketing agency. We flourish when
            we look after your entire digital presence – from the rankings in
            Google, to the social media, the brand, the messages, and the
            website.
          </p>

          <p>
            We came from website design, and that is still the primary vehicle
            we use to help promote your business online. But now we look at the
            big picture. How your logo and colours work along with your business
            stationery and livery. Your ranking in the search engines. Your paid
            marketing. Your social media. Conversion rates of visitors to
            enquiries and sales. Is your website actually working?
          </p>

          <p>
            The services we offer are varied, but all tie together to form a
            digital arsenal, allowing you to grow your business and expand your
            brand online.
          </p>

            <div>
              <Link
                className="rounded-2xl border border-primary px-6 py-1.5 text-primary underline"
                href="/"
              >
                Find out more
              </Link>
            </div> */}
        </div>
      </div>

      <div className={`w-full lg:w-1/2  ` }  >
        

{imageLoading?<div className="flex justify-center items-center h-full"><Loader/></div>:

        
        <img  className="w-full max-w-full h-full object-cover" src={bothSectionMedia[0]?.source_url} alt="" />

      }



      </div>
    </div>



{/*  */}




{/*  */}


<div className="py-8 lg:py-14">


<p className="text-center mb-7 lg:mb-12 text-[#262729] font-semibold text-3xl">Fabulous clients we work with</p>

<div className="px-mobilePadding md:px-tabletPadding lg:px-desktopPadding  flex flex-wrap justify-center  md:justify-between  gap ">
    
    
    {gotMediaLinks?gotMediaLinks.map((eachLogo,index)=>{
        return <div key={index} className=" w-[180px] h-[150px]    flex items-center  ">

            <img   className=" max-w-full w-full  h-full  object-contain   " src={eachLogo.source_url} alt="" />

        </div>

    }):<div className="font-semibold text-2xl text-primary mx-auto">No images available</div>}


</div>




</div>





{/*  */}


<div
      className={`flex flex-col  gap-x-3.5 lg:flex-row-reverse `}
    >
      <div className={`w-full lg:w-1/2 px-mobilePadding lg:px-20 py-8 lg:py-16   bg-[#FAFAFA] `}>

      <CommonHeading   special={secondSection.getFirstWord} main={secondSection.joiningRemainingWords} />


        <div className="lg:space-y-5 text-[#777777]" dangerouslySetInnerHTML={{__html:custom_fields['each-service-details-section-second-paragraph']}} >
          {/* <p>
            Revive are a full service digital marketing agency. We flourish when
            we look after your entire digital presence – from the rankings in
            Google, to the social media, the brand, the messages, and the
            website.
          </p>

          <p>
            We came from website design, and that is still the primary vehicle
            we use to help promote your business online. But now we look at the
            big picture. How your logo and colours work along with your business
            stationery and livery. Your ranking in the search engines. Your paid
            marketing. Your social media. Conversion rates of visitors to
            enquiries and sales. Is your website actually working?
          </p>

          <p>
            The services we offer are varied, but all tie together to form a
            digital arsenal, allowing you to grow your business and expand your
            brand online.
          </p>

            <div>
              <Link
                className="rounded-2xl border border-primary px-6 py-1.5 text-primary underline"
                href="/"
              >
                Find out more
              </Link>
            </div> */}
        </div>
      </div>

      <div className={`w-full lg:w-1/2  ` }  >
        



      {imageLoading?<div className="flex justify-center items-center h-full"><Loader/></div>:

        
<img  className="w-full max-w-full h-full object-cover" src={bothSectionMedia[1]?.source_url} alt="" />

}



      </div>
    </div>



{/*  */}


<div className="my-4">


<div className="bg-[#262729] text-white py-8 text-center">


<p className="text-2xl font-medium">What do our clients say</p>


<p style={{overflowWrap:'break-word'}} className=" px-6 lg:px-32 text-primary  my-4 text-2xl font-medium leading-[2.3rem]">{custom_fields['each-service-quote-quote']}</p>


<p className="font-bold">{custom_fields['each-service-quote-author']}</p>


</div>

</div>



{/*  */}


<div className="mb-0 lg:mb-4 flex  flex-col lg:flex-row gap-x-4  lg:px-4">


<div className="bg-green-300 w-full lg:w-[390px] lg:min-w-[390px]">

        <img className="w-full max-h-full h-full object-cover" src="https://revive.digital/wp-content/uploads/2017/07/e-commerce-websites-contact.jpg" alt="" />


</div>



<div className="bg-[#FAFAFA]    space-y-6 py-6 lg:py-28 pl-mobilePadding lg:pl-20 pr-mobilePadding lg:pr-12">
    

<CommonHeading  special="contact" main="" />


<p className="text-[#777777] ">Sound appealing? If you’re in need of a new ecommerce site, the Revive team can help. Simply fill out the contact form and specify your request, and one of our team will be in contact to discuss your new shopping site.</p>


<div className="px-6 flex flex-wrap justify-between  gap-y-4">


{['Name','Email','Phone'].map((elem,index)=>{

    return <div key={index} className=" w-full lg:w-[230px] ">

        <label htmlFor={elem}  className="font-semibold" >{elem}:*</label>

        <input type="text"  placeholder={elem} className="font-semibold bg-white px-3 py-1.5 outline-none text-lg w-full" name={elem} id={elem} />
    </div>
})}


<div className="w-full ">

        <label htmlFor="message"  className="font-semibold" >Message / Comments:*</label>

        <textarea rows={8}  placeholder="Enter message" className="font-semibold bg-white px-3 py-1.5 outline-none text-lg w-full" name="message" id="message" />



    </div>



<div>

<p>CAPTCHA</p>

<div className="w-[300px] h-[100px] bg-purple-500"></div>


</div>






</div>




<div className="pt-3">
<div style={{transition:'all 0.3s'}} className="hover:bg-primary hover:text-white   border-primary text-xl text-primary inline font-semibold border px-6 cursor-pointer py-2 rounded-3xl">Submit</div>
</div>




</div>




</div>






{/*  */}



<Footer/>






        </div>
    
    
    )

}


export const getServerSideProps = async (context) => {

  
              // TEMPPPPPPPPPPPPPP

              // console.log(context.query);


              const mainCateg = context.query.category;

    const serviceName = context.query.check;

const splitMainCateg = mainCateg.split('-').join(' ')
const splitIt = serviceName.split('-').join(' ')


  
  // TEMPPPPPPPP
  

const gotMainService =  await axiosClient.get(`/eachservice?slug=${serviceName}`).then(resp=>{
    // console.log(resp.data,'resp.data resp.data resp.data');
  return resp.data;


  }).catch(err=>{
    console.log('thissss service does notttt existttt');
    return err;
  })

  
  if(gotMainService.length>0){


    
// RELATED TO BREADCRUMS 

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
        text:splitMainCateg,
        url:`/what-we-do/${splitMainCateg}`,
      },
      {
        "text": splitIt,
        "url": "/blog/branding"
      },
      
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

// RELATED TO BREADCRUMBS





  const {custom_fields} = gotMainService[0];

  console.log(custom_fields,'custom_fields custom_fields custom_fields');

  const getCompanyLogos = Object.keys(custom_fields).filter(eachField=>{
    return eachField.includes('company-logo')
  }).map(eachLogo=>{

    return custom_fields[eachLogo][0]

  })



let gotMediaLinks;

  if(getCompanyLogos.length>0){

 await axiosClient.get(`/media?include=${[...getCompanyLogos]}`).then(media=>{

 
 gotMediaLinks=media.data

//  return media.data


  }).catch(err=>{
    console.log('errrr');
    // return 22222
    // console.log(err.statusCode,'err err err err err');
  })

  
}else {
  gotMediaLinks= false;

}


const navMenu =  await fetchWholeNavbar()



    return {

      props: {
        breadcrumbs: data.breadcrumbs,
        courseTitle: data.courseTitle,
        
        gotMainService: gotMainService,
        gotMediaLinks: gotMediaLinks,
        
        navMenu :navMenu,



      },
    };

  }else{

    return {
      props:{
        errorCame:true

      }
    }
  }



}



