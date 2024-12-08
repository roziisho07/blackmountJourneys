export default function SearchBar() {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-6 rounded-xl shadow-lg flex items-center space-x-4  bg-[#FFFFFF] lg:w-[1000px] w-[400px]  lg:h-[90px]  stroke-[#7BBCB0] drop-shadow-lg ">
      <div className="lg:flex  items-center w-full gap-2">
        <div className="flex-1 ">
          <label className="block text-[#7BBCB0] text-sm font-semibold">Location</label>
          <input
            type="text"
            placeholder="Search for a destination"
            className="w-full border rounded-md p-2 hover:border-cyan-700"
          />
        </div>
        <div className="flex-1">
          <label className="block text-[#7BBCB0] text-sm font-semibold">Guests</label>
          <input
            type="number"
            placeholder="Number of guests?"
            className="w-full border rounded-md p-2 hover:border-cyan-700"
          />
        </div>
        <div className="flex-1">
          <label className="block text-[#7BBCB0] text-sm font-semibold">Date</label>
          <input
            type="date"
            className="w-full border rounded-md p-2  hover:border-cyan-700"
          />
        </div>
        <div className="flex mt-5">
          <button className="block px-6 py-2 bg-[#62968d] hover:bg-[#3a5a55] text-white rounded-2xl z-60 " >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
