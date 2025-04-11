import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FcGoogle } from "react-icons/fc"

export default function SignupPage() {
  return (
    <div className="container relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          마케팅 자동화
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">&ldquo;마케팅 자동화 플랫폼을 통해 비즈니스 성장을 가속화하세요.&rdquo;</p>
            <footer className="text-sm">Marketing Automation</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">회원가입</h1>
            <p className="text-sm text-muted-foreground">계정을 만들어 마케팅 자동화 서비스를 이용하세요</p>
          </div>
          <div className="grid gap-6">
            <form>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">이름</Label>
                  <Input id="name" placeholder="홍길동" type="text" autoCapitalize="none" autoCorrect="off" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">비밀번호</Label>
                  <Input id="password" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password-confirm">비밀번호 확인</Label>
                  <Input id="password-confirm" type="password" />
                </div>
                <div className="grid gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/phone-verification">휴대폰 본인인증</Link>
                  </Button>
                </div>
                <Button type="submit">회원가입</Button>
              </div>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">또는</span>
              </div>
            </div>
            <Button variant="outline" type="button" className="flex items-center gap-2">
              <FcGoogle className="h-5 w-5" />
              <span>Google 계정으로 가입</span>
            </Button>
          </div>
          <div className="text-center text-sm">
            이미 계정이 있으신가요?{" "}
            <Link href="/login" className="text-primary underline-offset-4 hover:underline">
              로그인
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
