import Menu from "../../../pages/json-api/Menu";
import Image from "next/image";
import Link from "next/link";
import {
    SearchOutlined,
    UserOutlined,
    HeartOutlined,
    ShoppingCartOutlined,
    MenuOutlined
} from '@ant-design/icons';

//iconArray ----------------------- iconArray ------------------------ iconArray------------------------ iconArray------------------------ iconArray
const iconArray = [
    {
        "icon" : <SearchOutlined /> 
    },
    {
        "icon" : <UserOutlined />
    },
    {
        "icon" : <HeartOutlined />
    },
    {
        "icon" : <ShoppingCartOutlined />
    },
    {
        
        "icon" : <MenuOutlined />
    }
]

const Navbar = ()=>{

    return (
        <div className="flex justify-between items-center py-1 shadow-lg w-4/5 mx-auto">
            <div className="w-[50px] h-[50px]"><Image src={Menu.logo} alt="Picture of the author" width={50} height={50} className="rounded-full w-[50px] h-[50px]"/></div>
            <div className="w-fit flex gap-10">
                {
                    Menu.menu.map((menu)=>{
                        return <Link href={menu.url}><button className="text-sm">{menu.label}</button></Link>
                    })   
                }
            </div>
            <div className="w-fit flex gap-6 items-center">
                {
                    iconArray.map((icon)=>{
                        return <button className="text-lg">{icon.icon}</button>
                    })   
                }
            </div>
        </div>
    )
}
export default Navbar