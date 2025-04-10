"use client"

import { useTheme } from "next-themes"
import { Bar, BarChart as RechartsBarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "월",
    total: 1200,
  },
  {
    name: "화",
    total: 2900,
  },
  {
    name: "수",
    total: 3200,
  },
  {
    name: "목",
    total: 2780,
  },
  {
    name: "금",
    total: 1890,
  },
  {
    name: "토",
    total: 2390,
  },
  {
    name: "일",
    total: 1490,
  },
]

export function BarChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart data={data}>
        <XAxis dataKey="name" stroke={isDark ? "#888888" : "#888888"} fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke={isDark ? "#888888" : "#888888"}
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="#4f46e5" radius={[4, 4, 0, 0]} />
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}
