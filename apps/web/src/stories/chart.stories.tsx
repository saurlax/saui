import type { Meta, StoryObj } from "@storybook/react-vite"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@saurlax/saui"

const meta = { title: "Components/Chart" } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const config = {
  web: { label: "Web", color: "var(--chart-2)" },
  desktop: { label: "Desktop", color: "var(--chart-4)" },
} satisfies ChartConfig

const activity = [
  { month: "Jul", web: 128, desktop: 74 },
  { month: "Aug", web: 146, desktop: 90 },
  { month: "Sep", web: 134, desktop: 105 },
  { month: "Oct", web: 172, desktop: 113 },
  { month: "Nov", web: 196, desktop: 128 },
]

export const MonthlyActivity: Story = {
  render: () => (
    <Card className="w-[min(36rem,90vw)]">
      <CardHeader>
        <CardTitle>Monthly activity</CardTitle>
        <CardDescription>
          Active projects by platform, July–November.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config}>
          <BarChart accessibilityLayer data={activity}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="web" fill="var(--color-web)" radius={3} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={3} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
}
