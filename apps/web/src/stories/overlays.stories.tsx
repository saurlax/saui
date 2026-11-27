import { EllipsisIcon, InfoIcon } from "lucide-react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Field,
  FieldLabel,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Toaster,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  toast,
} from "@saurlax/saui"

const meta = { title: "Components/Overlays & Feedback" } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const EditDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button />}>Edit project</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit project</DialogTitle>
          <DialogDescription>
            Update the name shown to your team.
          </DialogDescription>
        </DialogHeader>
        <Field>
          <FieldLabel htmlFor="edit-project-name">Name</FieldLabel>
          <Input id="edit-project-name" defaultValue="Aurora" />
        </Field>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Cancel
          </DialogClose>
          <DialogClose render={<Button />}>Save changes</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const Confirmation: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        Archive project
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Archive Aurora?</AlertDialogTitle>
          <AlertDialogDescription>
            The project will move to the archive. You can restore it from
            workspace settings.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">
            Archive project
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const SidePanel: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        Open activity
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Project activity</SheetTitle>
          <SheetDescription>
            Recent updates from the Aurora team.
          </SheetDescription>
        </SheetHeader>
        <ul className="space-y-3 px-4 text-sm">
          <li>Alex updated the project profile.</li>
          <li>Jordan shipped version 1.4.</li>
          <li>Morgan joined the workspace.</li>
        </ul>
      </SheetContent>
    </Sheet>
  ),
}

export const MenuAndHelp: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="outline" size="icon" aria-label="More actions" />
            }
          >
            <EllipsisIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
            <DropdownMenuItem>Move to folder</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">Archive</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="ghost" size="icon" aria-label="Project help" />
            }
          >
            <InfoIcon />
          </TooltipTrigger>
          <TooltipContent>Project help</TooltipContent>
        </Tooltip>
        <Popover>
          <PopoverTrigger render={<Button variant="outline" />}>
            Sharing details
          </PopoverTrigger>
          <PopoverContent className="text-sm">
            Anyone in the workspace can view this project.
          </PopoverContent>
        </Popover>
      </div>
    </TooltipProvider>
  ),
}

export const Notification: Story = {
  render: () => (
    <Toaster>
      <Button
        onClick={() =>
          toast.add({
            title: "Changes saved",
            description: "Your project is up to date.",
            type: "success",
          })
        }
      >
        Show notification
      </Button>
    </Toaster>
  ),
}
