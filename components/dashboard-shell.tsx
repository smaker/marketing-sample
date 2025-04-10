"use client"

import type React from "react"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Topbar } from "@/components/topbar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useMobile } from "@/hooks/use-mobile"

interface DashboardShellProps {
  children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const isMobile = useMobile()

  return (
    <div className="flex min-h-screen bg-muted/20">
      <Sidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />
      <div className="flex flex-1 flex-col">
        <Topbar onMenuButtonClick={() => setSidebarOpen(!sidebarOpen)} />
        <ScrollArea className="flex-1">
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </ScrollArea>
      </div>
    </div>
  )
}
