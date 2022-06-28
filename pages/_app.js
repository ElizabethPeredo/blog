import Navbar from '../src/components/Header/Navbar/Navbar';
import  css from '../src/assets/css/global.css';
import Banner from '../src/components/Header/Banner/Banner';


function MyApp({ Component, pageProps }) {

  return (
    <>
      <Navbar />
      <Banner/>
      <Component {...pageProps} />
    </>)
}

export default MyApp
