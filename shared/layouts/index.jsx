import Footer from "./footer";
import Navbar from "./navbar";
import Head from "next/head";

const Layouts = (data)=>{
    return (
        <div>
            <Head>{data.pageTitle}</Head>
            <Navbar />
            <div>
                {data.children}
            </div>
            <Footer />
        </div>
    )
}
export default Layouts