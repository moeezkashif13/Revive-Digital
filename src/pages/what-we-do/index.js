import axios from "axios";
import { useEffect } from "react";
import Footer from "../../../Components/Footer";
import HeaderComp from "../../../Components/Header";
import { BreadCrumbs, CloneDetailsSection, CommonHeading, DetailsSection } from "../../../Components/Small";
import axiosClient, { menuFetchURL } from "../../../utils/axiosClient";
import fetchWholeNavbar from "../../../utils/fetchWholeNavbar";
import { extractFields, fetchDetailsSectionImages } from "../../../utils/utils";

export default function WhatWeDo({whatWeDoData,fetchMedia}){


const {custom_fields} = whatWeDoData


const extractHeadings = extractFields(custom_fields,"what-we-do-details-section-heading")
const extractParagraphs = extractFields(custom_fields,"what-we-do-details-section-paragraph")
const extractMedia = extractFields(custom_fields,"what-we-do-details-section-image-video")
const extractFindOutButton = extractFields(custom_fields,"what-we-do-details-section-find-out-more-button")



    return(


        <div >


{/* <HeaderComp navMenu={navMenu} special="What" main="we do" /> */}


<BreadCrumbs/>



<div>


{extractHeadings.map((elem,index)=>{

const getRelavantHeading = custom_fields[extractHeadings[index]][0]
const getRelavantParagraph = custom_fields[extractParagraphs[index]][0]
const getRelavantMediaID = custom_fields[extractMedia[index]][0]
const getFindOutButton = custom_fields[extractFindOutButton[index]][0]

const getMainImage = fetchMedia.filter(eachMediaID=>{
    return getRelavantMediaID == eachMediaID.id;
})[0]


const content = {heading:getRelavantHeading,paragraph:getRelavantParagraph,findOutButton:getFindOutButton,image : getMainImage}



return <CloneDetailsSection content={content}  key={index} noFindOut={!content.findOutButton} reverse={index%2==0&&true}  />

})}



</div>






<Footer/>




        </div>



    )


}


export const getStaticProps = async()=>{


    try {


    const whatWeDoData = await axiosClient.get('/whatwedo?_fields=custom_fields');


    const {custom_fields} = whatWeDoData.data[0];

const extractMediaIDS = extractFields(custom_fields,"what-we-do-details-section-image-video").map(eachKey=>{
    return custom_fields[eachKey][0]
})

const fetchMedia = await fetchDetailsSectionImages(extractMediaIDS);



        
    // const navMenu =  await fetchWholeNavbar();

    return {
        props : {
            whatWeDoData : whatWeDoData.data[0],
            fetchMedia : fetchMedia,
            // navMenu : navMenu,
        },
    revalidate:10,

    }

} catch (error) {
        
    return {
        props : {
            
            error : true,
        },
        revalidate : 60,
    }
    
}




}