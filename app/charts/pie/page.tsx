import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart } from "@/components/charts/pie-chart"

export default function PieChartPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-4">
        <div className="space-y-1.5">
          <h1 className="text-2xl font-bold tracking-tight">파이 차트</h1>
          <p className="text-muted-foreground">전체에 대한 부분의 비율을 시각화하는 파이 차트입니다.</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>트래픽 소스</CardTitle>
            <CardDescription>웹사이트 트래픽의 주요 소스를 보여줍니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <PieChart />
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}
