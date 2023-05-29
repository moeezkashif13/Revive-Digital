import axios from "axios";
import axiosClient, { menuFetchURL } from "./axiosClient";

export default async function fetchWholeNavbar(){

    let navMenu = false;

let checkArr = [];

try {
  

    try {
    navMenu = await (await axios.get(menuFetchURL)).data.items;


    } catch (error) {

    navMenu = false;

      throw new Error('Error in fetching navbarr')


    }

    try {

        const resp =  await axiosClient.get('/services-categories?order=desc')
        const filterTruthy = resp.data.map(eachTax=>{
      
        if(eachTax.count==0){
          return null;
        }
      
        return eachTax;
      
      
      }).filter(allowTruthy=>allowTruthy);

      
      const checkingAvien = filterTruthy.map(eachElem=>{
      
      return axiosClient.get(`/eachservice?${eachElem.taxonomy}=${eachElem.id}`).then(gotIt=>{
      
          return {
            [eachElem.name] :gotIt.data,
            slug: eachElem.slug
          }
        }).catch(eachServiceError=>{
          throw new Error('errorrr aggyaaa')
        })
      
      })


      await Promise.all(checkingAvien).then(check=>{


        checkArr.push(...check)
        
      })


      } catch (error) {
        checkArr = [];

      }

    } catch (error) {

      }
    


return {
    navMenu:navMenu,
    checkArr:checkArr
}




}