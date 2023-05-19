import '@/styles/globals.css'
import '@/styles/extraStyles.css'

import localFont from 'next/font/local'


const SatoshiFont = localFont({ src: './Satoshi-Variable.woff2', })


export default function App({ Component, pageProps }) {


  return       <main className={SatoshiFont.className} >

  <Component {...pageProps} />
</main>


}
