import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import DatePicker from './DatePicker';
import GuestsSelector from './GuestsSelector';
import HotelSelector from './HotelSelector';

import { useState } from 'react';
import BookForm from './BookForm';
export default function Header() {
    const [showBookForm, setShowBookForm] = useState(false);

    const handleClickBookForm = () => {
        setShowBookForm(true);
    }

    return (
        <>
            <div className="header mb-15">
                <div className="header-top-bar bg-black px-10">
                    <div className="header-group-btn flex items-center ">
                        <a className='logo w-[150px] block mx-auto mt-[-20px]' href="#"><img src="/images/logo.png" alt="" /></a>
                        <div className="member-login font-semibold text-white text-right cursor-pointer relative " >
                            THÀNH VIÊN
                        </div>
                    </div>
                </div>
                <div className="header-menu-group flex items-center justify-between w-full px-24  bg-white">

                    <div className="bar-btn text-black">
                        <i className="fa-solid fa-bars"></i>
                    </div>

                    {/* Menu Center */}
                    <nav className="menu">
                        <ul className="main-menu flex gap-6 items-center">
                            {[
                                "HOTELS",
                                "OUR SERVICE",
                                "EXPERIENCE WITH STRAVSTAY",
                                "STRAVSTAY DISCOVERY",
                                "CONTACT US"
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="
                            text-black
                            relative
                            after:content-['']
                            after:absolute
                            after:left-0
                            after:bottom-0
                            after:w-0
                            hover:after:w-full
                            after:h-[2px]
                            after:bg-rose-500
                            after:transition-all
                            after:duration-300
                            py-2
                        "
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="w-40 h-20 bg-rose-500 transform -skew-x-12 flex items-center justify-center book-now-btn text-xl">
                        <span className=" cursor-pointer skew-x-12 text-white font-semibold " onClick={handleClickBookForm}>
                            Book Now
                        </span>
                    </div>

                    {showBookForm && <BookForm onClose={() => setShowBookForm(false)} />}
                </div>
                <div className="header-mid-container bg-[url(/images/Slider2.jpg)] bg-cover bg-center ">
                    <div className="overlay h-full bg-(--over-dark) py-10">
                        <div className="title text-center text-6xl pt-40">
                            WELCOME TO TRAVSTAY
                        </div>
                        <div className="slogan text-center mt-5 mb-40 text-2xl ">
                            Your Gateway to Great Stays
                        </div>

                        <div className="serch-container mx-50 py-6 px-6 bg-white flex gap-10 justify-between g-5">

                            <HotelSelector top='-top-65 ' hidden='' />
                            <DatePicker />

                            <GuestsSelector />
                            <div className="find-btn bg-rose-500 py-5 px-5 bold font-bold " >
                                FIND ROOM
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}


