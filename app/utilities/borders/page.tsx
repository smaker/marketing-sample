import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BordersPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-4">
        <div className="space-y-1.5">
          <h1 className="text-2xl font-bold tracking-tight">테두리</h1>
          <p className="text-muted-foreground">UI 요소에 적용할 수 있는 테두리 스타일입니다.</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>테두리 반경</CardTitle>
            <CardDescription>다양한 크기의 테두리 반경을 제공합니다.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="space-y-2">
                <div className="h-20 w-full rounded-none bg-muted border"></div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">None</p>
                  <p className="text-xs text-muted-foreground">rounded-none</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-20 w-full rounded-sm bg-muted border"></div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Small</p>
                  <p className="text-xs text-muted-foreground">rounded-sm</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-20 w-full rounded-md bg-muted border"></div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Medium</p>
                  <p className="text-xs text-muted-foreground">rounded-md</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-20 w-full rounded-lg bg-muted border"></div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Large</p>
                  <p className="text-xs text-muted-foreground">rounded-lg</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-20 w-full rounded-xl bg-muted border"></div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Extra Large</p>
                  <p className="text-xs text-muted-foreground">rounded-xl</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-20 w-full rounded-2xl bg-muted border"></div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">2XL</p>
                  <p className="text-xs text-muted-foreground">rounded-2xl</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-20 w-full rounded-3xl bg-muted border"></div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">3XL</p>
                  <p className="text-xs text-muted-foreground">rounded-3xl</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-20 w-full rounded-full bg-muted border"></div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Full</p>
                  <p className="text-xs text-muted-foreground">rounded-full</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">테두리 두께</h3>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="space-y-2">
                  <div className="h-20 w-full rounded-md border-0 bg-muted"></div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">None</p>
                    <p className="text-xs text-muted-foreground">border-0</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-20 w-full rounded-md border bg-muted"></div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Default</p>
                    <p className="text-xs text-muted-foreground">border</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-20 w-full rounded-md border-2 bg-muted"></div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Medium</p>
                    <p className="text-xs text-muted-foreground">border-2</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-20 w-full rounded-md border-4 bg-muted"></div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Large</p>
                    <p className="text-xs text-muted-foreground">border-4</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}
