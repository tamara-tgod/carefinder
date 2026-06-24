import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import Image from "next/image";
import SidebarNav from "./SidebarNav";

export default async function AdminSidebar() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

   const navLinks = [
    {
      label: "Overview",
      href: "/admin",
      icon: "dashboard_2",
    },
    {
      label: "Hospital Directory",
      href: "/admin/hospitals",
      icon: "local_hospital",
    },
    {
      label: "User Management",
      href: "/admin/users",
      icon: "group",
    },
    {
      label: "Reports",
      href: "/admin/reports",
      icon: "insert_chart",
    },
  ];


  return (
    <div className="bg-outline-variant/20 flex flex-col justify-between w-64 h-screen p-2">
      <div className="flex flex-col gap-6">
        <div>
          <Link href={"/"}>
            <h1 className="text-xl text-primary font-semibold">Carefinder</h1>
          </Link>
          <p className="text-on-surface-variant text-sm">Admin Panel</p>
        </div>

         <SidebarNav links={navLinks}/>
 
      </div>
      <div className="flex items-center gap-1.5">
        <Image
          src={`https://ui-avatars.com/api/?name=${user?.email}&background=005f37&color=fff`}
          width={40}
          height={40}
          alt="avatar"
          className="rounded-full"
        />
       

        <div className="">
          <h3>Admin User</h3>
          <p className="text-xs text-on-surface-variant">{user?.email}</p>
        </div>
      </div>
    </div>
  );
}
