
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import Footer from "../../Components/Footer";
import HeaderComp from "../../Components/Header";
import Header from "../../Components/Header";
import MasonryComp from "../../Components/Masonry";
import Navbar from "../../Components/Navbar";
import { BreadCrumbs, Loader } from "../../Components/Small";
import TempBread from "../../Components/Tempbread";
import axiosClient, { menuFetchURL } from "../../utils/axiosClient";
import fetchWholeNavbar from "../../utils/fetchWholeNavbar";

export default function OurWork(props) {
  const router = useRouter();

  // console.log(props,'propsss frommm clientttt');

  const splittedName = router.pathname.split("/")[1].split("-").join(" ");

  const db = [
    {
      slug: "learn-python",
      courseTitle: "Learn Python: Python for Beginners",
      breadcrumbs: [
        {
          text: "Home",
          url: "/",
        },
        {
          text: splittedName,
          url: "/careers",
        },
      ],
    },
  ];

  const slug = "learn-python";
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
  });

  const gotAllWork = {data:props.gotAllWork,mediaURL:props.getWorkMediaURL}

  return (
    <div>
      {/* HEADERRRRR STARTTT */}

      <HeaderComp navMenu={props.navMenu} text={splittedName} />

      {/* HEADERRRRR ENDDD */}

      <TempBread items={breadCrumbsData} />

      <div className="mb-6">


{props.hasOwnProperty('globalError')&&props.globalError ? <div className="flex flex-col items-center py-5">
  
  <Loader/>

<p className="mt-8 text-4xl text-primary">{props.globalError}</p>


</div>

:


         <MasonryComp  gotAllWork={gotAllWork}  /> 

}



      </div>

      <Footer />
    </div>
  );
}



export const getStaticProps = async()=>{

  let gotAllWork = false;
  let getWorkMediaURL = false;
  let globalError = false;

  try {
    
    

  try {
    
    const resp = await axiosClient.get('/ourworktype?order=desc');

    const removeFalsyValue = resp.data.filter(eachWork=>{
      return eachWork.featured_media!==0
    });

    gotAllWork = removeFalsyValue;

    
  } catch (error) {


    // gotAllWork = {fetchingError:true,message : 'Error in fetching'}

    throw new Error('Error in fetching work')
    
    

  }



const getAllWorksMediaIDS = gotAllWork.map((eachWork) => {
  return eachWork.featured_media;
});



try { 

  const fetchingMedia = await axiosClient.get(`/media?include=${[...getAllWorksMediaIDS]}`  )

  const main = getAllWorksMediaIDS.map((eachID) => {

                const check = fetchingMedia.data.filter((eachMedia) => {
                  
                  return eachMedia.id == eachID;
                });
    
                return check[0];
    
    
              });
    
  getWorkMediaURL = main;

  
} catch (error) {


  throw new Error('Error in fetching media')

  // getWorkMediaURL = {mediaFetchingError:true,message:'mediaaa fetchingg me errorrrr aagyaaa'}
  
}

} catch (error) {

  globalError = error.message;
  console.log(error.message,'error.message error.message error.message');
    
}



const navMenu = await fetchWholeNavbar();





  return {
    props : {

      navMenu : navMenu,

globalError : globalError,
gotAllWork : gotAllWork,
  getWorkMediaURL : getWorkMediaURL


    }
  }



}







// export const getStaticProps = async () => {

//   let gotAllWork;

// try {
  

//   gotAllWork = await axiosClient
//     .get(
//       "/ourworktype?order=desc"
//     )
//     .then(async (resp) => {
     
//       console.log('i ammm onlyy insidee our work type then blockkk');

      // const removeFalsyValue = resp.data.filter(eachWork=>{
      //   return eachWork.featured_media!==0
      // });

      // const getAllWorksMediaIDS = removeFalsyValue.map((eachWork) => {
      //   return eachWork.featured_media;
      // });

      
//       const getWorkMediaURL = await axiosClient
//         .get(
//           `/mediaaaaa?include=${[...getAllWorksMediaIDS]}`
//         )
//         .then((gotMedia) => {

//           console.log('i willl nottt loggg in');

//           const main = getAllWorksMediaIDS.map((eachID) => {

//             const check = gotMedia.data.filter((eachMedia) => {
              
//               return eachMedia.id == eachID;
//             });

//             return check[0];


//           });

//           // console.log(main,'main main main');


//           return main;
//         })
//         .catch((errorObj) => {
// console.log('errorr in fetchnggg mediaaa');
//       throw new Error('Fetching media  error')

//         });

//       return {
//         data: removeFalsyValue,
//         mediaURL: getWorkMediaURL,
//       };
//     })
//     .catch((err) => {

//       // console.log(err, "errrorrrr aaagyaaaaaaa");
//       throw new Error('error aaaggyaaaa our work type wale catch block se')
//     });


//   } catch (error) {

//     gotAllWork = {errorInFetching:true,message:error.message}
    
//   }
  


//     const navMenu =  await axios.get(menuFetchURL).then(resp=>{
  
// return resp.data.items
    
//     })
    
    
//   return {
//     props: {
//       gotAllWork: gotAllWork,
//       navMenu : navMenu
//     },
//     revalidate:10,

//   };
// };

// export const getStaticProps = async ()=>{

//   const gotAllWork = await axios.get('https://workingrevivedigital.000webhostapp.com/wp-json/wp/v2/ourwork?order=desc').then
//   (resp=>{

//     const getAllWorksMediaIDS = resp.data.map(eachWork=>{
//       return eachWork.featured_media

//     });

//     console.log(getAllWorksMediaIDS,'getAllWorksMediaIDS getAllWorksMediaIDS');

//     const getWorkMediaURL = axios.get(`https://workingrevivedigital.000webhostapp.com/wp-json/wp/v2/media?include=${[...getAllWorksMediaIDS]}`).then(gotMedia=>{

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
