import type { ReactNode } from "react"
import { ArrowUpRightIcon, CheckIcon, CircleHelpIcon } from "lucide-react"
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
  Bubble,
  BubbleContent,
  BubbleGroup,
  Button,
  Calendar,
  Checkbox,
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockTitle,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Input,
  Label,
  Progress,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Skeleton,
  Slider,
  Switch,
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
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  toast,
} from "@saurlax/saui"

import type { Group } from "./component-index"

type Sample = {
  name: string
  group: Group
  includes?: string[]
  demo: ReactNode
}

const buttonExample =
  'import { Button } from "@saurlax/saui"\n\n<Button>Continue</Button>'

export const samples: Sample[] = [
  {
    name: "Button",
    group: "Inputs",
    demo: (
      <div className="sample-row">
        <Button>
          Continue <ArrowUpRightIcon />
        </Button>
        <Button variant="outline">Secondary</Button>
        <Button disabled>Disabled</Button>
      </div>
    ),
  },
  {
    name: "Input",
    group: "Inputs",
    includes: ["Label"],
    demo: (
      <div className="sample-stack">
        <Label htmlFor="example-email">Email address</Label>
        <Input id="example-email" type="email" placeholder="you@example.com" />
      </div>
    ),
  },
  {
    name: "Badge",
    group: "Data display",
    demo: (
      <div className="sample-row">
        <Badge>
          <CheckIcon /> Published
        </Badge>
        <Badge variant="secondary">In review</Badge>
        <Badge variant="outline">Draft</Badge>
      </div>
    ),
  },
  {
    name: "Select",
    group: "Inputs",
    demo: (
      <div className="sample-stack">
        <Label htmlFor="example-platform">Platform</Label>
        <Select items={{ web: "Web", desktop: "Desktop" }} defaultValue="web">
          <SelectTrigger id="example-platform" style={{ width: "100%" }}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="web">Web</SelectItem>
            <SelectItem value="desktop">Desktop</SelectItem>
          </SelectContent>
        </Select>
      </div>
    ),
  },
  {
    name: "Dialog",
    group: "Overlays",
    demo: (
      <Dialog>
        <DialogTrigger render={<Button variant="outline" />}>
          Open dialog
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Project settings</DialogTitle>
            <DialogDescription>
              Update the display name for your project.
            </DialogDescription>
          </DialogHeader>
          <div className="sample-stack">
            <Label htmlFor="example-project">Project name</Label>
            <Input id="example-project" defaultValue="Aurora" />
          </div>
          <DialogFooter>
            <DialogClose render={<Button />}>Done</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    ),
  },
  {
    name: "Switch & Checkbox",
    group: "Inputs",
    includes: ["Slider"],
    demo: (
      <div className="sample-stack sample-stack--spaced">
        <div className="sample-pair">
          <Label htmlFor="example-autosave">Auto-save</Label>
          <Switch id="example-autosave" defaultChecked />
        </div>
        <div className="sample-pair">
          <Label htmlFor="example-updates">Release updates</Label>
          <Checkbox id="example-updates" />
        </div>
        <Slider aria-label="Volume" defaultValue={[40]} />
      </div>
    ),
  },
  {
    name: "Tabs",
    group: "Navigation",
    demo: (
      <Tabs className="sample-stack" defaultValue="summary">
        <TabsList>
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>
        <TabsContent value="summary">2 projects ready for review.</TabsContent>
        <TabsContent value="activity">Last update 14 minutes ago.</TabsContent>
      </Tabs>
    ),
  },
  {
    name: "Alert",
    group: "Feedback",
    demo: (
      <Alert>
        <CircleHelpIcon />
        <AlertTitle>Scheduled maintenance</AlertTitle>
        <AlertDescription>Deployments resume at 10:00 UTC.</AlertDescription>
      </Alert>
    ),
  },
  {
    name: "Dropdown Menu & Tooltip",
    group: "Overlays",
    demo: (
      <div className="sample-row">
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" />}>
            Actions
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
            <DropdownMenuItem>Move to folder</DropdownMenuItem>
            <DropdownMenuItem variant="destructive">Archive</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Tooltip>
          <TooltipTrigger
            render={<Button variant="ghost" size="icon" aria-label="Help" />}
          >
            <CircleHelpIcon />
          </TooltipTrigger>
          <TooltipContent>Project help</TooltipContent>
        </Tooltip>
      </div>
    ),
  },
  {
    name: "Accordion",
    group: "Data display",
    demo: (
      <Accordion className="sample-stack">
        <AccordionItem value="release">
          <AccordionTrigger>What changed?</AccordionTrigger>
          <AccordionContent>
            Faster previews and improved keyboard navigation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="rollback">
          <AccordionTrigger>Can I roll back?</AccordionTrigger>
          <AccordionContent>
            Open an earlier version in the release history.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
  },
  {
    name: "Calendar",
    group: "Inputs",
    demo: <Calendar mode="range" />,
  },
  {
    name: "Progress & Skeleton",
    group: "Feedback",
    demo: (
      <div className="sample-stack sample-stack--spaced">
        <Progress value={72} aria-label="Upload progress" />
        <div
          className="sample-row"
          aria-label="Loading user profile"
          aria-busy="true"
        >
          <Skeleton style={{ width: 28, height: 28, borderRadius: "50%" }} />
          <Skeleton style={{ width: "65%", height: 12 }} />
        </div>
      </div>
    ),
  },
  {
    name: "Avatar",
    group: "Data display",
    demo: (
      <div className="sample-row" aria-label="Project team">
        <Avatar size="lg">
          <AvatarFallback>AL</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>JK</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>MC</AvatarFallback>
        </Avatar>
      </div>
    ),
  },
  {
    name: "Table",
    group: "Data display",
    demo: (
      <Table aria-label="Project releases">
        <TableHeader>
          <TableRow>
            <TableHead>Version</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1.4.0</TableCell>
            <TableCell>
              <Badge>Published</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.5.0</TableCell>
            <TableCell>
              <Badge variant="outline">Draft</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
  },
  {
    name: "Bubble",
    group: "Messages",
    demo: (
      <BubbleGroup className="sample-stack">
        <Bubble variant="secondary">
          <BubbleContent>Is the preview ready?</BubbleContent>
        </Bubble>
        <Bubble align="end">
          <BubbleContent>Ready for review.</BubbleContent>
        </Bubble>
      </BubbleGroup>
    ),
  },
  {
    name: "Code Block",
    group: "Messages",
    demo: (
      <CodeBlock style={{ width: "100%" }}>
        <CodeBlockHeader>
          <CodeBlockTitle>button.tsx</CodeBlockTitle>
          <CodeBlockActions>
            <CodeBlockCopyButton value={buttonExample} />
          </CodeBlockActions>
        </CodeBlockHeader>
        <CodeBlockContent wrap>{buttonExample}</CodeBlockContent>
      </CodeBlock>
    ),
  },
  {
    name: "Toast",
    group: "Feedback",
    demo: (
      <Button
        variant="outline"
        onClick={() => toast.add({ title: "Changes saved", type: "success" })}
      >
        Show toast
      </Button>
    ),
  },
]
