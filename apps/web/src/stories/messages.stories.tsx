import { CheckIcon } from "lucide-react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Avatar,
  AvatarFallback,
  Bubble,
  BubbleContent,
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle,
  Marker,
  MarkerContent,
  MarkerIcon,
  Message,
  MessageAvatar,
  MessageContent,
  MessageGroup,
  useHighlightedCode,
} from "@saurlax/saui"

const meta = { title: "Components/Messages & Code" } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Conversation: Story = {
  render: () => (
    <MessageGroup className="w-[min(32rem,88vw)] gap-4 rounded-lg border p-4">
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>AL</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>Is the desktop preview ready?</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>JK</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="secondary">
            <BubbleContent>
              Yes, both platforms are ready for review.
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Marker>
        <MarkerIcon>
          <CheckIcon />
        </MarkerIcon>
        <MarkerContent>Preview published</MarkerContent>
      </Marker>
    </MessageGroup>
  ),
}

const example = [
  'import { Button } from "@saurlax/saui"',
  "",
  "export function LaunchButton() {",
  '  return <Button variant="outline">Launch</Button>',
  "}",
].join("\n")

function CodeExample() {
  const lines = useHighlightedCode(example, "tsx")

  return (
    <CodeBlock className="w-[min(36rem,88vw)]">
      <CodeBlockHeader>
        <CodeBlockTitle>launch-button.tsx</CodeBlockTitle>
        <CodeBlockActions>
          <CodeBlockCopyButton value={example} />
        </CodeBlockActions>
      </CodeBlockHeader>
      <CodeBlockContent lineNumbers>
        {lines.map((line, index) => (
          <CodeBlockLine key={index}>{line}</CodeBlockLine>
        ))}
      </CodeBlockContent>
    </CodeBlock>
  )
}

export const SourceSnippet: Story = { render: () => <CodeExample /> }
