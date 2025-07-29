import './Amentities.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Amentities() {
    return (
        <>
            <div className="container mx-auto px-10 py-20 amentities bg-orange-50 border-[20px] border-white">
                <div className="grid grid-cols-4 gap-6 my-10" >
                    <div className="col-span-2 text-black p-4 ">
                        <div className="small-title text-xl">
                            Amentities
                        </div>
                        <div className="title text-5xl">
                            We offer luxurious Amenities Just For You!
                        </div>
                    </div>
                    <div className="border-1 border-gray-500 border-black p-4 ">
                        <i class="fa-solid fa-water-ladder text-white text-3xl mb-5 rounded-full flex justify-center items-center p-3 bg-gray-900 mb-16" ></i>
                        <div className="text-black text-2xl font-normal mb-5">Private pool</div>
                    </div>
                    <div className="border-1 border-gray-500 p-4">
                        <i class="fa-solid fa-spa text-black text-3xl mb-5 rounded-full flex justify-center items-center p-3 bg-[#f3ebe5] mb-16 hover:bg-gray-900 hover:text-white" ></i>
                        <div className="text-black text-2xl font-normal mb-5">Spa Services</div>
                    </div>
                </div >
                <div class="grid grid-cols-4 gap-6 my-4">
                    <div className="border-1 border-gray-500 p-4">
                        <i class="fa-solid fa-golf-ball-tee text-black text-3xl mb-5 rounded-full flex justify-center items-center p-3 bg-[#f3ebe5] mb-16 hover:bg-gray-900 hover:text-white" ></i>
                        <div className="text-black text-2xl font-normal mb-5">Golf Service</div>
                    </div>
                    <div className="border-1 border-gray-500 p-4">
                        <i class="fa-solid fa-dumpster text-black text-3xl mb-5 rounded-full flex justify-center items-center bg-[#f3ebe5] p-3 mb-16 hover:bg-gray-900 hover:text-white" ></i>
                        <div className="text-black text-2xl font-normal mb-5">Housekeeping</div>
                    </div>
                    <div className="border-1 border-gray-500 p-4">
                        <i class="fa-solid fa-martini-glass text-black text-3xl mb-5 rounded-full flex justify-center items-center p-3 bg-[#f3ebe5]  mb-16 hover:bg-gray-900 hover:text-white" ></i>
                        <div className="text-black text-2xl font-normal mb-5">Restaurant & Mini Bar</div>
                    </div>
                    <div className="border-1 border-gray-500 p-4">
                        <i class="fa-solid fa-dumbbell text-black text-3xl mb-5 rounded-full flex justify-center items-center p-3 bg-[#f3ebe5] mb-16 hover:bg-gray-900 hover:text-white" ></i>
                        <div className="text-black text-2xl font-normal mb-5">Quality Gym</div>
                    </div>
                </div>
            </div >
        </>
    )
}

