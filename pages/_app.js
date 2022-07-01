import Navbar from '../src/components/Header/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer';
import css from '../src/assets/css/global.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; //importing font awesome css
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import '../src/assets/css/prism-themes/prism-z-touch.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/prism.min.js" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/components/prism-python.min.js" />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>)
}

export default MyApp
