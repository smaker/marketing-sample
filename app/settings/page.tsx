'use client'

import { useForm } from "react-hook-form";
import { DashboardShell } from "@/components/dashboard-shell";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField, FormLabel } from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Network, SaveIcon, Send, Signal, TestTubeIcon } from "lucide-react";


const formSchema = z.object({
  customerId: z.string().min(1, {
    message: "CUSTOMER_ID는 필수 입력 항목입니다.",
  }),
});

export default function SettingsPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customerId: "",
      accessLicense: "",
      secretKey: "",
    }
  });

  const { formState, handleSubmit } = form;
  const { errors } = formState;

  const onSubmit = async (): Promise<void> => {
  };

  return <DashboardShell>
    <div className="flex flex-col gap-4">
      <div className="space-y-1.5">
        <h1 className="text-2xl font-bold tracking-tight">설정</h1>
        <p className="text-muted-foreground">설정 화면입니다.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>API 연동 설정</CardTitle>
          <CardDescription>설명</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                name="customerId"
                control={form.control}
                render={(field) => (
                  <div className="flex flex-col space-y-1">
                    <FormLabel className="text-sm font-medium text-gray-700">
                      CUSTOMER_ID
                    </FormLabel>
                    <input
                      {...field}
                      className="border border-gray-300 rounded-md p-2"
                      placeholder="CUSTOMER_ID를 입력하세요."
                    />
                  </div>
                )}
                 />
              <FormField
                name="accessLicense"
                control={form.control}
                render={(field) => (
                  <div className="flex flex-col space-y-1">
                    <FormLabel className="text-sm font-medium text-gray-700">
                      액세스 라이선스
                    </FormLabel>
                    <input
                      {...field}
                      className="border border-gray-300 rounded-md p-2"
                      placeholder="액세스 라이선스를 입력하세요."
                    />
                  </div>
                )} />
              <FormField
                name="secretKey"
                control={form.control}
                render={(field) => (
                  <div className="flex flex-col space-y-1">
                    <FormLabel className="text-sm font-medium text-gray-700">
                      비밀키
                    </FormLabel>
                    <input
                      {...field}
                      className="border border-gray-300 rounded-md p-2"
                      placeholder="비밀키를 입력하세요."
                    />
                  </div>
                )} />
            </form>
          </Form>
        </CardContent>
        <CardFooter className="w-full flex justify-end">
          <Button type="button" variant="default" className="bg-blue-500 hover:bg-blue-700 mr-2">
            <Send className="mr-2" />
            연동 테스트
          </Button>
          <Button type="submit" variant="default" className="bg-gray-50 hover:bg-gray-200 border text-gray-500">
            <SaveIcon className="mr-2" />
            저장
          </Button>
        </CardFooter>
      </Card>
    </div>
  </DashboardShell>
}
