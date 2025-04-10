"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, ChevronDown, LogOut, Menu, MessageSquare, Search, Settings, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"

interface TopbarProps {
  onMenuButtonClick?: () => void
}

export function Topbar({ onMenuButtonClick }: TopbarProps) {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
      <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuButtonClick}>
        <Menu className="h-5 w-5" />
        <span className="sr-only">메뉴 열기</span>
      </Button>

      <div className="w-full flex-1">
        {showSearch ? (
          <div className="relative w-full sm:max-w-[400px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="검색..."
              className="w-full pl-8 sm:w-[300px] md:w-[400px]"
              autoFocus
              onBlur={() => setShowSearch(false)}
            />
          </div>
        ) : (
          <Button
            variant="outline"
            size="sm"
            className="ml-auto hidden h-8 gap-1 md:flex"
            onClick={() => setShowSearch(true)}
          >
            <Search className="h-4 w-4" />
            <span className="text-muted-foreground">검색...</span>
          </Button>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => setShowSearch(true)}>
          <Search className="h-5 w-5" />
          <span className="sr-only">검색</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0" variant="destructive">
                3
              </Badge>
              <span className="sr-only">알림</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[280px]">
            <DropdownMenuLabel>알림</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="grid gap-1">
              <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                <div className="text-sm font-medium">새로운 메시지</div>
                <div className="text-xs text-muted-foreground">홍길동님이 새로운 메시지를 보냈습니다.</div>
                <div className="mt-1 text-xs text-muted-foreground/70">방금 전</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                <div className="text-sm font-medium">캠페인 완료</div>
                <div className="text-xs text-muted-foreground">여름 프로모션 캠페인이 완료되었습니다.</div>
                <div className="mt-1 text-xs text-muted-foreground/70">1시간 전</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                <div className="text-sm font-medium">시스템 알림</div>
                <div className="text-xs text-muted-foreground">시스템 업데이트가 완료되었습니다.</div>
                <div className="mt-1 text-xs text-muted-foreground/70">어제</div>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-center">모든 알림 보기</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <MessageSquare className="h-5 w-5" />
              <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0" variant="destructive">
                5
              </Badge>
              <span className="sr-only">메시지</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[280px]">
            <DropdownMenuLabel>메시지</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="grid gap-1">
              <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                <div className="text-sm font-medium">김철수</div>
                <div className="text-xs text-muted-foreground">안녕하세요, 마케팅 계획에 대해 논의하고 싶습니다.</div>
                <div className="mt-1 text-xs text-muted-foreground/70">10분 전</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                <div className="text-sm font-medium">이영희</div>
                <div className="text-xs text-muted-foreground">보고서 검토 부탁드립니다.</div>
                <div className="mt-1 text-xs text-muted-foreground/70">30분 전</div>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-center">모든 메시지 보기</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <ThemeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="hidden gap-1 md:inline-flex">
              <Avatar className="h-6 w-6">
                <AvatarImage src="/placeholder.svg" alt="프로필" />
                <AvatarFallback>관</AvatarFallback>
              </Avatar>
              <span>관리자</span>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>내 계정</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              프로필
            </DropdownMenuItem>
            <DropdownMenuItem>
              <MessageSquare className="mr-2 h-4 w-4" />
              메시지
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              설정
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              로그아웃
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Avatar className="h-6 w-6">
                <AvatarImage src="/placeholder.svg" alt="프로필" />
                <AvatarFallback>관</AvatarFallback>
              </Avatar>
              <span className="sr-only">내 계정</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>내 계정</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              프로필
            </DropdownMenuItem>
            <DropdownMenuItem>
              <MessageSquare className="mr-2 h-4 w-4" />
              메시지
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              설정
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              로그아웃
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
