// import Bars from "@/components/Bars";
import Header from "@/components/common/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return(
    <>
    <Header/>
    {/* <Bars/> */}
    <Component {...pageProps} />
    </>
  )
}
