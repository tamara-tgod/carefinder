import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { getStats } from "@/services/hospitalService";
import Statscard from "@/components/admin/StatsCard";
import HospitalTable from "@/components/admin/HospitalTable";
import Container from "@/components/Container";

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
    <div className="bg-surface flex ">
      <aside>
        <AdminSidebar />
      </aside>
      <main className="w-full">
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
                label="Total Public Hospitals"
                value={Stats.totalPublicHospitals ?? 0}
                icon="account_balance"
                subtext="approved enteries"
                iconBg="bg-purple-200"
              />
              <Statscard
                label="Total Private Hospitals"
                value={Stats.totalPrivateHospitals ?? 0}
                icon="business_center"
                subtext="approved enteries"
                iconBg="bg-pink-200"
              />
            </div>
          </Container>
        </section>

        {/* hospital table */}
        <section>
          <Container>
            <HospitalTable />
          </Container>
        </section>
      </main>
    </div>
  );
}
