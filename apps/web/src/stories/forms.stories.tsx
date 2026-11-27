import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Calendar,
  Checkbox,
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  Input,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  Label,
  NativeSelect,
  NativeSelectOption,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Slider,
  Switch,
  Textarea,
} from "@saurlax/saui"

const meta = { title: "Components/Forms" } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const TextFields: Story = {
  render: () => (
    <FieldGroup className="w-80 max-w-full">
      <Field>
        <FieldLabel htmlFor="default-name">Display name</FieldLabel>
        <Input id="default-name" placeholder="Alex" />
      </Field>
      <Field data-invalid>
        <FieldLabel htmlFor="invalid-email">Email</FieldLabel>
        <Input
          id="invalid-email"
          type="email"
          defaultValue="alex@"
          aria-invalid
        />
        <FieldError>Enter a valid email address.</FieldError>
      </Field>
      <Field data-disabled>
        <FieldLabel htmlFor="locked-id">Account ID</FieldLabel>
        <Input id="locked-id" defaultValue="acct_1024" disabled />
      </Field>
      <Field>
        <FieldLabel htmlFor="profile-bio">Bio</FieldLabel>
        <Textarea id="profile-bio" placeholder="Tell us about yourself" />
        <FieldDescription>Shown on your public profile.</FieldDescription>
      </Field>
    </FieldGroup>
  ),
}

export const Selects: Story = {
  render: () => (
    <FieldGroup className="w-64 max-w-full">
      <Field>
        <FieldLabel htmlFor="platform">Platform</FieldLabel>
        <Select items={{ web: "Web", desktop: "Desktop" }} defaultValue="web">
          <SelectTrigger id="platform">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="web">Web</SelectItem>
            <SelectItem value="desktop">Desktop</SelectItem>
          </SelectContent>
        </Select>
      </Field>
      <Field>
        <FieldLabel htmlFor="region">Region</FieldLabel>
        <NativeSelect id="region" defaultValue="apac">
          <NativeSelectOption value="apac">Asia Pacific</NativeSelectOption>
          <NativeSelectOption value="eu">Europe</NativeSelectOption>
          <NativeSelectOption value="us">North America</NativeSelectOption>
        </NativeSelect>
      </Field>
    </FieldGroup>
  ),
}

export const Preferences: Story = {
  render: () => (
    <FieldGroup className="w-64 max-w-full">
      <Field orientation="horizontal">
        <Checkbox id="release-notes" defaultChecked />
        <Label htmlFor="release-notes">Release notes</Label>
      </Field>
      <Field orientation="horizontal">
        <Switch id="auto-save" />
        <Label htmlFor="auto-save">Auto-save</Label>
      </Field>
      <RadioGroup aria-label="Density" defaultValue="comfortable">
        <Field orientation="horizontal">
          <RadioGroupItem id="comfortable" value="comfortable" />
          <Label htmlFor="comfortable">Comfortable</Label>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem id="compact" value="compact" />
          <Label htmlFor="compact">Compact</Label>
        </Field>
      </RadioGroup>
      <Slider aria-label="Volume" defaultValue={[35]} />
    </FieldGroup>
  ),
}

export const VerificationCode: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="verification">Verification code</FieldLabel>
      <InputOTP id="verification" maxLength={6}>
        <InputOTPGroup>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <InputOTPSlot key={index} index={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>
    </Field>
  ),
}

export const DateRange: Story = {
  render: () => <Calendar mode="range" className="rounded-lg border" />,
}
