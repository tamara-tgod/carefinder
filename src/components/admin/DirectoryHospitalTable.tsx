import DirectoryHospitalRow from "./DirectoryHospitalRow";
import { Hospital } from "@/types/hospital";

 type Props = {
    hospitals: Hospital[];
    currentPage: number;
  }

export default function DirectoryHospitalTable({ hospitals, currentPage }: Props) {
  const pageSize = 10;
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = startItem + hospitals.length - 1;

  return (
    <div className="bg-white rounded-md border border-gray-400 shadow-xl overflow-hidden">
      {/* table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-surface border-b border-gray-400">
            <tr className="text-left text-sm text-on-surface uppercase w-full">
              <th className="px-6 py-4">Hospital Name</th>
              <th className="px-6 py-4">Location</th>
              <th className="px-6 py-4">Ownership</th>
              <th className="px-6 py-4">Specialities</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="px-4">
              {hospitals.map((hospital) => (
                <DirectoryHospitalRow key={hospital.id} hospital={hospital} />
              ))}
          </tbody>
        </table>
      </div>

      {/* footer/pagination */}
      <div className="bg-surface border-b border-gray-400 px-6 py-5">
        <p>
          {hospitals.length > 0 ? `Showing ${startItem} to ${endItem}` : "No hospitals found"}
        </p>
      </div>
    </div>
  );
}