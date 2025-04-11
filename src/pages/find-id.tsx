import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FindIdPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">아이디 찾기</CardTitle>
            <CardDescription>가입 시 등록한 정보로 아이디를 찾을 수 있습니다</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="phone" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="phone">휴대폰 번호로 찾기</TabsTrigger>
                <TabsTrigger value="email">이메일로 찾기</TabsTrigger>
              </TabsList>
              <TabsContent value="phone">
                <form className="mt-4 space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name-phone">이름</Label>
                    <Input id="name-phone" placeholder="홍길동" type="text" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">휴대폰 번호</Label>
                    <div className="flex gap-2">
                      <Input id="phone" placeholder="010-0000-0000" type="tel" />
                      <Button type="button" variant="outline">
                        인증번호 발송
                      </Button>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="verification-code">인증번호</Label>
                    <Input id="verification-code" placeholder="인증번호 6자리" type="text" maxLength={6} />
                    <div className="text-sm text-muted-foreground">
                      인증번호 유효시간: <span className="text-primary">03:00</span>
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    아이디 찾기
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="email">
                <form className="mt-4 space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name-email">이름</Label>
                    <Input id="name-email" placeholder="홍길동" type="text" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email-recovery">이메일</Label>
                    <Input id="email-recovery" placeholder="name@example.com" type="email" />
                  </div>
                  <Button type="submit" className="w-full">
                    아이디 찾기
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/login">로그인으로 돌아가기</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/forgot-password">비밀번호 찾기</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
