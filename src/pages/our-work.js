import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import Footer from "../../Components/Footer";
import HeaderComp from "../../Components/Header";
import Header from "../../Components/Header";
import MasonryComp from "../../Components/Masonry";
import Navbar from "../../Components/Navbar";
import { BreadCrumbs } from "../../Components/Small";
import TempBread from "../../Components/Tempbread";



export default function OurWork({breadcrumbs,gotAllWork}){
   
    


const router = useRouter();

console.log(router);


    const splittedName = router.pathname.split('/')[1].split('-').join(' ')


    
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
      "text": splittedName,
      "url": "/careers"
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


 const breadCrumbsData = data.breadcrumbs.map((c) => {
        return {
          label: c.text,
          path: c.url,
        };
      })



    return(

<div>

{/* HEADERRRRR STARTTT */}


<HeaderComp  text={splittedName} />



{/* HEADERRRRR ENDDD */}


<TempBread items={breadCrumbsData} />




<div className="mb-6">
<MasonryComp gotAllWork={gotAllWork}  />
</div>






<Footer/>





</div>



    )


}




export const getStaticProps = async ()=>{


  const gotAllWork = await axios.get('http://localhost/revivedigitalbackend/wp-json/wp/v2/ourwork?order=desc').then (async resp=>{

    console.log(resp.data);
    
      const getAllWorksMediaIDS = resp.data.map(eachWork=>{
        return eachWork.featured_media
        
      });
  
      console.log(getAllWorksMediaIDS);
      
      
      const getWorkMediaURL = await axios.get(`http://localhost/revivedigitalbackend/wp-json/wp/v2/media?include=${[...getAllWorksMediaIDS]}`).then(gotMedia=>{
  
      // console.log(gotMedia.data);
      
      const main = getAllWorksMediaIDS.map(eachID=>{
        // console.log(eachID);
  
        const check =       gotMedia.data.filter(eachMedia=>{
          // console.log(eachMedia);
          return eachMedia.id == eachID
        })
  
        // console.log(check);
        return check[0]
  
  
      })    
  
  
      return main
  
  
    }).catch(errorObj=>{
        console.log(errorObj);
      })
  
  
      console.log(resp.data);
  
      console.log(getWorkMediaURL);
  
  
  
        return {
          data : resp.data,
          mediaURL : getWorkMediaURL
        }
  
    }).catch(err=>{
      console.log(err,'err err err');
    })


return {
  props : {
    gotAllWork: gotAllWork
  }
}




}







// export const getStaticProps = async ()=>{


//   const gotAllWork = await axios.get('http://localhost/revivedigitalbackend/wp-json/wp/v2/ourwork?order=desc').then
//   (resp=>{
  
//     const getAllWorksMediaIDS = resp.data.map(eachWork=>{
//       return eachWork.featured_media
      
//     });
  
//     console.log(getAllWorksMediaIDS,'getAllWorksMediaIDS getAllWorksMediaIDS');


//     const getWorkMediaURL = axios.get(`http://localhost/revivedigitalbackend/wp-json/wp/v2/media?include=${[...getAllWorksMediaIDS]}`).then(gotMedia=>{




    
//     }).catch(errorObj=>{
//       console.log(errorObj);
//     })


//     // console.log(resp.data);



//       return resp.data

//   }).catch(err=>{
//     console.log(err,'err err err');
//   })



  




//   return { 
//     props : {
//       gotAllWork : gotAllWork
//     }
//   }
  


// }


// export const getStaticProps = async (context)=>{


//     // TEMPPPPPPPPPPPPPP

//     console.log(context,'context context');



// return{
//   props:{
//     hello:'dadsad'
//   }
// }


    
// //     const splittedName = context.resolvedUrl.split('/')[1].split('-').join(' ')


// // const db = [
// // {
// //   "slug": "learn-python",
// //   "courseTitle": "Learn Python: Python for Beginners",
// //   "breadcrumbs": [
// //     {
// //       "text": "Home",
// //       "url": "/"
// //     },
// //     {
// //       "text": splittedName,
// //       "url": "/careers"
// //     },
 
// //   ]
// // }
// // ]


// // const slug = 'learn-python';
// // // simulate a call to the backend server here to get the data
// // const data = db.find((page) => page.slug === slug);
// // if (!data) {
// // return {
// //   notFound: true,
// // };
// // }

// // // TEMPPPPPPPP



// // return{
// //     props:{


// // // TEMPPPPPPPP
// // splittedName:splittedName,
// //         breadcrumbs: data.breadcrumbs,
// //         courseTitle: data.courseTitle,
// // // TEMPPPPPPPP



// //     }
// // }


// }



