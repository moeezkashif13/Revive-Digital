import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaHome } from "react-icons/fa"

export const BreadCrumbs = ()=>{

    return(

        <div className="pl-28 mt-12 mb-8 flex  space-x-2 items-center text-[#777777] font-medium">
    
    <div><FaHome/></div>
    
    <div>arw</div>
    
<p>our work</p>

    
     </div>

    )


}


export const CommonHeading = ({special="digital",main="marketing agency servicing essex and london"})=>(
    <div className=" text-primary">
  
    
    <p className="text-2xl font-semibold mb-6"><span className="relative  text-black">{special} 
  
    <span className="absolute w-full h-1 bg-[#EC0044] rounded-xl top-9 left-0"></span>
  
    </span> {main}</p>
  
    </div>
  )



  export const Quote = ()=>{
    return (
        <div className="px-28 py-6 bg-[#262729] text-primary flex  relative">


<div>

<div className="text-3xl font-bold relative">Life is trying things to see if they work.

<div className="absolute text-6xl -top-1 -left-10">"</div>


</div>

<p className="text-white mt-3 italic">Ray Bradbury</p>

</div>



</div>
    )
  }


  export const EachBlogCard = ({details})=>{

const [featuredImage,setFeaturedImage] = useState({
    message:'',
    imageAvailable:''
});
    

useEffect(()=>{
// ${details?.featured_image}
    
if(details?.featured_media>0){


     axios.get(`http://localhost/revivedigitalbackend/wp-json/wp/v2/media/${details.featured_media}`).then(resp=>{

        console.log(resp.data);

        setFeaturedImage({imageAvailable:true,message:resp.data.source_url})
    
        }).catch(err=>{
            console.log(err);
        })
    
}else{

    setFeaturedImage({imageAvailable:false,message:'No featured image available'})


}



},[])
   


    return <div className="w-[350px] bg-white">

    <div className="w-full h-[175px] ">
        
        {featuredImage.imageAvailable?
// https://revive.digital/wp-content/uploads/2020/03/understanding-Meta-pixel-720x340.png
        <img className="w-full h-full max-w-full object-cover" src={featuredImage.message} alt="" />


:   

<div className="bg-black text-center flex justify-center items-center text-2xl font-bold h-full text-primary">{featuredImage.message}</div>


    }




    </div>

<div className="py-4 px-2 space-y-5">

<p className="eachBlogCardHeading font-bold text-lg underline h-[85px] bg-red-500" dangerouslySetInnerHTML={{__html:details?.title?.rendered}}  ></p>


<p className="eachBlogCardExcerpt h-[145px]" dangerouslySetInnerHTML={{__html:details?.excerpt?.rendered}} ></p>


<div>
<Link href={`/blog/${details?.slug}`} style={{transition:'all 0.3s'}} className="hover:bg-primary hover:text-white hover:no-underline rounded-3xl underline px-7 font-medium text-primary py-1.5 border border-primary">
Read More
</Link>
</div>


</div>



</div>


  }




  export const DetailsSection = ({reverse,noFindOut,secondType})=>{
    return <div className={`flex ${secondType&&'gap-x-3.5'}  ${reverse&&'flex-row-reverse'} `}>


    <div className={`w-1/2 px-20 py-16  ${secondType&&'bg-[#FAFAFA]'} `}>


        <CommonHeading special="what"  main="we do" />


<div className="space-y-5 text-[#777777]">


<p>Revive are a full service digital marketing agency. We flourish when we look after your entire digital presence – from the rankings in Google, to the social media, the brand, the messages, and the website.</p>

<p>We came from website design, and that is still the primary vehicle we use to help promote your business online. But now we look at the big picture. How your logo and colours work along with your business stationery and livery. Your ranking in the search engines. Your paid marketing. Your social media. Conversion rates of visitors to enquiries and sales. Is your website actually working?</p>


<p>The services we offer are varied, but all tie together to form a digital arsenal, allowing you to grow your business and expand your brand online.</p>

{!noFindOut&&<div>

<Link className="border border-primary text-primary underline px-6 py-1.5 rounded-2xl" href="/">Find out more</Link>



</div>

}



</div>







    </div>

    <div className="w-1/2">

{/* <img  className="w-full max-w-full h-full object-cover" src="https://revive.digital/wp-content/uploads/2017/06/what-we-do.jpg" alt="" /> */}


    </div>





</div>
  }