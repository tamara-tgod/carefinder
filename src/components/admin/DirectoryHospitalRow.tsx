import { Hospital } from "@/types/hospital";

interface HospitalRowProps {
  hospital: Hospital;
}

export default function DirectoryHospitalRow({ hospital }: HospitalRowProps) {
  return (
    <tr className="border-b border-gray-500  w-full">
      {/* hospital */}
      <td className="block text-on-surface font-medium p-6">
        <div>
          <span className="block"> {hospital.image_url}</span>
          {hospital.name}
          <span className="text-xs text-gray-600 w-42 block">ID-{hospital.id}</span>
        </div>
      </td>

      {/* location */}
      <td className="text-gray-600 text-sm p-6">{hospital.address}</td>

      {/* ownership */}
      <td className="text-gray-600 px-3 py-1.5 uppercase">
        <span className={`rounded-full px-4 py-1 text-xs font-medium ${
          hospital.ownership_type === "public"
          ? "bg-blue-100 text-blue-700"
          : "bg-gray-100 text-gray-700"
        }`}>{hospital.ownership_type}</span>
        </td>

{/* specialities */}
      <td className="p-6">
        <div className="flex flex-wrap gap-2">
          {hospital.specialties.slice(0, 2).map((specialty) => (
            <li
              key={specialty}
              className="border border-primary/50 bg-primary/50 rounded-md py-1 px-2 text-gray-900 text-xs list-none"
            >
              {specialty}
            </li>
          ))}
          {hospital.specialties.length > 2 && (
            <li className="text-xs text-on-surface list-none rounded-md py-1 px-2 w-fit border border-primary/50 bg-primary/50  text-center">+{hospital.specialties.length - 2}</li>
          )}
        </div>
      </td>

      {/* status */}
      <td className="p-6">
        <span
          className={`flex items-center gap-1 rounded-full px-2 py-1.5 text-xs font-medium capitalize
             ${
                 hospital.status === "verified"
                ? "bg-green-100 text-green-700"
                : "bg-blue-100 text-blue-700"
               }
           `}
        >
          <span className="material-symbols-outlined text-xs w-fit">{hospital.status === "verified" ? "check_circle" : "pending"}</span>
          {hospital.status}
        </span>
      </td>

      {/* actions */}
      <td className="p-6">
        <button className="text-sm font-medium text-gray-500 hover:text-primary/20">:::::</button>
      </td>
    </tr>
  );
}
