
import HotelSelector from "./HotelSelector";
import DatePicker from "./DatePicker";
import GuestsSelector from "./GuestsSelector";

export default function BookingForm({ onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="absolute inset-0  bg-(--over-dark)"
                onClick={onClose}
            ></div>

            <div className="relative text-black bg-white p-8 rounded shadow-lg max-w-md w-full z-50">
                <h2 className="text-xl font-bold mb-4">ĐẶT PHÒNG</h2>

                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <HotelSelector top="top-full" hidden={true} />
                        <GuestsSelector />
                        <DatePicker />
                        <HotelSelector top="top-full" hidden="hidden" />
                    </div>
                    <button
                        type="submit"
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Đặt Ngay
                    </button>
                </form>

                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-black"
                    onClick={onClose}
                >
                    ✕
                </button>
            </div>
        </div>
    );
}