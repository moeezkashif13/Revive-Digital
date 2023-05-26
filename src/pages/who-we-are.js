
import Link from "next/link";
import { useEffect } from "react";

import Footer from "../../Components/Footer";
import HeaderComp from "../../Components/Header";
import {
  BreadCrumbs,
  CommonHeading,
  EachBlogCard,
  Quote,
} from "../../Components/Small";
import axiosClient from "../../utils/axiosClient";

function isNumeric(str) {
  if (typeof str != "string") return false; // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
}

export default function WhoWeAre({ custom_fields, fetchMediaURL, fetchBlogs }) {
  
  
  const getTeamMembers = Object.keys(custom_fields).filter((eachField) =>
    eachField.includes("who-we-are-team")
  );

  const chunkSize = 3;
  const teamMembers = [];

  for (let i = 0; i < getTeamMembers.length; i += chunkSize) {
    const chunk = getTeamMembers.slice(i, i + chunkSize);
    teamMembers.push(chunk);
  }

  const detailsSectHeading =
    custom_fields["who-we-are-details-section-heading"][0].split(" ");

  const firstword = detailsSectHeading[0];

  let remainingWords = detailsSectHeading.slice(1).join(" ");

  const detailsSectHeadingFirst =
    custom_fields["who-we-are-details-section-heading_1"][0].split(" ");

  const secondword = detailsSectHeadingFirst[0];

  let secondremainingWords = detailsSectHeadingFirst.slice(1).join(" ");

  return (
    <div>
      {/* <HeaderComp text="who we are" /> */}

      {/* <BreadCrumbs /> */}

      {/*  */}

      <div className="mb-16 mt-16 flex flex-col md:flex-row gap-y-6 md:gap-y-0  gap-x-16 px-mobilePadding  md:px-tabletPadding  lg:px-desktopPadding lg:px text-[15px]">
        <div className="w-full md:w-1/2">
          <CommonHeading special={firstword} main={remainingWords} />

          <div
            className="flex flex-col gap-y-5"
            dangerouslySetInnerHTML={{
              __html: custom_fields["who-we-are-details-section-paragraph"][0],
            }}
          >
            {/* <p>
              Your website, your brand, your logo, your colours. Your letters,
              business cards, your packaging, your lorries, your cars. Your
              advertising.
            </p>

            <p>They all make a statement about you.</p>

            <p>
              Revive isn’t just websites, or graphics. We’re not just keywords
              and acronyms. We understand. We seek to learn what makes you tick,
              and what your customers see in you, and want from you. We
              visualise you, your vision and message, and we monitor, analyse
              and improve, constantly, consistently.
            </p>

            <p>
              We’re your partner. We don’t work for you, but we do work with
              you. We’ll be clear – and we’ll tell you if something isn’t right.
              We’ll always listen, always help. We won’t try and do anything
              we’re not really good at. When you work with Revive, you expect
              excellence, clarity, and results. We deliver.
            </p> */}
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <CommonHeading special={secondword} main={secondremainingWords} />

          <div
            className="flex flex-col gap-y-5"
            dangerouslySetInnerHTML={{
              __html:
                custom_fields["who-we-are-details-section-paragraph_1"][0],
            }}
          >
            {/* <p>
              Your website, your brand, your logo, your colours. Your letters,
              business cards, your packaging, your lorries, your cars. Your
              advertising.
            </p>

            <p>They all make a statement about you.</p>

            <p>
              Revive isn’t just websites, or graphics. We’re not just keywords
              and acronyms. We understand. We seek to learn what makes you tick,
              and what your customers see in you, and want from you. We
              visualise you, your vision and message, and we monitor, analyse
              and improve, constantly, consistently.
            </p>

            <p>
              We’re your partner. We don’t work for you, but we do work with
              you. We’ll be clear – and we’ll tell you if something isn’t right.
              We’ll always listen, always help. We won’t try and do anything
              we’re not really good at. When you work with Revive, you expect
              excellence, clarity, and results. We deliver.
            </p> */}
          </div>
        </div>
      </div>

      {/*  */}

      <div className="bg-[#FAFAFA] px-mobilePadding md:px-tabletPadding lg:px-desktopPadding py-12">
        <CommonHeading special="our" main="blog" />

        <div className="flex flex-wrap justify-center md:justify-between gap-y-8">
          {fetchBlogs.map((eachArticle) => {
            return <EachBlogCard details={eachArticle} />;
          })}
        </div>

        <div className="mt-7 text-right">
          <Link href="/blog" className="font-bold underline   ">
            VIew all articles
          </Link>
        </div>
      </div>

      {/*  */}

      <Quote
        author={custom_fields["who-we-are-quote-author"]}
        quote={custom_fields["who-we-are-quote-quote"]}
      />

      {/*  */}

      <div className="bg-[#FAFAFA] px-mobilePadding md:px-tabletPadding lg:px-desktopPadding py-10">
        <CommonHeading special="meet" main="the team" />

        <div className="flex flex-wrap justify-center lg:justify-between  gap-x-4 gap-y-10">
          {teamMembers.map((eachTeamMember, index) => {
            const firstElement = eachTeamMember.splice(0, 1);
            const secondElment = eachTeamMember.splice(0, 1);
            const thirdElement = eachTeamMember.splice(0, 1);

            const mediaID = custom_fields[thirdElement[0]];

            const findLinkedMedia = fetchMediaURL.find((eachMedia) => {
              return eachMedia.id == mediaID;
            });

            return (
              <div className="w-[245px]">
                <div className=" h-[245px] w-full bg-white ">
                  <img
                    className=" h-full   w-full max-w-full object-contain  "
                    src={findLinkedMedia?.source_url}
                    alt=""
                  />
                </div>

                <div className="bg-white px-4 py-3 font-bold">
                  <p className="uppercase">{custom_fields[firstElement[0]]}</p>
                  <p className="mt-1 text-primary">
                    {custom_fields[secondElment[0]]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/*  */}

      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const fetchBlogs = await axiosClient
    .get("/blog?per_page=5")
    .then((resp) => {
      return resp.data;
    })
    .catch((err) => {
      console.log(err);

      return false;
    });

  const WhoWeAreData = await axiosClient
    .get("/whoweare")
    .then((resp) => {
      return resp.data[0];
    })
    .catch((err) => {
      console.log(err);
      return false;
    });

  const { custom_fields } = WhoWeAreData;

  delete custom_fields["_edit_last"];
  delete custom_fields["_edit_lock"];

  const getMediaID = Object.values(custom_fields).filter((eachField) => {
    return isNumeric(eachField[0]);
  });

  const allToSingleArray = getMediaID.map((eachID) => eachID[0]);

  const fetchMediaURL = await axiosClient
    .get(
      `/media?include=${[
        ...allToSingleArray,
      ]}`
    )
    .then((mediaURLS) => {
      return mediaURLS.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      // WhoWeAreData: WhoWeAreData,

      fetchBlogs: fetchBlogs,

      custom_fields: custom_fields,

      fetchMediaURL: fetchMediaURL,
    },
    revalidate:60,

  };
};
