"use client"
import { DashboardShell } from "@/components/dashboard-shell"
import { DataTable } from "@/components/data-table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { ColumnDef } from "@tanstack/react-table"

type Status = "active" | "pending" | "completed" | "canceled"

interface Campaign {
  id: string
  name: string
  status: Status
  type: string
  startDate: string
  endDate: string
  budget: number
  conversion: number
}

const data: Campaign[] = [
  {
    id: "1",
    name: "여름 프로모션",
    status: "active",
    type: "이메일",
    startDate: "2023-06-01",
    endDate: "2023-08-31",
    budget: 5000000,
    conversion: 12.4,
  },
  {
    id: "2",
    name: "신규 고객 유치",
    status: "active",
    type: "소셜 미디어",
    startDate: "2023-05-15",
    endDate: "2023-07-15",
    budget: 3500000,
    conversion: 8.7,
  },
  {
    id: "3",
    name: "가을 시즌 캠페인",
    status: "pending",
    type: "디스플레이 광고",
    startDate: "2023-09-01",
    endDate: "2023-11-30",
    budget: 4200000,
    conversion: 0,
  },
  {
    id: "4",
    name: "블랙 프라이데이",
    status: "pending",
    type: "멀티 채널",
    startDate: "2023-11-20",
    endDate: "2023-11-27",
    budget: 7500000,
    conversion: 0,
  },
  {
    id: "5",
    name: "봄 시즌 프로모션",
    status: "completed",
    type: "이메일",
    startDate: "2023-03-01",
    endDate: "2023-05-31",
    budget: 3800000,
    conversion: 10.2,
  },
  {
    id: "6",
    name: "제품 출시 캠페인",
    status: "completed",
    type: "소셜 미디어",
    startDate: "2023-02-15",
    endDate: "2023-04-15",
    budget: 6200000,
    conversion: 15.8,
  },
  {
    id: "7",
    name: "연말 할인 프로모션",
    status: "canceled",
    type: "디스플레이 광고",
    startDate: "2023-12-01",
    endDate: "2023-12-31",
    budget: 5500000,
    conversion: 0,
  },
  {
    id: "8",
    name: "회원 재활성화",
    status: "active",
    type: "이메일",
    startDate: "2023-07-01",
    endDate: "2023-09-30",
    budget: 2800000,
    conversion: 5.6,
  },
  {
    id: "9",
    name: "모바일 앱 프로모션",
    status: "active",
    type: "푸시 알림",
    startDate: "2023-06-15",
    endDate: "2023-08-15",
    budget: 3200000,
    conversion: 9.3,
  },
  {
    id: "10",
    name: "겨울 시즌 캠페인",
    status: "pending",
    type: "멀티 채널",
    startDate: "2023-12-01",
    endDate: "2024-02-28",
    budget: 6800000,
    conversion: 0,
  },
]

export default function TablesPage() {
  const columns: ColumnDef<Campaign>[] = [
    {
      accessorKey: "name",
      header: "캠페인 이름",
    },
    {
      accessorKey: "status",
      header: "상태",
      cell: ({ row }) => {
        const status = row.getValue("status") as Status
        return (
          <Badge
            variant={
              status === "active"
                ? "default"
                : status === "pending"
                  ? "outline"
                  : status === "completed"
                    ? "secondary"
                    : "destructive"
            }
          >
            {status === "active" ? "활성" : status === "pending" ? "대기 중" : status === "completed" ? "완료" : "취소"}
          </Badge>
        )
      },
    },
    {
      accessorKey: "type",
      header: "유형",
    },
    {
      accessorKey: "startDate",
      header: "시작일",
    },
    {
      accessorKey: "endDate",
      header: "종료일",
    },
    {
      accessorKey: "budget",
      header: "예산",
      cell: ({ row }) => {
        const budget = Number.parseFloat(row.getValue("budget"))
        const formatted = new Intl.NumberFormat("ko-KR", {
          style: "currency",
          currency: "KRW",
        }).format(budget)
        return formatted
      },
    },
    {
      accessorKey: "conversion",
      header: "전환율",
      cell: ({ row }) => {
        const conversion = Number.parseFloat(row.getValue("conversion"))
        return conversion > 0 ? `${conversion}%` : "-"
      },
    },
  ]

  return (
    <DashboardShell>
      <div className="flex flex-col gap-4">
        <div className="space-y-1.5">
          <h1 className="text-2xl font-bold tracking-tight">테이블</h1>
          <p className="text-muted-foreground">마케팅 캠페인 데이터를 표시하는 테이블입니다.</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>마케팅 캠페인</CardTitle>
            <CardDescription>현재 진행 중이거나 예정된 마케팅 캠페인 목록입니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={data} />
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}
