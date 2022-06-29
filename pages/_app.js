import Navbar from '../src/components/Header/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer';
import  css from '../src/assets/css/global.css';



function MyApp({ Component, pageProps }) {

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>)
}

export default MyApp
