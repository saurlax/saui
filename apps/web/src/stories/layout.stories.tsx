import { FolderIcon, HouseIcon, SettingsIcon } from "lucide-react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@saurlax/saui"

const meta = { title: "Components/Layout & Navigation" } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const WorkspaceSidebar: Story = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <SidebarProvider className="min-h-screen">
      <Sidebar collapsible="icon">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Aurora workspace</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <HouseIcon /> Overview
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <FolderIcon /> Projects
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <SettingsIcon /> Settings
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center gap-3 border-b px-4 py-2">
          <SidebarTrigger />
          <span className="text-sm font-medium">Workspace overview</span>
        </header>
        <div className="p-6">
          <h2 className="text-xl font-semibold">Your projects</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Select a section from the sidebar.
          </p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  ),
}

export const SplitPanels: Story = {
  render: () => (
    <ResizablePanelGroup
      orientation="horizontal"
      className="min-h-48 w-[min(32rem,88vw)] rounded-lg border"
    >
      <ResizablePanel defaultSize="35%" minSize="24%">
        <div className="grid size-full place-items-center text-sm">Files</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="65%" minSize="35%">
        <div className="grid size-full place-items-center text-sm">Preview</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const ProjectCarousel: Story = {
  render: () => (
    <Carousel aria-label="Projects" className="w-[min(24rem,68vw)]">
      <CarouselContent>
        {["Aurora", "Beacon", "Cove"].map((project) => (
          <CarouselItem key={project}>
            <Card>
              <CardContent className="grid aspect-video place-items-center text-lg font-medium">
                {project}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}
