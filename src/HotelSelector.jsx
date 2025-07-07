
import { useState, useRef, useEffect } from 'react';

export default function HotelSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedHotel, setSelectedHotel] = useState("");
    const dropdownRef = useRef(null);



    const hotels = [
        "Wink Hotel Saigon Centre",
        "Wink Hotel Danang Centre",
        "Wink Icon Danang Riverside",
        "Wink Hotel Tuy Hoa Beach",
        "Wink Hotel Can Tho",
        "Wink Hotel Hai Phong",
    ];

    const handleSelect = (hotel) => {
        setSelectedHotel(hotel);
        setIsOpen(false);
    };
    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="relative w-64 text-sm" ref={dropdownRef}>
                <label className="text-neutral-500 mb-1 block">Hotel</label>
                <div
                    className=" py-2 cursor-pointer flex justify-between items-center bg-white "
                    onClick={toggleDropdown}
                >
                    <span className={selectedHotel ? "text-black" : "text-black"}>
                        {selectedHotel || "Select Hotel"}
                    </span>
                    {/* <FaChevronDown className="ml-2 text-xs" /> */}
                    <div className="flex items-center gap-2">
                        {/* Icon location */}
                        <i className="fa-solid fa-location-dot text-black text-sm"></i>
                    </div>
                </div>

                {isOpen && (
                    <ul className="absolute -top-65 left-0 w-full bg-white  mt-1  z-10 max-h-60 overflow-auto">
                        {hotels.map((hotel) => (
                            <li
                                key={hotel}
                                onClick={() => handleSelect(hotel)}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                            >
                                {hotel}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )

}
