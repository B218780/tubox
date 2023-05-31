import footer from "./footer.module.css";

const Footer = ()=>{
    const support = [
        {
            title : "About Us",
        },
        {
            title : "Term of Service",
        },
        {
            title : "Privacy Policy",
        },
        {
            title : "Promotion",
        },
        {
            title : "Return"
        }
    ]
    const shop = [
        {
            title : "Men's Shopping",
        },
        {
            title : "Women's Shopping",
        },
        {
            title : "Kids Shopping",
        },
        {
            title : "Discount",
        },
        {
            title : "Return"
        }
    ]
    const company = [
        {
            title : "Our Story",
        },
        {
            title : "Careers",
        },
        {
            title : "Terms & Conditions",
        },
        {
            title : "Privacy & Cookie policy",
        },
        {
            title : "Return"
        }
    ]
    const contactUs = [
        {
            title : "1-888-923-8044",
        },
        {
            title : "1-888-923-8055",
        },
        {
            title : "help@Cartmax.com",
        }
    ]

    const VerticalContent = (data)=>{
        return (
            <div>
                <h1>{data.normalData.title}</h1>
            </div>
        )
    }
    const design = (
        <>
                <div className={`footer.box relative`}>
                    <img src="Rectangle 91.png" alt="Rectangle" className="w-full h-full" />
                    <img src="Clip.png" alt="Clip" className="w-full h-full z-1000 absolute top-0 left-0" />
                    <div className="absolute top-0 left-0 border-b-2 border-[#323336] w-full h-full">
                    <div className="flex flex-col justify-center mx-auto border-b-2 border-gray-500 text-white mt-20 py-12">
                        <h1 className="mx-auto text-xl">Clearance Sales</h1>
                        <p className="mb-2 mx-auto text-2xl">Up to 70% Off.All Sales are Final! </p>
                        <div className="flex justify-center items-center w-1/2 mx-auto">
                            <input placeholder="Subscribe Your Email" className="px-3 py-3 bg-[#2C2C2C] w-1/3"/>
                            <button className="text-white bg-black px-4 py-3 text-sm">Subscribe</button>
                        </div>
                    </div>
                {/* footer content */}
                <div className="text-white flex justify-around py-12">
                    <div>
                        <h1 className="border-b-2 py-1.5 border-[#333455] w-fit">Support</h1>
                        {
                            support.map((data)=>{
                                return <VerticalContent normalData={data}/>
                            })
                        }
                    </div>
                    <div>
                        <h1 className="border-b-2 py-1.5 border-[#333435] w-fit">Shop</h1>
                        {
                            shop.map((data)=>{
                                return <h1>{data.title}</h1>
                            })
                        }
                    </div>
                    <div>
                        <h1 className="border-b-2  py-1.5 border-[#333435] w-fit">Company</h1>
                        {
                            company.map((data)=>{
                                return <h1>{data.title}</h1>
                            })
                        }
                    </div>
                    <div>
                        <h1 className="border-b-2  py-1.5 border-[#333435] w-fit">Contact us</h1>
                        {
                            contactUs.map((data)=>{
                                return <h1>{data.title}</h1>
                            })
                        }
                    </div>
                    <div>
                        <h1 className="border-b-2  py-1.5 border-[#333435] w-fit">Support</h1>
                        {
                            shop.map((data)=>{
                                return <h1>{data.title}</h1>
                            })
                        }
                    </div>
                </div>
                <div className="flex justify-between items-center px-20 text-white">
                    <p>2022 All rights reserved</p>
                    <p>2022 All rights reserved</p>
                </div>
                    </div>
                </div>
        </>
    )
    return design;
}
export default Footer