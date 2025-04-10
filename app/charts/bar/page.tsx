import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart } from "@/components/charts/bar-chart"

export default function BarChartPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-4">
        <div className="space-y-1.5">
          <h1 className="text-2xl font-bold tracking-tight">막대 차트</h1>
          <p className="text-muted-foreground">카테고리별 데이터를 비교하는 막대 차트입니다.</p>
        </div>
        <Card className="h-[500px]">
          <CardHeader>
            <CardTitle>요일별 방문자 수</CardTitle>
            <CardDescription>지난 주 요일별 웹사이트 방문자 수를 보여줍니다.</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px]">
            <BarChart />
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}
