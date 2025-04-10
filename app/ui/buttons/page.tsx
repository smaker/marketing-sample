import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Mail, Plus, Send, Trash } from "lucide-react"

export default function ButtonsPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-4">
        <div className="space-y-1.5">
          <h1 className="text-2xl font-bold tracking-tight">버튼</h1>
          <p className="text-muted-foreground">다양한 스타일과 크기의 버튼 컴포넌트입니다.</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>버튼 변형</CardTitle>
            <CardDescription>다양한 스타일의 버튼 변형을 제공합니다.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex flex-wrap gap-4">
              <Button>기본</Button>
              <Button variant="secondary">보조</Button>
              <Button variant="destructive">삭제</Button>
              <Button variant="outline">외곽선</Button>
              <Button variant="ghost">고스트</Button>
              <Button variant="link">링크</Button>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium">버튼 크기</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg">크게</Button>
                <Button>기본</Button>
                <Button size="sm">작게</Button>
                <Button size="icon" className="h-10 w-10">
                  <Plus className="h-4 w-4" />
                </Button>
                <Button size="icon" className="h-8 w-8">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium">아이콘 버튼</h3>
              <div className="flex flex-wrap gap-4">
                <Button>
                  <Mail className="mr-2 h-4 w-4" /> 이메일 보내기
                </Button>
                <Button variant="secondary">
                  <Download className="mr-2 h-4 w-4" /> 다운로드
                </Button>
                <Button variant="destructive">
                  <Trash className="mr-2 h-4 w-4" /> 삭제
                </Button>
                <Button variant="outline">
                  <Send className="mr-2 h-4 w-4" /> 전송
                </Button>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium">버튼 상태</h3>
              <div className="flex flex-wrap gap-4">
                <Button disabled>비활성화</Button>
                <Button variant="secondary" disabled>
                  비활성화
                </Button>
                <Button className="w-32" disabled>
                  <svg
                    className="mr-2 h-4 w-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                  로딩 중
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}
