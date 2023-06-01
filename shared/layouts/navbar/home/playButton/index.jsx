import {
    PlayCircleFilled
} from '@ant-design/icons';

const PlayButton = ()=>{
    return (
        <div className='flex justify-center items-center bg-gray-800 py-20'>
            <div className='text-white flex flex-col items-center gap-3'>
                <PlayCircleFilled />
                <p className=''>Amozon Essentials</p>
                <div className='flex flex-col items-center mb-3'>
                    <h1 className='text-4xl'>Get -50% From Summer</h1>
                    <h1 className='text-4xl'>Collection</h1>
                </div>
                <button className='bg-red-600 px-5 py-3 rounded text-sm'>Explore Now</button>
            </div>
        </div>
    )
}
export default PlayButton