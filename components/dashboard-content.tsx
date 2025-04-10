"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  ArrowDown,
  ArrowUp,
  Calendar,
  DollarSign,
  Download,
  MailIcon,
  ShoppingCart,
  Users,
  FileText,
  Bell,
} from "lucide-react"
import { AreaChart } from "@/components/charts/area-chart"
import { BarChart } from "@/components/charts/bar-chart"
import { PieChart as PieChartComponent } from "@/components/charts/pie-chart"

export function DashboardContent() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-6">
      <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">개요</TabsTrigger>
          <TabsTrigger value="analytics">분석</TabsTrigger>
          <TabsTrigger value="reports">보고서</TabsTrigger>
          <TabsTrigger value="notifications">알림</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">총 수익</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₩45,231,890</div>
                <div className="flex items-center pt-1 text-xs text-muted-foreground">
                  <ArrowUp className="mr-1 h-3 w-3 text-emerald-500" />
                  <span className="text-emerald-500">12%</span>
                  <span className="ml-1">지난달 대비</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">신규 고객</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2,350</div>
                <div className="flex items-center pt-1 text-xs text-muted-foreground">
                  <ArrowUp className="mr-1 h-3 w-3 text-emerald-500" />
                  <span className="text-emerald-500">5.4%</span>
                  <span className="ml-1">지난달 대비</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">판매량</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <div className="flex items-center pt-1 text-xs text-muted-foreground">
                  <ArrowDown className="mr-1 h-3 w-3 text-rose-500" />
                  <span className="text-rose-500">-2.5%</span>
                  <span className="ml-1">지난달 대비</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">활성 캠페인</CardTitle>
                <MailIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <div className="flex items-center pt-1 text-xs text-muted-foreground">
                  <ArrowUp className="mr-1 h-3 w-3 text-emerald-500" />
                  <span className="text-emerald-500">12%</span>
                  <span className="ml-1">지난달 대비</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>캠페인 성과</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <AreaChart />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>광고비 사용</CardTitle>
                <CardDescription>지난 30일 동안 총 265건의 판매가 있었습니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="flex items-center">
                    <div className="mr-4 shrink-0">
                      <Badge className="h-8 w-8 rounded-full" variant="outline">
                        <ShoppingCart className="h-4 w-4" />
                      </Badge>
                    </div>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">프리미엄 마케팅 패키지</p>
                      <p className="text-sm text-muted-foreground">2시간 전</p>
                    </div>
                    <div className="ml-auto font-medium">+₩1,999,000</div>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4 shrink-0">
                      <Badge className="h-8 w-8 rounded-full" variant="outline">
                        <Users className="h-4 w-4" />
                      </Badge>
                    </div>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">기본 마케팅 패키지</p>
                      <p className="text-sm text-muted-foreground">5시간 전</p>
                    </div>
                    <div className="ml-auto font-medium">+₩599,000</div>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4 shrink-0">
                      <Badge className="h-8 w-8 rounded-full" variant="outline">
                        <MailIcon className="h-4 w-4" />
                      </Badge>
                    </div>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">이메일 마케팅 서비스</p>
                      <p className="text-sm text-muted-foreground">1일 전</p>
                    </div>
                    <div className="ml-auto font-medium">+₩299,000</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>캠페인 성과</CardTitle>
                <CardDescription>현재 진행 중인 캠페인의 성과를 확인하세요.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium">여름 프로모션</div>
                      <div>78%</div>
                    </div>
                    <Progress value={78} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium">신규 고객 유치</div>
                      <div>62%</div>
                    </div>
                    <Progress value={62} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium">소셜 미디어 마케팅</div>
                      <div>44%</div>
                    </div>
                    <Progress value={44} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium">이메일 뉴스레터</div>
                      <div>35%</div>
                    </div>
                    <Progress value={35} />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>트래픽 소스</CardTitle>
                <CardDescription>웹사이트 트래픽의 주요 소스를 확인하세요.</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <PieChartComponent />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>방문자 통계</CardTitle>
                <CardDescription>일일 웹사이트 방문자 수</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2,856</div>
                <div className="flex items-center pt-1 text-sm text-muted-foreground">
                  <ArrowUp className="mr-1 h-4 w-4 text-emerald-500" />
                  <span className="text-emerald-500">8.2%</span>
                  <span className="ml-1">지난주 대비</span>
                </div>
                <div className="mt-4 h-[80px]">
                  <BarChart />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>전환율</CardTitle>
                <CardDescription>방문자 대비 전환 비율</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">3.6%</div>
                <div className="flex items-center pt-1 text-sm text-muted-foreground">
                  <ArrowDown className="mr-1 h-4 w-4 text-rose-500" />
                  <span className="text-rose-500">0.8%</span>
                  <span className="ml-1">지난주 대비</span>
                </div>
                <div className="mt-4 h-[80px]">
                  <AreaChart />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>평균 체류 시간</CardTitle>
                <CardDescription>사용자 평균 체류 시간</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">3분 42초</div>
                <div className="flex items-center pt-1 text-sm text-muted-foreground">
                  <ArrowUp className="mr-1 h-4 w-4 text-emerald-500" />
                  <span className="text-emerald-500">12.3%</span>
                  <span className="ml-1">지난주 대비</span>
                </div>
                <div className="mt-4 h-[80px]">
                  <AreaChart />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>트래픽 분석</CardTitle>
              <CardDescription>지난 30일간의 웹사이트 트래픽 분석</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <AreaChart />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>보고서</CardTitle>
              <CardDescription>마케팅 캠페인 및 성과 보고서</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">월간 마케팅 성과 보고서</div>
                        <div className="text-sm text-muted-foreground">2023년 4월</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Download className="h-4 w-4" />
                      다운로드
                    </Button>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">분기별 마케팅 성과 보고서</div>
                        <div className="text-sm text-muted-foreground">2023년 1분기</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Download className="h-4 w-4" />
                      다운로드
                    </Button>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">소셜 미디어 캠페인 분석</div>
                        <div className="text-sm text-muted-foreground">2023년 3월</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Download className="h-4 w-4" />
                      다운로드
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>알림</CardTitle>
              <CardDescription>최근 시스템 알림 및 업데이트</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4 rounded-lg border p-4">
                  <Badge className="h-8 w-8 rounded-full" variant="outline">
                    <Bell className="h-4 w-4" />
                  </Badge>
                  <div className="flex-1 space-y-1">
                    <div className="font-medium">시스템 업데이트 완료</div>
                    <div className="text-sm text-muted-foreground">
                      마케팅 자동화 시스템이 최신 버전으로 업데이트되었습니다.
                    </div>
                    <div className="text-xs text-muted-foreground/70">1시간 전</div>
                  </div>
                </div>
                <div className="flex gap-4 rounded-lg border p-4">
                  <Badge className="h-8 w-8 rounded-full" variant="outline">
                    <Calendar className="h-4 w-4" />
                  </Badge>
                  <div className="flex-1 space-y-1">
                    <div className="font-medium">예정된 캠페인 알림</div>
                    <div className="text-sm text-muted-foreground">여름 프로모션 캠페인이 내일 시작됩니다.</div>
                    <div className="text-xs text-muted-foreground/70">3시간 전</div>
                  </div>
                </div>
                <div className="flex gap-4 rounded-lg border p-4">
                  <Badge className="h-8 w-8 rounded-full" variant="outline">
                    <Users className="h-4 w-4" />
                  </Badge>
                  <div className="flex-1 space-y-1">
                    <div className="font-medium">신규 구독자 마일스톤</div>
                    <div className="text-sm text-muted-foreground">뉴스레터 구독자가 10,000명을 돌파했습니다!</div>
                    <div className="text-xs text-muted-foreground/70">어제</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
