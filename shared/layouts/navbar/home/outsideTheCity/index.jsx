import {
    PlayCircleFilled
} from '@ant-design/icons';

const OutsideTheCity = ()=>{
    return (
        <div className='bg-purple-100'>
            <div className="mx-auto w-4/5 py-36 border-4 border-red-600" >
                <div className="flex flex-col gap-5">
                    <h3 className="text-red-600 text-sm font-medium ml-3">BELIEVE WHAT YOU SEE</h3>
                    <h1 className="text-6xl"><b>Outside The City<br /> Mini</b>  bag Arrivals</h1>
                    <p className="text-sm">A resolution to get behind Effortlessly refined styles for cel;ebrating A stand out <br /> shirt is a one-and-done autumn look </p>
                    <div className="flex gap-8">
                        <button className="bg-red-600 text-white text-[10px] text-bold px-10 py-1 rounded">BUY IT NOW</button>
                        <button className="w-fit flex justify-center items-center gap-3"><PlayCircleFilled  className="text-5xl mb-2"/><p className='font-medium'>WATCH LOOKBOOK</p></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OutsideTheCity