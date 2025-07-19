"use client";

import { SidebarProvider, Sidebar, SidebarInset, SidebarTrigger, SidebarHeader, SidebarContent } from "@/components/ui/sidebar";
import { UserNav } from "@/components/dashboard/user-nav";
import { SidebarNav } from "@/components/dashboard/sidebar-nav";
import { Briefcase } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full bg-background">
        <Sidebar>
          <SidebarHeader>
            <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2.5">
              <Briefcase className="size-6 text-primary" />
              <h1 className="text-xl font-bold tracking-tighter">ValuatorAI</h1>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarNav />
          </SidebarContent>
        </Sidebar>
        <div className="flex flex-col transition-all duration-200 ease-linear md:ml-[--sidebar-width] group-data-[collapsible=icon]/sidebar-wrapper:md:ml-[--sidebar-width-icon]">
          <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
            <SidebarTrigger className="md:hidden" />
            <div className="flex-1" />
            <UserNav />
          </header>
          <main className="flex-1 p-4 md:p-8">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
