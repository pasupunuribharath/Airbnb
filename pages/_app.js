import 'tailwindcss/tailwind.css'
import '../global.css'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router';

const progress = new ProgressBar({
   size:7,
   color:"#FE595E",
   className: "z-50",
   delay: 100,
});
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
Router.events.on('routeChangeStart',progress.start);
Router.events.on('routerChangeComplete',progress.finish);
Router.events.on('routerChangeError',progress.finish);


export default MyApp
