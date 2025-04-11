import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ForgotPasswordPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">비밀번호 찾기</CardTitle>
            <CardDescription>가입 시 등록한 이메일로 비밀번호 재설정 링크를 보내드립니다</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid gap-4">
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
                <Button type="submit" className="w-full">
                  비밀번호 재설정 링크 받기
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/login">로그인으로 돌아가기</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/find-id">아이디 찾기</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
