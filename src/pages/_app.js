import '@/styles/globals.css'
import '@/styles/extraStyles.css'

import localFont from 'next/font/local'

import { useState } from 'react'
import { Router } from 'next/router'
import { Loader } from '../../Components/Small'



const SatoshiFont = localFont({ src: './Satoshi-Variable.woff2', })


export default function App({ Component, pageProps }) {


  const [showLoader,setShowLoader] = useState(false);

  Router.events.on('routeChangeStart',(url)=>{

    setShowLoader(true)

  })

  Router.events.on('routeChangeComplete',(url)=>{
    
    setShowLoader(false)

  })

  Router.events.on('routeChangeError',(url)=>{
    setShowLoader(false)
  })



  return       <main className={SatoshiFont.className} >

{showLoader&&
<div className='fixed top-0 flex justify-center items-center  z-40 h-full w-full ' style={{backgroundColor:'rgba(0,0,0,0.8)'}}>

<Loader/>

</div>

}


  <Component {...pageProps} />


</main>


}
