import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface AvatarWrapperProps
  extends React.ComponentPropsWithoutRef<typeof Avatar> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}

const sizeMap = {
  xs: "h-6 w-6",
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-14 w-14",
  xl: "h-20 w-20",
  "2xl": "h-28 w-28",
};

export function AvatarWrapper({
  className,
  size = "md",
  children,
  ...props
}: AvatarWrapperProps) {
  return (
    <Avatar className={cn(sizeMap[size], className)} {...props}>
      {children}
    </Avatar>
  );
}

// Export with same API
export { Avatar, AvatarImage, AvatarFallback };
