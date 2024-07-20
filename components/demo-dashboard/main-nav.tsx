import Link from "next/link";
import { Loader2Icon } from 'lucide-react'

import { cn } from "@/lib/utils";

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {

  refetch: () => {}
  lastUpdated: string
}
export function MainNav({
  className,
  refetch,
  lastUpdated,
  ...props
}: MainNavProps) {
  return (
    <nav
      className={cn("flex items-center space-between", className)}
      {...props}
    >
      <div
      className={cn("flex items-center space-x-4 lg:space-x-6")}
      >
      <Link
        href="#"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href="#"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
      </div>
      <div>
      <span className="mr-6">
        {lastUpdated}
      </span>
      <Loader2Icon className="w-6 h-6 text-primary hover:bg-muted-foreground rounded-lg" onClick={refetch} />
</div>
    </nav>
  );
}
