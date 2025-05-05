import * as React from "react";
import { cn } from "@/lib/utils";

function Textareaa({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea 
      data-slot="textarea"
      className={cn(
        "w-full mt-2 resize-none rounded-md border border-input bg-transparent px-3 py-2 text-base md:text-sm shadow-sm outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/30 dark:bg-input/30 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textareaa };
