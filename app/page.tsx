import { DashboardShell } from "@/components/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardContent } from "@/components/dashboard-content"

export default function Home() {
  return (
    <DashboardShell>
      <DashboardHeader />
      <DashboardContent />
    </DashboardShell>
  )
}
