"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import {
  ChevronDown,
  LayoutDashboard,
  BarChart3,
  PieChart,
  LineChart,
  Table,
  Settings,
  FileText,
  Users,
  Layers,
  Package,
} from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface SidebarProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function Sidebar({ open, onOpenChange }: SidebarProps) {
  const pathname = usePathname()
  const isMobile = useMobile()
  const isActive = (path: string) => pathname === path

  const SidebarContent = () => (
    <div className="flex h-full flex-col gap-2">
      <div className="flex h-14 items-center border-b border-primary/20 px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Package className="h-6 w-6 text-primary-foreground" />
          <span className="text-xl font-bold">서비스 이름</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 overflow-auto py-2">
        <div className="flex flex-col gap-1 px-2">
          <Link href="/" passHref>
            <Button
              variant={isActive("/") ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-2",
                isActive("/") ? "bg-white text-primary font-medium" : "hover:bg-primary/90 text-primary-foreground",
              )}
              asChild
            >
              <div>
                <LayoutDashboard className="h-5 w-5" />
                대시보드
              </div>
            </Button>
          </Link>

          <Collapsible className="w-full">
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-between gap-2 font-medium",
                  "hover:bg-primary/90 text-primary-foreground",
                )}
              >
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  자동 입찰 관리
                </div>
                <ChevronDown className="h-4 w-4 shrink-0" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="flex flex-col gap-1 pl-6 pt-1">
              <Link href="/charts/area" passHref>
                <Button
                  variant={isActive("/charts/area") ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    isActive("/charts/area")
                      ? "bg-white text-primary font-medium"
                      : "hover:bg-primary/90 text-primary-foreground",
                  )}
                  asChild
                >
                  <div>
                    <LineChart className="mr-2 h-4 w-4" />
                    입찰 전략 설정
                  </div>
                </Button>
              </Link>
              <Link href="/charts/bar" passHref>
                <Button
                  variant={isActive("/charts/bar") ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    isActive("/charts/bar")
                      ? "bg-white text-primary font-medium"
                      : "hover:bg-primary/90 text-primary-foreground",
                  )}
                  asChild
                >
                  <div>
                    <BarChart3 className="mr-2 h-4 w-4" />
                    예산 관리
                  </div>
                </Button>
              </Link>
              <Link href="/charts/pie" passHref>
                <Button
                  variant={isActive("/charts/pie") ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    isActive("/charts/pie")
                      ? "bg-white text-primary font-medium"
                      : "hover:bg-primary/90 text-primary-foreground",
                  )}
                  asChild
                >
                  <div>
                    <PieChart className="mr-2 h-4 w-4" />
                    자동 최적화
                  </div>
                </Button>
              </Link>
            </CollapsibleContent>
          </Collapsible>

          <Link href="/tables" passHref>
            <Button
              variant={isActive("/tables") ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-2",
                isActive("/tables")
                  ? "bg-white text-primary font-medium"
                  : "hover:bg-primary/90 text-primary-foreground",
              )}
              asChild
            >
              <div>
                <Table className="h-5 w-5" />
                테이블
              </div>
            </Button>
          </Link>

          <Collapsible className="w-full">
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-between gap-2 font-medium",
                  "hover:bg-primary/90 text-primary-foreground",
                )}
              >
                <div className="flex items-center gap-2">
                  <Layers className="h-5 w-5" />
                  UI 컴포넌트
                </div>
                <ChevronDown className="h-4 w-4 shrink-0" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="flex flex-col gap-1 pl-6 pt-1">
              <Link href="/ui/buttons" passHref>
                <Button
                  variant={isActive("/ui/buttons") ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    isActive("/ui/buttons")
                      ? "bg-white text-primary font-medium"
                      : "hover:bg-primary/90 text-primary-foreground",
                  )}
                  asChild
                >
                  <div>버튼</div>
                </Button>
              </Link>
              <Link href="/ui/cards" passHref>
                <Button
                  variant={isActive("/ui/cards") ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    isActive("/ui/cards")
                      ? "bg-white text-primary font-medium"
                      : "hover:bg-primary/90 text-primary-foreground",
                  )}
                  asChild
                >
                  <div>카드</div>
                </Button>
              </Link>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible className="w-full">
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-between gap-2 font-medium",
                  "hover:bg-primary/90 text-primary-foreground",
                )}
              >
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  유틸리티
                </div>
                <ChevronDown className="h-4 w-4 shrink-0" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="flex flex-col gap-1 pl-6 pt-1">
              <Link href="/utilities/colors" passHref>
                <Button
                  variant={isActive("/utilities/colors") ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    isActive("/utilities/colors")
                      ? "bg-white text-primary font-medium"
                      : "hover:bg-primary/90 text-primary-foreground",
                  )}
                  asChild
                >
                  <div>색상</div>
                </Button>
              </Link>
              <Link href="/utilities/borders" passHref>
                <Button
                  variant={isActive("/utilities/borders") ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    isActive("/utilities/borders")
                      ? "bg-white text-primary font-medium"
                      : "hover:bg-primary/90 text-primary-foreground",
                  )}
                  asChild
                >
                  <div>테두리</div>
                </Button>
              </Link>
            </CollapsibleContent>
          </Collapsible>

          <div className="my-2 h-px bg-border" />

          <Link href="/users" passHref>
            <Button
              variant={isActive("/users") ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-2",
                isActive("/users")
                  ? "bg-white text-primary font-medium"
                  : "hover:bg-primary/90 text-primary-foreground",
              )}
              asChild
            >
              <div>
                <Users className="h-5 w-5" />
                사용자 관리
              </div>
            </Button>
          </Link>

          <Link href="/settings" passHref>
            <Button
              variant={isActive("/settings") ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-2",
                isActive("/settings")
                  ? "bg-white text-primary font-medium"
                  : "hover:bg-primary/90 text-primary-foreground",
              )}
              asChild
            >
              <div>
                <Settings className="h-5 w-5" />
                설정
              </div>
            </Button>
          </Link>
        </div>
      </ScrollArea>
    </div>
  )

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="left" className="p-0 bg-primary text-primary-foreground border-r-primary">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div className="hidden border-r bg-primary text-primary-foreground md:block md:w-64">
      <SidebarContent />
    </div>
  )
}
