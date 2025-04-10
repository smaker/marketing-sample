"use client"

import { useTheme } from "next-themes"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "1월",
    total: 1200,
  },
  {
    name: "2월",
    total: 1900,
  },
  {
    name: "3월",
    total: 3000,
  },
  {
    name: "4월",
    total: 2780,
  },
  {
    name: "5월",
    total: 1890,
  },
  {
    name: "6월",
    total: 2390,
  },
  {
    name: "7월",
    total: 3490,
  },
  {
    name: "8월",
    total: 2490,
  },
  {
    name: "9월",
    total: 2990,
  },
  {
    name: "10월",
    total: 3490,
  },
  {
    name: "11월",
    total: 3890,
  },
  {
    name: "12월",
    total: 4200,
  },
]

export function AreaChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 0,
        }}
      >
        <XAxis dataKey="name" stroke={isDark ? "#888888" : "#888888"} fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke={isDark ? "#888888" : "#888888"}
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value / 1000}k`}
        />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">월</span>
                      <span className="font-bold text-muted-foreground">{payload[0].payload.name}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">수익</span>
                      <span className="font-bold">
                        {new Intl.NumberFormat("ko-KR", {
                          style: "currency",
                          currency: "KRW",
                        }).format(payload[0].value as number)}
                      </span>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Line
          type="monotone"
          dataKey="total"
          stroke="#4f46e5"
          strokeWidth={2}
          activeDot={{
            r: 6,
            style: { fill: "#4f46e5", opacity: 0.8 },
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
