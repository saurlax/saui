import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@saurlax/saui"

export function App() {
  return (
    <main style={{ maxWidth: "28rem", margin: "4rem auto", padding: "0 1rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>
        saui
      </h1>
      <div style={{ display: "grid", gap: "1rem", justifyItems: "start" }}>
        <Input aria-label="Project name" placeholder="Project name" />
        <Select defaultValue="web">
          <SelectTrigger aria-label="Platform">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="web">Web</SelectItem>
            <SelectItem value="desktop">Desktop</SelectItem>
          </SelectContent>
        </Select>
        <Dialog>
          <DialogTrigger render={<Button />}>Open dialog</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Project settings</DialogTitle>
              <DialogDescription>Manage your project preferences.</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  )
}
