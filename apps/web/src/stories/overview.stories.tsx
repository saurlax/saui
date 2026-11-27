import { CheckIcon, ChevronRightIcon, PlusIcon } from "lucide-react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Avatar,
  AvatarFallback,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Input,
  Progress,
  Separator,
  Switch,
  Toaster,
  toast,
} from "@saurlax/saui"

const meta = {
  title: "Overview/SAUI",
  parameters: { layout: "fullscreen" },
  tags: ["!autodocs"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Workspace: Story = {
  render: () => (
    <Toaster>
      <main className="mx-auto grid max-w-5xl gap-6 px-6 py-10 sm:px-10">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div className="grid gap-1">
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              Workspace <ChevronRightIcon className="size-3" /> Aurora
            </p>
            <h1 className="text-3xl font-semibold tracking-tight">
              Workspace settings
            </h1>
          </div>
          <Dialog>
            <DialogTrigger render={<Button />}>
              <PlusIcon /> Invite member
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Invite a teammate</DialogTitle>
                <DialogDescription>
                  Enter the email address to preview a workspace invitation.
                </DialogDescription>
              </DialogHeader>
              <form
                className="grid gap-4"
                onSubmit={(event) => {
                  event.preventDefault()
                  toast.add({
                    title: "Invitation preview ready",
                    type: "success",
                  })
                }}
              >
                <Field>
                  <FieldLabel htmlFor="invite-email">Email address</FieldLabel>
                  <Input
                    id="invite-email"
                    type="email"
                    placeholder="name@example.com"
                    required
                  />
                </Field>
                <DialogFooter>
                  <DialogClose render={<Button variant="outline" />}>
                    Close
                  </DialogClose>
                  <Button type="submit">Preview invitation</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </header>
        <Separator />
        <div className="grid items-start gap-5 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Project profile</CardTitle>
              <CardDescription>
                Manage the name and visibility of your project.
              </CardDescription>
            </CardHeader>
            <form
              className="contents"
              onSubmit={(event) => {
                event.preventDefault()
                toast.add({ title: "Settings saved", type: "success" })
              }}
            >
              <CardContent>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="project-name">Project name</FieldLabel>
                    <Input id="project-name" defaultValue="Aurora" />
                  </Field>
                  <Field orientation="horizontal">
                    <div className="grid flex-1 gap-1">
                      <FieldLabel htmlFor="public-preview">
                        Public preview
                      </FieldLabel>
                      <FieldDescription>
                        Let guests open shared previews.
                      </FieldDescription>
                    </div>
                    <Switch id="public-preview" />
                  </Field>
                  <Field orientation="horizontal">
                    <Checkbox id="email-updates" defaultChecked />
                    <FieldLabel htmlFor="email-updates">
                      Send weekly updates
                    </FieldLabel>
                  </Field>
                </FieldGroup>
              </CardContent>
              <CardFooter className="justify-end gap-2">
                <Button variant="outline" type="reset">
                  Reset
                </Button>
                <Button type="submit">
                  <CheckIcon /> Save settings
                </Button>
              </CardFooter>
            </form>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Team and usage</CardTitle>
              <CardDescription>
                A snapshot of the current workspace.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-5">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>AL</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 gap-0.5 text-sm">
                  <span className="font-medium">Alex Lee</span>
                  <span className="text-muted-foreground">
                    alex@example.com
                  </span>
                </div>
                <Badge variant="secondary">Owner</Badge>
              </div>
              <Separator />
              <div className="grid gap-2">
                <div className="flex justify-between text-sm">
                  <span>Storage used</span>
                  <span className="text-muted-foreground">7.2 / 10 GB</span>
                </div>
                <Progress aria-label="Storage used" value={72} />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </Toaster>
  ),
}
