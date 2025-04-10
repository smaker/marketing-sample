import { Button } from "@/components/ui/button"
import { Download, FileSpreadsheet, FileText, Plus } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export function DashboardHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="space-y-1.5">
        <h1 className="text-2xl font-bold tracking-tight">대시보드</h1>
        <p className="text-muted-foreground">마케팅 자동화 시스템의 주요 지표와 통계를 확인하세요.</p>
      </div>
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline-flex">보고서 다운로드</span>
              <span className="sm:hidden">다운로드</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="cursor-pointer">
              <div className="w-full">
                <div className="flex align-items-center text-black-600 text-sm">
                  <FileSpreadsheet className="mr-1" />
                  <span>CSV</span>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <div className="w-full">
                <div className="flex align-items-center text-red-600 text-sm">
                  <FileText className="mr-1" />
                  <span>PDF</span>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <div className="w-full">
                <div className="flex align-items-center text-green-600 text-sm">
                  <FileSpreadsheet className="mr-1" />
                  <span>Excel</span>
                </div>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button size="sm" className="h-8 gap-1">
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline-flex">새 캠페인</span>
          <span className="sm:hidden">추가</span>
        </Button>
      </div>
    </div>
  )
}
