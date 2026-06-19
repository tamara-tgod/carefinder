"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function SignOutBtn() {
  const router = useRouter();

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
  }

  return (
    <button onClick={handleSignOut} className="flex items-center gap-2 text-sm rounded-md hover:bg-primary hover:text-on-primary px-1 py-3 transition-colors cursor-pointer">
      <span className="material-symbols-outlined">logout</span>
      Log Out
    </button>
  );
}
