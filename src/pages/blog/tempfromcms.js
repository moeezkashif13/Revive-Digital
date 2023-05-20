import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../../../Components/Footer";
import HeaderComp from "../../../Components/Header";
import { BreadCrumbs, CommonHeading } from "../../../Components/Small";




export default function TempFromCMS(){


    const [blogCategories,setBlogCategories] = useState([])

    const [article,setArticle] = useState({});


    useEffect(()=>{

const fetchBlogCategories = async ()=>{

  axios.get('http://localhost/revivedigitalbackend/wp-json/wp/v2/blog-category?per_page=50').then(resp=>{
    
    setBlogCategories(resp.data)
  }).catch(err=>{
    console.log(err);
  })

}

fetchBlogCategories()



const fetchArticle = ()=>{

    axios.get('http://localhost/revivedigitalbackend/wp-json/wp/v2/blog/181').then(resp=>{
        console.log(resp.data);
        setArticle(resp.data)
    })


}


fetchArticle();


    },[])


useEffect(()=>{

    document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach((check,index)=>{
        // console.log(check);

        check.classList.add(`heading${String(check.nodeName).toLowerCase()}`)

        check.style.color = '#262729'
    })

document.querySelectorAll('ul').forEach(eachUL=>{
    eachUL.classList.add('space-y-5')
    eachUL.classList.add('pl-12')
    eachUL.style.listStyleType='disc'
})

document.querySelectorAll('blockquote').forEach(eachBlockquote=>{

    eachBlockquote.querySelectorAll('span').forEach(eachSpan=>{
        eachSpan.style = '';

        eachSpan.classList.add('leading-8','italic');
    })

    

    eachBlockquote.style.borderLeft = '5px solid #ec0044'

    eachBlockquote.classList.add('relative','space-y-5','bg-[#ffecf1]','text-[1.15rem]','font-bold','px-5','py-3');


    const quoteSign = document.createElement('div');

    quoteSign.textContent=' " '

    quoteSign.classList.add('text-primary','text-[6.5rem]','absolute','-right-5','-bottom-7')


    eachBlockquote.appendChild(quoteSign)




    
})


},[article])





    return(


        <div>

<HeaderComp special="understanding" main="and implementing the meta pixel (formerly facebook pixel)"  />


<BreadCrumbs/>



<div className="flex px-28 gap-x-8 mb-8">


<div className="w-3/4  pr-8 space-y-5 text-lg text-[#777777]">
    

<p>19/04/2023</p>


{/* CONTENTTT STARTTT HEREEE */}

<div className="space-y-5" dangerouslySetInnerHTML={{__html:article?.content?.rendered}}></div>


        {/* <p>If you are currently using Facebook or Instagram Ads, or plan on using them in the future, there’s one important tool that you should start using straight away.  The Facebook Pixel, now the Meta Pixel, will help you better analyse what’s going on and get the very most of your social media marketing budget. Here’s what you need to know about it and how it works.</p>

<img src="https://revive.digital/wp-content/uploads/2020/03/what-is-a-meta-pixel-1024x576.png" alt="" />


<p>We are looking for a Computer Science (or similar) graduate to join our team as a trainee developer. We will consider candidates with experience, but this role is aimed at new graduates.</p>


<p>You will work as part of Revive’s development team, and will work on a variety of back-end web projects, further your skills in programming, and learn app development and database design and management.</p>



<p>The ideal candidate needs to be a motivated, quick self-learner, but also be able to take instruction and be comfortable working well with others. Ideally you should love solving problems, enjoy elegant solutions, and be prepared to work hard to do things the right way.</p>


<p>Our agency works on both open-source and established development stacks – so a strong foundation in programming is helpful as you will be involved with a number of languages.</p>


<p>If you don’t like problem solving or a challenge – this probably isn’t for you.</p>

<p>Our culture is friendly and fun – we don’t do office politics, and we support each other in our respective roles. We all work for a common goal, which is our clients’ success – we celebrate when they get results. We do pizzas once a month, dress smart casual during the week and dress down on Fridays. We get down the pub for the occasional drink, and we party hard at Christmas! The culture is work hard, but enjoy the work.</p> */}


{/* CONTENTTT ENDDD HEREEE */}




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


{blogCategories.map((eachCategory)=>{
    return <Link  href={`/blog/category/${eachCategory.slug}`}><span className="underline">{eachCategory.name}</span> ({eachCategory.count}) </Link>

    

})}






</div>


</div>


</div>




</div>





<Footer/>




        </div>




    )



}