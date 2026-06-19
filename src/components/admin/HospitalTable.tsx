import getHospitals from "@/services/hospitalService";
import HospitalRow from "./HospitalRow";

export default async function HospitalTable() {
  const hospitals = await getHospitals();

  return (
    <div className="bg-white rounded-md border border-gray-400 shadow-xl overflow-hidden">
        
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-gray-400">
        <h2 className="text-on-surface text-2xl font-semibold">Hospital Directory</h2>

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="search records..."
            className="w-72 border bordr-gray-400 rounded-xl px-4 py-2 outline-none"
          />

          <button className="border rounded-xl px-5 py-2">Filter</button>
        </div>
      </div>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-surface border-b border-gray-400">
            <tr className="text-left text-sm text-on-surface">
              <th className="px-6 py-5">Hospital Name</th>
              <th className="px-6 py-5">Location</th>
              <th className="px-6 py-5">Status</th>
              <th className="px-6 py-5">Capacity</th>
              <th className="px-6 py-5">Actions</th>
            </tr>
          </thead>
          <tbody className="px-4">
              {hospitals.map((hospital) => (
                <HospitalRow key={hospital.id} hospital={hospital} />
              ))}
          </tbody>
        </table>
      </div>

      {/* footer/pagination */}
      <div className="bg-surface border-b border-gray-400 px-6 py-5">
        <p>Showing 1 to 10</p>
      </div>
    </div>
  );
}
