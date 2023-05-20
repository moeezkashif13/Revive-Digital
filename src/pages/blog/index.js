import axios from "axios";
import { useEffect } from "react";
import Footer from "../../../Components/Footer";
import HeaderComp from "../../../Components/Header";
import { BreadCrumbs, EachBlogCard } from "../../../Components/Small";

export default function Blog({allBlogPosts}){

    console.log(allBlogPosts);
    
    return(

        
        <div>


<HeaderComp/>

<BreadCrumbs/>


<div className="px-28  pt-10 pb-20 bg-[#FAFAFA] flex flex-wrap justify-between gap-y-8">


{allBlogPosts.map((eachBlogDetail)=>{
    return <EachBlogCard  details={eachBlogDetail}   />
})}



</div>




<div className="flex justify-center gap-x-5 py-5 font-semibold ">

{[1,2,3,4,5].map(elem=>{
    return <div className="border border-primary text-primary underline px-3 py-1 ">{elem}</div>
})}


<div className="border border-primary text-primary px-3 py-1 ">...</div>

<div className="border border-primary text-primary px-3 py-1 underline ">Last</div>




</div>


<Footer/>



        </div>





    )


}


export const getServerSideProps = async ()=>{

    const fetchBlogPosts = await axios.get('http://localhost/revivedigitalbackend/wp-json/wp/v2/blog?_fields=title,excerpt,slug,featured_media').then(resp=>{
        return resp.data
    }).catch(err=>{
        console.log(err);
    })



    return {
        props:{
            allBlogPosts:fetchBlogPosts
        }
    }


}