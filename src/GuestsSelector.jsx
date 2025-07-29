import { useState, useRef, useEffect } from "react";
import { FaUserFriends } from "react-icons/fa";

export default function GuestsSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const ref = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const increment = (type) => {
        if (type === "adult") setAdults(adults + 1);
        if (type === "child") setChildren(children + 1);
    };

    const decrement = (type) => {
        if (type === "adult" && adults > 1) setAdults(adults - 1);
        if (type === "child" && children > 0) setChildren(children - 1);
    };

    return (
        <div className="relative w-64 text-sm" ref={ref}>
            <label className="text-neutral-500 mb-1 block">Guests</label>
            <div
                onClick={toggleDropdown}
                className=" py-2 cursor-pointer flex justify-between items-center bg-white hover:border-black w-full"
            >
                <span className="text-black">
                    {adults} Adult{adults > 1 ? "s" : ""}, {children} Child
                </span>

                <FaUserFriends className="ml-2 text-black text-sm" />
            </div>

            {isOpen && (
                <div className="absolute -top-48 mt-2 bg-white border rounded shadow-md w-full z-50 text-black">
                    <div className="flex justify-between items-center p-4 text-black">
                        <span>Adults</span>
                        <div className="flex items-center space-x-2 text-black">
                            <button
                                onClick={() => decrement("adult")}
                                className="border px-2 py-1 rounded "
                            >
                                -
                            </button>
                            <span>{adults}</span>
                            <button
                                onClick={() => increment("adult")}
                                className="border px-2 py-1 rounded "
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-4 ">
                        <span>Child</span>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => decrement("child")}
                                className="border px-2 py-1 rounded "
                            >
                                -
                            </button>
                            <span>{children}</span>
                            <button
                                onClick={() => increment("child")}
                                className="border px-2 py-1 rounded bg-white "
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
