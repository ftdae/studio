"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { LineChart, FileText, FileSignature, Settings, LayoutDashboard } from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard/one-pager", icon: FileText, label: "One-Pagers" },
  { href: "/dashboard/info-memo", icon: FileSignature, label: "Info Memos" },
  { href: "/dashboard/settings", icon: Settings, label: "Settings" },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <SidebarMenuButton
            asChild
            isActive={pathname === item.href}
            tooltip={{ children: item.label }}
          >
            <Link href={item.href}>
              <item.icon />
              <span>{item.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
