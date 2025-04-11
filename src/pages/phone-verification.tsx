import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PhoneVerificationPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">휴대폰 본인인증</CardTitle>
            <CardDescription>안전한 서비스 이용을 위해 휴대폰 본인인증이 필요합니다</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="phone">휴대폰 번호</Label>
                  <div className="flex gap-2">
                    <Input id="phone" placeholder="010-0000-0000" type="tel" autoCapitalize="none" autoCorrect="off" />
                    <Button type="button" variant="outline">
                      인증번호 발송
                    </Button>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="verification-code">인증번호</Label>
                  <div className="flex gap-2">
                    <Input id="verification-code" placeholder="인증번호 6자리" type="text" maxLength={6} />
                    <Button type="button" variant="outline">
                      확인
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    인증번호 유효시간: <span className="text-primary">03:00</span>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/signup">이전</Link>
            </Button>
            <Button type="submit">인증 완료</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
