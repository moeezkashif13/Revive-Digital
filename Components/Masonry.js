import { MasonryGrid } from "@egjs/react-grid";
import { useEffect, useState } from "react";


export default function MasonryComp({gotAllWork}){

    
    // const [columnsCount,setColumnsCount]  = useState(0);

    // useEffect(()=>{


    //     window.innerWidth>1000?setColumnsCount(4):setColumnsCount(1);


    // },[])

    
    const sizesArray = ['first','second','third','fourth']


    
return (


<div style={styles.pin_container}>

{/* <div style={{
 ...styles.card,
 ...styles['first']
 }}>
 </div> */}

{gotAllWork?.data?.map((eachWork,index)=>{

    const getImage = gotAllWork?.mediaURL[index]
   
        return   <div style={{
            ...styles.card,
            ...styles[sizesArray[Math.floor(Math.random()*sizesArray.length)]]
            }}>

     <div className="h-full w-full overflow-hidden">
    
     <img style={{transition:'all 0.3s '}} className=" hover:scale-110 w-full max-w-full h-full object-cover object-center" src={getImage?.source_url} alt="" />
    
    
     </div>


     <div className={`absolute bottom-4 left-3 lg:left-4   `}>
    

    <div className="bg-primary font-medium inline px-4 py-1.5 rounded-md"  dangerouslySetInnerHTML={{__html:eachWork?.title?.rendered}}>


    </div>




    <div className="mt-2.5   font-bold text-[5vw] lg:text-[1.6vw]" dangerouslySetInnerHTML={{__html:eachWork?.excerpt?.rendered}}  ></div>


</div>





            </div>
    
       })


}





</div>



)

    
}

const styles = {
    pin_container: {
    margin: '0 auto',
    padding: 0,
    width: '98%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 320px)',
    gridAutoRows: '10px',
justifyContent: 'space-between',

},

    card: {

        position:'relative',
        padding: 0,
        borderRadius: '5px',
        width:'100%',
        color:'white',
        margin:'10px 0'
        
        },
        first: {
        gridRowEnd: 'span 40',

        },
        second: {
            gridRowEnd: 'span 60',

        },

        third: {

            gridRowEnd: 'span 56'
        },

        fourth: {
        gridRowEnd: 'span 47',  

        },

        
       


   }
   