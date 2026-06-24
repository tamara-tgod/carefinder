"use client";
import Link from "next/link";
import SignOutBtn from "./SignOutBtn";
import { usePathname } from "next/navigation";

interface SidebarNavProps {
  links: {
    label: string;
    href: string;
    icon: string;
  }[];
}

export default function SidebarNav({ links }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <div>
      <div className="flex flex-col gap-1.5">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`flex items-center gap-2 text-sm hover:bg-primary rounded-md hover:text-on-primary px-1 py-3 
              transition-colors cursor-pointer
              ${pathname === link.href ? "border-b-2 border-l-2 border-primary" : "text-on-surface-variant"}
              `}
          >
            <span className="material-symbols-outlined">{link.icon}</span>
            {link.label}
          </Link>
        ))}

        {/*log out btn*/}
        <SignOutBtn />
      </div>
    </div>
  );
}
