import FilterBar from "./FilterBar";
import HospitalCard from "./HospitalCard";
import getHospitals  from "../services/hospitalService";


export default async function HospitalList()  {

  // const handleShare = (hospital: Hospital) => {
  //   console.log("Share:", hospital.name);
  // }

  // const handleExport = (hospital: Hospital) => {
  //   console.log("Export:", hospital.name);
  // }

  const hospitals = await getHospitals()

    return (
        <div className="flex flex-col gap-3 overflow-y-auto h-full">
            <FilterBar />
      <div className="py-4 px-1 flex flex-col gap-4">
        {hospitals.map((hospital) => (
         <HospitalCard
          key={hospital.id}
          hospital = {hospital}
          // onShare={handleShare}
          // onExport={handleExport}
          />
        ))}
      </div>
        </div>
    )
}