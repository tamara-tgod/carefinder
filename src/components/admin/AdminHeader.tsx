export default function AdminHeader () {
    return (
        <div className="flex justify-between items-center border-b  border-gray-400 px-2 py-3">
            <h1 className="text-primary font-semibold">Overview Dashboard</h1>
            <div className="flex items-center gap-4">
              
                <button className="flex items-center gap-2 ">
                    <span className="material-symbols-outlined">notifications</span>
                </button>
            </div>
        </div>
    )
}