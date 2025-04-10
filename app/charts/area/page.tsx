import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart } from "@/components/charts/area-chart"

export default function AreaChartPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-4">
        <div className="space-y-1.5">
          <h1 className="text-2xl font-bold tracking-tight">영역 차트</h1>
          <p className="text-muted-foreground">시간에 따른 데이터 변화를 시각화하는 영역 차트입니다.</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>월별 수익</CardTitle>
            <CardDescription>지난 12개월 동안의 월별 수익 추이를 보여줍니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <AreaChart />
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}
