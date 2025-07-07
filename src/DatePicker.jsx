import { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { FaCalendarAlt } from "react-icons/fa";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function DatePicker() {
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ]);
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    const handleSelect = (ranges) => {
        setRange([ranges.selection]);
    };

    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative w-72 text-sm" ref={ref}>
            <label className="text-neutral-500 mb-1 block">Dates</label>
            <div
                onClick={() => setOpen(!open)}
                className=" py-2 cursor-pointer flex justify-between items-center bg-white hover:border-black w-full"
            >
                <span className="text-black">
                    {format(range[0].startDate, "dd/MM/yyyy")} - {format(range[0].endDate, "dd/MM/yyyy")}
                </span>
                <FaCalendarAlt className="ml-2 text-black text-sm" />
            </div>

            {open && (
                <div className="absolute -top-115 mt-2 z-50 shadow-lg">
                    <DateRange
                        editableDateInputs={true}
                        onChange={handleSelect}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        months={2}
                        direction="horizontal"
                        className="border rounded bg-white"
                    />
                </div>
            )}
        </div>
    );
}
