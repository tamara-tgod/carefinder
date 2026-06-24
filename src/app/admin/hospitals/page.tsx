import Link from "next/link";
import Container from "@/components/Container";
import DirectoryHospitalTable from "@/components/admin/DirectoryHospitalTable";
import Statscard from "@/components/admin/StatsCard";
import getHospitals, { getStats } from "@/services/hospitalService";

export default async function HospitalDirectory({ searchParams }: {
  searchParams: Promise<{ page?: string}>
}) {
  const {page } = await searchParams
  const currentPage = Number(page) || 1

  const hospitals = await getHospitals(currentPage)

  const Stats = await getStats();
  return (
    <div className="bg-surface h-full">
      <Container>
        <div className="flex justify-between items-center py-4">
          <div>
            <h1 className="text-2xl font-semibold">Hospitals Directory </h1>
            <p className="w-3/4 text-sm">
              Manage and minotor health facilities across the region to ensure
              citizens access to verifies care.
            </p>
          </div>
          <Link href="/admin/hospitals/new">
            <button className="flex items-center justify-center gap-1 bg-primary text-on-primary px-2 py-1.5 rounded-lg">
              <span className="material-symbols-outlined">add</span>
              Add New Hospital
            </button>
          </Link>
        </div>

        {/* filter bar */}

        {/* hospital table */}
        <DirectoryHospitalTable 
        hospitals={hospitals}
        currentPage={currentPage}
        />

        {/* stats */}
        <div className="flex justify-around p-10">
            <Statscard
              label="Total Listed"
              value={Stats.totalHospitals ?? 0}
              icon="apartment"
              subtext=""
              iconBg="bg-green-200"
            />
            <Statscard
              label="Pending Reviews"
              value={Stats.pendingReviews ?? 0}
              icon="verified"
              subtext=""
              iconBg="bg-pink-200"
            />
            <Statscard
              label="Pending Review"
              value={Stats.totalHospitals ?? 0}
              icon="warning"
              subtext=""
              iconBg="bg-red-400"
            />
        </div>
      </Container>
    </div>
  );
}
