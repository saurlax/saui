import { InfoIcon, PackageOpenIcon } from "lucide-react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@saurlax/saui"

const meta = { title: "Components/Data Display" } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const releases = [
  {
    version: "1.4.0",
    author: "Alex Lee",
    initials: "AL",
    date: "Nov 27",
    state: "Published",
  },
  {
    version: "1.3.2",
    author: "Jordan Kim",
    initials: "JK",
    date: "Nov 18",
    state: "Published",
  },
  {
    version: "1.5.0",
    author: "Morgan Chen",
    initials: "MC",
    date: "Dec 4",
    state: "Draft",
  },
] as const

export const ReleaseTable: Story = {
  render: () => (
    <Card className="w-[min(42rem,90vw)]">
      <CardHeader>
        <CardTitle>Releases</CardTitle>
        <CardDescription>
          Track recent versions and upcoming drafts.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table aria-label="Project releases">
          <TableHeader>
            <TableRow>
              <TableHead>Version</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {releases.map(({ version, author, initials, date, state }) => (
              <TableRow key={version}>
                <TableCell className="font-medium">{version}</TableCell>
                <TableCell>
                  <span className="flex items-center gap-2">
                    <Avatar size="sm">
                      <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                    {author}
                  </span>
                </TableCell>
                <TableCell>{date}</TableCell>
                <TableCell>
                  <Badge variant={state === "Draft" ? "outline" : "secondary"}>
                    {state}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  ),
}

export const EmptyAndLoading: Story = {
  render: () => (
    <Tabs defaultValue="empty" className="w-[min(30rem,90vw)]">
      <TabsList>
        <TabsTrigger value="empty">Empty</TabsTrigger>
        <TabsTrigger value="loading">Loading</TabsTrigger>
      </TabsList>
      <TabsContent value="empty">
        <Empty className="border">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <PackageOpenIcon />
            </EmptyMedia>
            <EmptyTitle>No releases yet</EmptyTitle>
            <EmptyDescription>
              Publish a release to share your changes.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button>Create release</Button>
          </EmptyContent>
        </Empty>
      </TabsContent>
      <TabsContent value="loading">
        <Card aria-busy="true" aria-label="Loading releases">
          <CardContent className="grid gap-3">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-9 w-full" />
            <Skeleton className="h-9 w-full" />
            <Skeleton className="h-9 w-full" />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}

export const ReleaseDetails: Story = {
  render: () => (
    <div className="grid w-[min(30rem,90vw)] gap-4">
      <Alert>
        <InfoIcon />
        <AlertTitle>Scheduled maintenance</AlertTitle>
        <AlertDescription>Deployments resume at 10:00 UTC.</AlertDescription>
      </Alert>
      <Accordion>
        <AccordionItem value="changes">
          <AccordionTrigger>What changed in 1.4?</AccordionTrigger>
          <AccordionContent>
            Faster previews and improved keyboard navigation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="rollback">
          <AccordionTrigger>Can I roll back?</AccordionTrigger>
          <AccordionContent>
            Previous versions remain available in release history.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}
