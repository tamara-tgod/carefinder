import { Hospital } from "@/types/hospital";
import Link from "next/link";

interface HospitalCardProps {
  hospital: Hospital;
  // onShare: (hospital: Hospital) => void;
  // onExport: (hospital: Hospital) => void;
}

export default function HospitalCard({ hospital }: HospitalCardProps) {

  return (
    <Link href={`/hospitals/${hospital.id}`}>
      <div className="bg-white border-l-4 border-gray-400 py-5 px-3 rounded-md w-[92%] m-auto hover:border-primary">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start gap-3 mb-1.5">
            <h3 className="text-primary font-semibold text-base leading-snug">
              {hospital.name}
            </h3>

            {/* placeholder for the distance filter */}
            <span className="bg-primary text-white text-xs font-medium px-2.5 py-1 rounded-md whitespace-nowrap">
              1.3km
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-3">{hospital.address}</p>

          <ul className="flex flex-wrap gap-2">
            {hospital.specialties.map((specialty) => (
              <li
                key={specialty}
                className="border border-gray-400 rounded-md px-2 py-0.5 tracking-wide text-primary text-xs"
              >
                {specialty}
              </li>
            ))}
          </ul>

          <div className="flex gap-5 pt-3 border-t border-gray-100">
            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">share</span>
              Share
            </button>
            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">download</span>
              Export
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
