import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../../../../Components/Footer";
import HeaderComp from "../../../../Components/Header";
import { BreadCrumbs, EachBlogCard } from "../../../../Components/Small";

export default function ArticleCategory({data}){

const router = useRouter();

const [allArticles,setAllArticles] = useState([])

    useEffect(()=>{
        
        const fetchArticlesByCategory =  ()=>{






        }

        fetchArticlesByCategory()




    },[])
    

    return (

        <div>

<HeaderComp  special="development" main="articles" />


<BreadCrumbs/>



<div className="px-28 bg-[#FAFAFA] py-12 flex flex-wrap justify-between gap-y-10 mb-6">

{data.mainDataCheck==404?

<div className="text-center text-3xl font-medium  mx-auto">This category does not exist</div>


:


(data.count==0?<div className="text-center text-3xl font-medium  mx-auto">

No articles available in this category    


</div>


:



data.mainDataCheck.map((eachBlogDetail)=>{
    console.log(eachBlogDetail);
    return <EachBlogCard  details={eachBlogDetail} />
})



)



}




{/* {data.mainDataCheck==404?


<div className="text-center ">
    
    This category does not exist

</div>


:data.mainDataCheck.length>0&&data.mainDataCheck.map(()=>{
return <EachBlogCard/>

})} */}


{/* {data.length>0?data.map(()=>{

return <EachBlogCard/>

}):<div>dsadsa</div>} */}




</div>



<Footer/>



        </div>


    )


}


export const getServerSideProps = async(context)=>{


    const categoryName = context.query.category

    const url = `http://localhost/revivedigitalbackend/wp-json/wp/v2/blog-category?per_page=50`;
    

     const mainData = await axios.get(url).then(async resp=>{

        const requiredCategory = resp.data.filter(eachCateg=>{

            return eachCateg.slug==categoryName
        })

        if(requiredCategory.length>0){

        const articlesByCateg = await axios.get(`http://localhost/revivedigitalbackend/wp-json/wp/v2/blog?${requiredCategory[0].taxonomy}=${requiredCategory[0].id}`).then(responseObj=>{

        return responseObj.data

        }).catch(errorObj=>{
            console.log(errorObj);
        })

        

        return {mainDataCheck:articlesByCateg,count:requiredCategory[0].count}

    }else{
        return {mainDataCheck:404}
    }


    }).catch(err=>{
        console.log(err);
    })


return{
    props:{

        data : mainData,
    }
}



}