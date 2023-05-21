import { useEffect } from "react"

export default function Temp(){

    const arr = 'google'

    useEffect(()=>{

        const postType = 'inner-what-we-do';
        const taxonomy = 'custom_category';
        const terms = ['digital-marketing']; // Array of term slugs
        const taxRelation = 'AND'; // Use 'AND' or 'OR' for tax_relation
        
        // Construct the tax_query argument
        const taxQuery = {
            relation: taxRelation,
            taxonomy: taxonomy,
            field: 'slug',
            terms: terms.join(',')
        };


        
// console.log(`http://localhost/revivedigitalbackend/wp-json/wp/v2/${postType}?_embed&tax_query=${JSON.stringify(taxQuery)}`);


console.log(JSON.stringify(taxQuery));


        
// Build the API request URL with the arguments

const url = `http://localhost/revivedigitalbackend/wp-json/wl/v1/taxonomy`;




// Make the API request
fetch(url)
    .then(response => response.json())
    .then(posts => {
        
        console.log(posts);
        
        
    })
    .catch(error => {
        console.error('Error:', error);
    });



    },[])



    return(

<div>tempp</div>

    )



}