import { ArrowRightIcon, PlusIcon } from "lucide-react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button, ButtonGroup, Spinner } from "@saurlax/saui"

const meta = {
  title: "Components/Button",
  component: Button,
  args: { children: "Continue" },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "outline",
        "ghost",
        "destructive",
        "link",
      ],
    },
    size: { control: "select", options: ["xs", "sm", "default", "lg"] },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button disabled>Disabled</Button>
      <Button disabled>
        <Spinner /> Saving
      </Button>
      <Button>
        Continue <ArrowRightIcon />
      </Button>
      <Button size="icon" aria-label="Add item">
        <PlusIcon />
      </Button>
      <ButtonGroup>
        <Button variant="outline">Previous</Button>
        <Button variant="outline">Next</Button>
      </ButtonGroup>
    </div>
  ),
}
