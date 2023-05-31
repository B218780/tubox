import Menu from "../../../pages/json-api/Menu";
import Image from "next/image";
import Link from "next/link";



const Navbar = ()=>{

    return (
        <div className="flex justify-between items-center px-32">
            <div className="w-[50px] h-[50px]"><Image src={Menu.logo} alt="Picture of the author" width={50} height={50} className="rounded-full w-[50px] h-[50px]"/></div>
            <div className="border border-black w-fit flex gap-10">
                {
                    Menu.menu.map((menu)=>{
                        return <Link href={menu.url}><button>{menu.label}</button></Link>
                    })   
                }
            </div>
            <div className="border border-black w-fit">
                {
                    Menu.icon.map((menu)=>{
                        return <button>{menu.label}</button>
                    })   
                }
            </div>
         
        </div>
    )
}
export default Navbar