import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ColorsPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-4">
        <div className="space-y-1.5">
          <h1 className="text-2xl font-bold tracking-tight">색상</h1>
          <p className="text-muted-foreground">시스템에서 사용되는 주요 색상 팔레트입니다.</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>기본 색상</CardTitle>
            <CardDescription>UI 전반에 걸쳐 사용되는 기본 색상입니다.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">주요 색상</h3>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="space-y-2">
                  <div className="h-20 w-full rounded-md bg-primary"></div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Primary</p>
                    <p className="text-xs text-muted-foreground">주요 액션 및 강조 요소</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-20 w-full rounded-md bg-secondary"></div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Secondary</p>
                    <p className="text-xs text-muted-foreground">보조 액션 및 요소</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-20 w-full rounded-md bg-accent"></div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Accent</p>
                    <p className="text-xs text-muted-foreground">강조 및 액센트 요소</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-20 w-full rounded-md bg-destructive"></div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Destructive</p>
                    <p className="text-xs text-muted-foreground">삭제 및 위험 액션</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">배경 색상</h3>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="space-y-2">
                  <div className="h-20 w-full rounded-md bg-background border"></div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Background</p>
                    <p className="text-xs text-muted-foreground">기본 배경 색상</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-20 w-full rounded-md bg-card border"></div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Card</p>
                    <p className="text-xs text-muted-foreground">카드 배경 색상</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-20 w-full rounded-md bg-muted"></div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Muted</p>
                    <p className="text-xs text-muted-foreground">약화된 배경 색상</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-20 w-full rounded-md bg-popover border"></div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Popover</p>
                    <p className="text-xs text-muted-foreground">팝오버 배경 색상</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">텍스트 색상</h3>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="space-y-2">
                  <div className="flex h-20 w-full items-center justify-center rounded-md bg-background border">
                    <span className="text-foreground text-lg font-bold">Aa</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Foreground</p>
                    <p className="text-xs text-muted-foreground">기본 텍스트 색상</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex h-20 w-full items-center justify-center rounded-md bg-background border">
                    <span className="text-muted-foreground text-lg font-bold">Aa</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Muted Foreground</p>
                    <p className="text-xs text-muted-foreground">약화된 텍스트 색상</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex h-20 w-full items-center justify-center rounded-md bg-primary">
                    <span className="text-primary-foreground text-lg font-bold">Aa</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Primary Foreground</p>
                    <p className="text-xs text-muted-foreground">주요 배경 위 텍스트</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex h-20 w-full items-center justify-center rounded-md bg-secondary">
                    <span className="text-secondary-foreground text-lg font-bold">Aa</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Secondary Foreground</p>
                    <p className="text-xs text-muted-foreground">보조 배경 위 텍스트</p>
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
