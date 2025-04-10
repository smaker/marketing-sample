import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, CreditCard, DollarSign, LineChart, Users } from "lucide-react"

export default function CardsPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-4">
        <div className="space-y-1.5">
          <h1 className="text-2xl font-bold tracking-tight">카드</h1>
          <p className="text-muted-foreground">다양한 용도로 사용할 수 있는 카드 컴포넌트입니다.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">총 수익</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₩45,231,890</div>
              <p className="text-xs text-muted-foreground">+20.1% 지난달 대비</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">구독자</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2,350</div>
              <p className="text-xs text-muted-foreground">+180.1% 지난달 대비</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">판매량</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">+19% 지난달 대비</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">활성 사용자</CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">+201 지난달 대비</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>계정 생성</CardTitle>
              <CardDescription>새 계정을 생성하려면 아래 정보를 입력하세요.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">이름</Label>
                <Input id="name" placeholder="이름을 입력하세요" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input id="email" placeholder="이메일을 입력하세요" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">비밀번호</Label>
                <Input id="password" placeholder="비밀번호를 입력하세요" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">계정 생성</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>알림 설정</CardTitle>
              <CardDescription>알림 수신 방법을 선택하세요.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-notifications">이메일 알림</Label>
                <Input id="email-notifications" placeholder="이메일 주소" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sms-notifications">SMS 알림</Label>
                <Input id="sms-notifications" placeholder="전화번호" type="tel" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">취소</Button>
              <Button>저장</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>통계</CardTitle>
              <CardDescription>지난 30일 동안의 주요 지표</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="overview">개요</TabsTrigger>
                  <TabsTrigger value="analytics">분석</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4 pt-4">
                  <div className="grid gap-4 grid-cols-2">
                    <Card>
                      <CardContent className="p-2">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <div className="text-xs">사용자</div>
                        </div>
                        <div className="text-lg font-bold">+2,340</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-2">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="h-4 w-4 text-muted-foreground" />
                          <div className="text-xs">수익</div>
                        </div>
                        <div className="text-lg font-bold">₩12.5M</div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="analytics" className="space-y-4 pt-4">
                  <div className="grid gap-4 grid-cols-2">
                    <Card>
                      <CardContent className="p-2">
                        <div className="flex items-center gap-2">
                          <LineChart className="h-4 w-4 text-muted-foreground" />
                          <div className="text-xs">전환율</div>
                        </div>
                        <div className="text-lg font-bold">12.5%</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-2">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="h-4 w-4 text-muted-foreground" />
                          <div className="text-xs">세션</div>
                        </div>
                        <div className="text-lg font-bold">23,456</div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  )
}
