
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { BreadCrumbs } from "../../Components/Small";
import TempBread from "../../Components/Tempbread";
import axiosClient, { menuFetchURL } from "../../utils/axiosClient";
import fetchWholeNavbar from "../../utils/fetchWholeNavbar";

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
        {allURLS.length>0?allURLS.map((eachURL,index) => {
          return (
            <div key={index} className="flex  h-[120px] w-[190px] items-center bg-white">
              <img
                className="w-full max-w-full h-full object-contain"
                src={eachURL.source_url}
                alt={eachURL.alt_text}
              />
            </div>
          );
        }):<div className="text-2xl mx-auto text-primary font-semibold text-center">

          Error in fetching. Please try again.

          </div>}
      </div>

      <Footer />
    </div>
  );
}


export const getStaticProps = async()=>{

  let allURLS;

  try {

   const resp = await axiosClient.get('/ourclienttype?per_page=100')

    const getMediaURLS = resp.data.map(eachClient=>{
      return eachClient.featured_media
    });


    const getSourceMedia = await axiosClient.get(`/media?include=${[...getMediaURLS]}&per_page=100`)

    allURLS = getSourceMedia.data;



} catch (error) {
    
    allURLS = []


}



  const navMenu =  await fetchWholeNavbar();
    
  
  return {
    props : {
      allURLS: allURLS,
      navMenu : navMenu,
    },
    revalidate:10,

  }

}

