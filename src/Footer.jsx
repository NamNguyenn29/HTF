import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css'


export default function Footer() {
    return (
        <div className='bg-gray-900'>
            <div className="container px-26 py-20">
                <div className='grid grid-cols-6 gap-10'>
                    <div className="col-span-2 ">
                        <div className='w-48 '>
                            <img src="./images/logo.png" alt="" />
                        </div>
                        <div className='text-xl -mt-5 mb-10 '>
                            Welcome to Villa Paradise, where luxury meets tranquility in the most breathtaking locations around the world.
                        </div>
                        <div className='flex gap-10 '>
                            <div className="w-55 email-field border text-center rounded-full p-3 cursor-pointer">Your Email Adress</div>
                            <div className="w-35 sub-button rounded-full text-center cursor-pointer border p-3 bg-orange-200 text-black font-medium">Subcribe</div>
                        </div>
                    </div>
                    <div className="col-span-1 ">
                        <div className="title text-3xl pt-20 mb-7">Quick Menu</div>
                        <ul className='text-lg'>
                            <li className='mb-3'><a className='text-white footer-a-tag' href="">Home</a></li>
                            <li className='mb-3'><a className='text-white footer-a-tag' href="">About</a></li>
                            <li className='mb-3'><a className='text-white footer-a-tag' href="">Our Villa</a></li>
                            <li className='mb-3'><a className='text-white footer-a-tag' href="">Blog</a></li>
                            <li className='mb-3'><a className='text-white footer-a-tag' href="">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1 ">
                        <div className="title text-3xl pt-20 mb-7">Quick Menu</div>
                        <ul className='text-xl'>
                            <li className='mb-3'><a className='text-white footer-a-tag' href="">Home</a></li>
                            <li className='mb-3'><a className='text-white footer-a-tag' href="">About</a></li>
                            <li className='mb-3'><a className='text-white footer-a-tag' href="">Our Villa</a></li>
                            <li className='mb-3'><a className='text-white footer-a-tag' href="">Blog</a></li>
                            <li className='mb-3'><a className='text-white footer-a-tag' href="">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1 ">
                        <div className="title text-3xl pt-20 mb-7">Quick Menu</div>
                        <ul className='text-xl'>
                            <li className='mb-3'><a className='text-white footer-a-tag' href="">Home</a></li>
                            <li className='mb-3'><a className='text-white footer-a-tag' href="">About</a></li>
                            <li className='mb-3'><a className='text-white footer-a-tag' href="">Our Villa</a></li>
                            <li className='mb-3'><a className='text-white footer-a-tag' href="">Blog</a></li>
                            <li className='mb-3'><a className='text-white footer-a-tag' href="">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1 ">
                        <div className="title text-3xl pt-20 mb-7">Quick Menu</div>
                        <ul className='text-xl'>
                            <li className='mb-3'><a className='text-white footer-a-tag' href="">Home</a></li>
                            <li className='mb-3'><a className='text-white footer-a-tag' href="">About</a></li>
                            <li className='mb-3'><a className='text-white footer-a-tag' href="">Our Villa</a></li>
                            <li className='mb-3'><a className='text-white footer-a-tag' href="">Blog</a></li>
                            <li className='mb-3'><a className='text-white footer-a-tag' href="">Contact Us</a></li>
                        </ul>
                    </div>


                </div>
                <div className="horizontal my-10 bg-white border-t-1 border-white"></div>
                <div className="grid grid-cols-2 gap-4">
                    <div>Copyright © 2024 All rights reserved</div>
                    <div className='text-end'>
                        Villa & Resort Template Kit by codeinsolutions
                    </div>
                </div>

            </div>
        </div>
    )
}