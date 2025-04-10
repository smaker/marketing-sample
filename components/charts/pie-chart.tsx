"use client"

import { useTheme } from "next-themes"
import { Cell, Pie, PieChart as RechartsPieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "검색 엔진", value: 40 },
  { name: "소셜 미디어", value: 30 },
  { name: "직접 방문", value: 20 },
  { name: "이메일", value: 10 },
]

const COLORS = ["#4f46e5", "#0ea5e9", "#10b981", "#f59e0b"]

export function PieChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="flex h-[350px] w-full flex-col items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">소스</span>
                        <span className="font-bold text-muted-foreground">{payload[0].name}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">비율</span>
                        <span className="font-bold">{`${payload[0].value}%`}</span>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  )
}
