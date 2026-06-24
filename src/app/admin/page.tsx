import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import { getStats } from "@/services/hospitalService";
import Statscard from "@/components/admin/StatsCard";
import Container from "@/components/Container";
import HospitalTable from "@/components/admin/HospitalTable";

export default async function AdminPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const Stats = await getStats();

  return (
    <div>
      {" "}
      <main className="w-full bg-surface">
        <AdminHeader />
        <section className="my-5">
          <Container>
            <div className="flex flex-wrap items-center justify-center gap-2 ">
              <Statscard
                label="Total Hospitals"
                value={Stats.totalHospitals ?? 0}
                icon="local_hospital"
                subtext="verified enteries"
                iconBg="bg-green-200"
              />
              <Statscard
                label="Total Reviews"
                value={Stats.totalReviews ?? 0}
                icon="rate_review"
                subtext="approved enteries"
                iconBg="bg-blue-200"
              />
              <Statscard
                label="Public Hospitals"
                value={Stats.totalPublicHospitals ?? 0}
                icon="account_balance"
                subtext="total public hospitals"
                iconBg="bg-purple-200"
              />
              <Statscard
                label="Private Hospitals"
                value={Stats.totalPrivateHospitals ?? 0}
                icon="business_center"
                subtext="total private hospitals"
                iconBg="bg-pink-200"
              />
            </div>
          </Container>
        </section>

        {/* hospital table */}
        <section>
         <HospitalTable />
        </section>
      </main>
    </div>
  );
}
