import axios from "axios";
import { useEffect } from "react";
import CustomError from "../../../../../Components/CustomError";
import Footer from "../../../../../Components/Footer";
import HeaderComp from "../../../../../Components/Header";
import { BreadCrumbs, CommonHeading, DetailsSection } from "../../../../../Components/Small";
import TempBread from "../../../../../Components/Tempbread";




export default function Check({errorCame,breadcrumbs,gotMainService,gotMediaLinks}){


  
  if(errorCame){
    return <CustomError/>
  }





        const breadCrumbsData = breadcrumbs.map((c) => {
          return {
            label: c.text,
            path: c.url,
          };
        })

        
    

    return(
        <div>
            




<HeaderComp specialAppearanceFields={gotMainService.custom_fields} anotherAppearance={true}   />

<TempBread items={breadCrumbsData} />



<DetailsSection   secondType={true}  />



{/*  */}


<div className="py-14">


<p className="text-center mb-12 text-[#262729] font-semibold text-3xl">Fabulous clients we work with</p>

<div className="px-28  flex flex-wrap justify-between gap">
    
    
    {gotMediaLinks?gotMediaLinks.map((eachLogo)=>{
        return <div className=" w-[90px]   flex items-center  ">

            <img   className=" max-w-full  object-contain   " src={eachLogo.source_url} alt="" />

        </div>

    }):<div className="font-semibold text-2xl text-primary mx-auto">No images available</div>}



{/* <div className=" bg-blue-500 flex items-center  ">

            <img   className=" max-w-full  " src="/layslogo.png" alt="" />

        </div> */}


</div>




</div>





{/*  */}


<DetailsSection  secondType={true} reverse={true} />




{/*  */}


<div className="my-4">


<div className="bg-[#262729] text-white py-8 text-center">


<p className="text-2xl font-medium">What do our clients say</p>


<p className="px-32 text-primary my-4 text-2xl font-medium leading-[2.3rem]">"I have been using Revive since 2005 for our website builds and digital marketing. Not only do they build excellent websites with reliable back end technology they know how to get the best out of e-marketing. A team of experts who have the experience and knowledge to make your website and marketing work."</p>


<p className="font-bold">Ian Banks</p>


</div>

</div>



{/*  */}


<div className="mb-4 flex gap-x-4 px-4">


<div className="bg-green-300 w-[390px] min-w-[390px]">

        <img className="w-full max-h-full h-full object-cover" src="https://revive.digital/wp-content/uploads/2017/07/e-commerce-websites-contact.jpg" alt="" />


</div>



<div className="bg-[#FAFAFA]   space-y-6 py-28 pl-20 pr-12">
    

<CommonHeading  special="contact" main="" />


<p className="text-[#777777] ">Sound appealing? If you’re in need of a new ecommerce site, the Revive team can help. Simply fill out the contact form and specify your request, and one of our team will be in contact to discuss your new shopping site.</p>


<div className="px-6 flex flex-wrap justify-between  gap-y-4">


{['Name','Email','Phone'].map((elem)=>{

    return <div className="w-[230px] ">

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
  

const gotMainService =  await axios.get(`http://localhost/revivedigitalbackend/wp-json/wp/v2/eachservice?slug=${serviceName}`).then(resp=>{
    // console.log(resp.data,'resp.data resp.data resp.data');
  return resp.data;


  }).catch(err=>{
    console.log('thissss service does notttt existttt');
    return err;
  })

  console.log(gotMainService);

  if(gotMainService.length>0){

    console.log(gotMainService[0],);

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


  const getCompanyLogos = Object.keys(custom_fields).filter(eachField=>{
    return eachField.includes('company-logo')
  }).map(eachLogo=>{

    return custom_fields[eachLogo][0]

  })



let gotMediaLinks;

  if(getCompanyLogos.length>0){

 await axios.get(`http://localhost/revivedigitalbackend/wp-json/wp/v2/media?include=${[...getCompanyLogos]}`).then(media=>{

 console.log(media.data,'media.datamedia.data media.data')

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

    return {

      props: {
        breadcrumbs: data.breadcrumbs,
        courseTitle: data.courseTitle,
        
        gotMainService: gotMainService,
        gotMediaLinks: gotMediaLinks,
      
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



