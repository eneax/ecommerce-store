import * as React from "react";

import { cn } from "@/lib/utils";

interface IconButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

export default function IconButton({
  onClick,
  icon,
  className,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center bg-white border shadow-md rounded-full p-2 hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </button>
  );
}
