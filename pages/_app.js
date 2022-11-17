import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Navbar from '../components/Navbar'
import {AppWrapper} from '../lib/context/State'

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper> 
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
    </AppWrapper>
  )
}

export default MyApp
