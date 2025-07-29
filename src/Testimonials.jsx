import '@fortawesome/fontawesome-free/css/all.min.css';
import './Testimonials.css';

export default function Testimonials() {
    return (
        <>
            <div className="container px-10 bg-gray-900  py-10  border-[20px] border-white">
                <div className="small-title text-center my-5">Testimonials</div>
                <div className="title text-center text-4xl my-5">What Guests Saying ?</div>
                <div className="reviews grid grid-cols-4 gap-6">
                    <div className="p-5 bg-gray-800 ">
                        <div className='flex gap-10 mb-6'>
                            <div className='w-20 '><img className='rounded-full' src="/images/Customer 1.jpg" alt="" /></div>
                            <div className='w-70 ' >
                                <div className="name text-xl">Nam Nguyen</div>
                                <div className="role text-yellow-500">Our Customer</div>
                            </div>
                        </div>
                        <div className="">
                            "This villa provided a luxurious yet welcoming atmosphere that made our vacation truly special. The gourmet kitchen allowed us to enjoy some home-cooked meals, while the on-site restaurant served delicious local cuisine."
                        </div>
                    </div>
                    <div className="p-5 bg-gray-800 ">
                        <div className='flex gap-10 mb-6'>
                            <div className='w-20 '><img className='rounded-full' src="/images/Customer 1.jpg" alt="" /></div>
                            <div className='w-70 ' >
                                <div className="name text-xl">Nam Nguyen</div>
                                <div className="role text-yellow-500">Our Customer</div>
                            </div>
                        </div>
                        <div className="">
                            "This villa provided a luxurious yet welcoming atmosphere that made our vacation truly special. The gourmet kitchen allowed us to enjoy some home-cooked meals, while the on-site restaurant served delicious local cuisine."
                        </div>
                    </div>
                    <div className="p-5 bg-gray-800 ">
                        <div className='flex gap-10 mb-6'>
                            <div className='w-20 '><img className='rounded-full' src="/images/Customer 1.jpg" alt="" /></div>
                            <div className='w-70 ' >
                                <div className="name text-xl">Nam Nguyen</div>
                                <div className="role text-yellow-500">Our Customer</div>
                            </div>
                        </div>
                        <div className="">
                            "This villa provided a luxurious yet welcoming atmosphere that made our vacation truly special. The gourmet kitchen allowed us to enjoy some home-cooked meals, while the on-site restaurant served delicious local cuisine."
                        </div>
                    </div>
                    <div className="p-5 bg-gray-800 ">
                        <div className='flex gap-10 mb-6'>
                            <div className='w-20 '><img className='rounded-full' src="/images/Customer 1.jpg" alt="" /></div>
                            <div className='w-70 ' >
                                <div className="name text-xl">Nam Nguyen</div>
                                <div className="role text-yellow-500">Our Customer</div>
                            </div>
                        </div>
                        <div className="">
                            "This villa provided a luxurious yet welcoming atmosphere that made our vacation truly special. The gourmet kitchen allowed us to enjoy some home-cooked meals, while the on-site restaurant served delicious local cuisine."
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}