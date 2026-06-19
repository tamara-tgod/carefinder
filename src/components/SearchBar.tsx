export default function SearchBar() {
  return (
    <div className="py-3">
      <form action="/search-results" method="GET" className="flex flex-col md:flex-row gap-1 bg-white px-2 py-1 rounded-md w-[80%] md:w-full m-auto">
        <div className="flex items-center justify-center">
          <span className="material-symbols-outlined text-on-surface">search</span>
          <input
            type="search"
            name="search"
            id="site-search"
            placeholder="Search by hospital name, location, or specialty"
            className="border-b md:border-r md:border-b-0 border-gray-300 w-96 px-2 py-3 bg-white/70 placeholder:text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <hr/>
        <button 
        type="submit"
        className="bg-primary py-3 px-4 rounded-md text-white transition-colors hover:opacity-90 flex justify-center items-center">
          <span className="material-symbols-outlined">search</span>
          Find Care</button>
      </form>
    </div>
  );
}
