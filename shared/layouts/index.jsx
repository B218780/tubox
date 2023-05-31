import Footer from "./footer";
import Navbar from "./navbar";
import Head from "next/head";

const Layouts = (data)=>{
    return (
        <div>
            <Head>{data.pageTitle}</Head>
            <Navbar />
            <div className="bg-green-200">
                {data.children}
            </div>
            <Footer />
        </div>
    )
}
export default Layouts