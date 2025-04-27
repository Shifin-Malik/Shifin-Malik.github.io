"use client"

import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxDemo() {
  return (
    <div className="flex items-center md:items-start w-full space-x-2 mt-4 md:mt-8 md:px-64">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  )
}
