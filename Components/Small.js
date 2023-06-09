import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import axiosClient from "../utils/axiosClient";
import { splittingText } from "../utils/utils";

export const BreadCrumbs = () => {
  return (
    <div className="mb-8 mt-12 flex items-center  space-x-2 pl-mobilePadding lg:pl-28 font-medium text-[#777777]">
      <div>
        <FaHome />
      </div>

      <div>arw</div>

      <p>our work</p>
    </div>
  );
};

export const CommonHeading = ({
  special = "digital",
  main = "marketing agency servicing essex and london",
}) => (
  <div className=" text-primary capitalize">
    <p className="mb-6 text-2xl font-semibold ">
      <span className="relative  text-black">

      {special}
  

        <span className="absolute left-0  top-7 lg:top-7 h-1 w-full rounded-xl bg-[#EC0044]"></span>
      </span>{" "}
      {main}
    </p>
  </div>
);

export const Quote = ({ author, quote }) => {
  return (
    <div className="relative flex bg-[#262729] px-[50px] md:px-[75px] lg:px-desktopPadding py-6  text-primary">
      <div>
        <div className="relative text-3xl font-bold">
          {quote}

          <div className="absolute -left-8 top-0 lg:-left-10 lg:-top-1 text-6xl">"</div>
        </div>

        <p className="mt-3 italic text-white">{author}</p>
      </div>
    </div>
  );
};

export const EachBlogCard = ({ details }) => {
  const [featuredImage, setFeaturedImage] = useState({
    message: "",
    imageAvailable: "",
  });

  useEffect(() => {
    // ${details?.featured_image}

    if (details?.featured_media > 0) {
      axiosClient
        .get(
          `/media/${details.featured_media}`
        )
        .then((resp) => {

          setFeaturedImage({
            imageAvailable: true,
            message: resp.data.source_url,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setFeaturedImage({
        imageAvailable: false,
        message: "No featured image available",
      });
    }
  }, []);

  return (
    <div className="w-[350px] bg-white">
      <div className="h-[175px] w-full ">
        {featuredImage.imageAvailable ? (
          // https://revive.digital/wp-content/uploads/2020/03/understanding-Meta-pixel-720x340.png
          <img
            className="h-full w-full max-w-full object-cover"
            src={featuredImage.message}
            alt=""
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-black text-center text-2xl font-bold text-primary">
            {featuredImage.message}
          </div>
        )}
      </div>

      <div className="space-y-5 px-2 py-4">
        <span
          className="eachBlogCardHeading h-[56px] text-lg font-bold underline "
          dangerouslySetInnerHTML={{ __html: details?.title?.rendered }}
        ></span>

        <span
          className="eachBlogCardExcerpt h-[145px]"
          dangerouslySetInnerHTML={{ __html: details?.excerpt?.rendered }}
        ></span>

        <div>
          <Link
            href={`/blog/${details?.slug}`}
            style={{ transition: "all 0.3s" }}
            className="rounded-3xl border border-primary px-7 py-1.5 font-medium text-primary underline hover:bg-primary hover:text-white hover:no-underline"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export const DetailsSection = ({ reverse, noFindOut, secondType,details,index,allMedia }) => {
  

  const heading = index==0?details['heading']:details[`heading_${index}`]

  const splitText = heading.split(" ");

  const getFirstWord = splitText.shift();

  const joiningRemainingWords = splitText.join(" ");


  const paragraph = index==0?details['paragraph']:details[`paragraph_${index}`]

  const image = index==0?details['image']:details[`image_${index}`];

  const getLinkedImage = allMedia.filter(eachMedia=>eachMedia.id==image)
  

  const backgroundColor = index==0?details['background-color']:details[`background-color_${index}`]
  
  

  return (
    <div
      className={`flex flex-col lg:flex-row ${secondType && "gap-x-3.5"}  ${
        reverse && "lg:flex-row-reverse"
      } `}
    >
      <div className={`w-full lg:w-1/2 px-mobilePadding lg:px-20 py-8 lg:py-16  ${secondType && "bg-[#FAFAFA]"} `}>
        <CommonHeading  special={getFirstWord} main={joiningRemainingWords} />

        <div className="space-y-5 text-[#777777]" dangerouslySetInnerHTML={{__html:paragraph}} >
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
          </p> */}

          {/* {!noFindOut && (
            <div>
              <Link
                className="rounded-2xl border border-primary px-6 py-1.5 text-primary underline"
                href="/"
              >
                Find out more
              </Link>
            </div>
          )} */}
        </div>
      </div>

      <div className={`w-full lg:w-1/2 h-[400px] lg:h-auto ` } style={{backgroundColor:backgroundColor}}  >
        
        {getLinkedImage[0].mime_type=='video/mp4'?

<div className="w-full h-full videoElem">
<video  className="object-cover w-full h-full" autoPlay loop muted playsinline>
          <source src={getLinkedImage[0].source_url} type="video/mp4" />
        </video>
        </div>   
        
        
        :



        
        <img  className="w-full max-w-full h-full object-cover" src={getLinkedImage[0].source_url} alt="" />

      }



      </div>
    </div>
  );
};


export const CloneDetailsSection = ({ content,reverse, noFindOut, secondType }) => {

  const splitText = splittingText(content.heading)

  return (
    <div
      className={`flex flex-col lg:flex-row   ${secondType && "gap-x-3.5"}  ${
        reverse && "lg:flex-row-reverse "
      } `}
    >
      <div className={`w-full lg:w-1/2 px-mobilePadding lg:px-20 py-8 lg:py-16  ${secondType && "bg-[#FAFAFA]"} `}>
        <CommonHeading   special={splitText[0]} main={splitText[1]} />

        <div className="space-y-5 text-[#777777]" dangerouslySetInnerHTML={{__html:content.paragraph}} >
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
          </p> */}

         
        </div>

        {!noFindOut && (
            <div className="mt-6">
              <Link target={"_blank"}
                className="rounded-2xl border border-primary px-6 py-1.5 text-primary underline"
                href={content.findOutButton}
              >
                Find out more
              </Link>
            </div>
          )}

      </div>

      <div className={`w-full lg:w-1/2 h-[400px] lg:h-auto  ` }  >
        



        
        <img  className="w-full max-w-full h-full object-cover" src={content.image.source_url} alt="" />




      </div>
    </div>
  );
};


export const Loader = () => {
  return <div className="lds-dual-ring"></div>;
};
