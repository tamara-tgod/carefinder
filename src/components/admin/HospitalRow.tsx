import { Hospital } from "@/types/hospital";

interface HospitalRowProps {
  hospital: Hospital;
}

export default function HospitalRow({ hospital }: HospitalRowProps) {
  return (
    <tr className="border-b border-gray-500 h-10 ">
      <td className="flex flex-col text-on-surface font-semibold px-3 py-1.5">
        {hospital.name}
        <span className="text-sm text-gray-600">{hospital.ownership_type}</span>
      </td>
      <td className="text-gray-600">{hospital.address}</td>
      <td>
        <span
          className={`rounded-full px-4  py-1 text-sm font-medium
                        ${
                          hospital.status === "verified"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }
                        `}
        >
          {hospital.status}
        </span>
      </td>
      <td></td>

      {/* actions */}
      <td className="px-6">
        <button className="text-gray-500 hover:text-black">:::</button>
      </td>
    </tr>

    
  );
}