
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { BreadCrumbs } from "../../Components/Small";
import TempBread from "../../Components/Tempbread";
import axiosClient from "../../utils/axiosClient";

export default function OurClients({ allURLS,navMenu }) {
  
  
  const router = useRouter()

  
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







  return (
    <div>
      <Header navMenu={navMenu} text={splittedName} />

      <TempBread items={breadCrumbsData} />

      <div className="flex flex-wrap justify-center lg:justify-start gap-[1.78rem] bg-[#fafafa] px-mobilePadding lg:px-8   py-12 ">
        {allURLS.map((eachURL) => {
          return (
            <div className="flex  h-[120px] w-[190px] items-center bg-white">
              <img
                className="w-full max-w-full h-full object-contain"
                src={eachURL.source_url}
                alt=""
              />
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}


export const getStaticProps = async()=>{

  const allURLS = await axiosClient.get('/ourclienttype').then(resp=>{

  
    const getMediaURLS = resp.data.map(eachClient=>{
      return eachClient.featured_media
    })


    const getSourceMedia = axiosClient.get(`/media?include=${[...getMediaURLS]}`).then(media=>{

    return media.data
    }).catch(errorObj=>{
      console.log(errorObj);
      return false
    })

    return getSourceMedia


  }).catch(err=>{
    console.log(err);
return false
  })


  const navMenu =  await axios.get('https://workingrevivedigital.000webhostapp.com/wp-json/wp-api-menus/v2/menus/3').then(resp=>{
  
return resp.data.items
    
    })

  return {
    props : {
      allURLS: allURLS,
      navMenu : navMenu,
    }
  }

}


// export const getServerSideProps = async (context) => {
//   // TEMPPPPPPPPPPPPPP

  // const splittedName = context.resolvedUrl.split("/")[1].split("-").join(" ");

  // const db = [
  //   {
  //     slug: "learn-python",
  //     courseTitle: "Learn Python: Python for Beginners",
  //     breadcrumbs: [
  //       {
  //         text: "Home",
  //         url: "/",
  //       },
  //       {
  //         text: splittedName,
  //         url: "/careers",
  //       },
  //     ],
  //   },
  // ];

  // const slug = "learn-python";
  // // simulate a call to the backend server here to get the data
  // const data = db.find((page) => page.slug === slug);
  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }

//   // TEMPPPPPPPP

//   return {
//     props: {
//       // TEMPPPPPPPP
//       splittedName: splittedName,
//       breadcrumbs: data.breadcrumbs,
//       courseTitle: data.courseTitle,
//       // TEMPPPPPPPP
//     },
//   };
// };
