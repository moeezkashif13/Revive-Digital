import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";

import Footer from "../../../../Components/Footer";
import HeaderComp from "../../../../Components/Header";
import { BreadCrumbs, CommonHeading } from "../../../../Components/Small";

export default function Article(){


    useEffect(()=>{

        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=5aea4aa14be64107b9738a71075107b2').then(resp=>{
            console.log(resp.data);
        }).catch(err=>{
            console.log(err);
        })



    },[])




    return(

        <div>

<HeaderComp special="understanding" main="and implementing the meta pixel (formerly facebook pixel)"  />


<BreadCrumbs/>


<div className="flex px-28 gap-x-8 mb-8">


<div className="w-3/4  pr-8 space-y-5 text-lg text-[#777777]">
    

<p>19/04/2023</p>



{[1,2,3,4].map(()=>{
    return <>
        <p>If you are currently using Facebook or Instagram Ads, or plan on using them in the future, there’s one important tool that you should start using straight away.  The Facebook Pixel, now the Meta Pixel, will help you better analyse what’s going on and get the very most of your social media marketing budget. Here’s what you need to know about it and how it works.</p>

<img src="https://revive.digital/wp-content/uploads/2020/03/what-is-a-meta-pixel-1024x576.png" alt="" />


<p>We are looking for a Computer Science (or similar) graduate to join our team as a trainee developer. We will consider candidates with experience, but this role is aimed at new graduates.</p>


<p>You will work as part of Revive’s development team, and will work on a variety of back-end web projects, further your skills in programming, and learn app development and database design and management.</p>
    </>
})}






<p>The ideal candidate needs to be a motivated, quick self-learner, but also be able to take instruction and be comfortable working well with others. Ideally you should love solving problems, enjoy elegant solutions, and be prepared to work hard to do things the right way.</p>


<p>Our agency works on both open-source and established development stacks – so a strong foundation in programming is helpful as you will be involved with a number of languages.</p>


<p>If you don’t like problem solving or a challenge – this probably isn’t for you.</p>

<p>Our culture is friendly and fun – we don’t do office politics, and we support each other in our respective roles. We all work for a common goal, which is our clients’ success – we celebrate when they get results. We do pizzas once a month, dress smart casual during the week and dress down on Fridays. We get down the pub for the occasional drink, and we party hard at Christmas! The culture is work hard, but enjoy the work.</p>




</div>


<div className="w-1/4 space-y-12">
    
<div>
<CommonHeading   special="recent" main="posts"  />

<div className="pl-6 font-semibold flex flex-col gap-y-6 pt-4">

{[1,2,3,4].map(()=>{

return <>

<Link className="underline" href="/">What is Content Syndication in Digital Marketing?</Link>

<Link className="underline" href="/">Keeping up with the algorithm: social media updates to have on your radar</Link>

</>


})}





</div>


</div>



<div>
<CommonHeading   special="categories" main=""  />

<div className="pl-6 font-semibold flex flex-col gap-y-4 pt-4">


{[1,2,3,4,5,6,7].map(()=>{
    return <>

<Link  href="/"><span className="underline">Advertising</span> (2) </Link>

<Link  href="/"><span className="underline">Branding</span> (2) </Link>


</>


})}






</div>


</div>


</div>




</div>





<Footer/>




        </div>


    )



}