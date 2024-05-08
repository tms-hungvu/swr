import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout({children} : any){
    return <>
    <Head>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
     </Head>
     <Header />
     {children}
     <Footer />
    </>
}