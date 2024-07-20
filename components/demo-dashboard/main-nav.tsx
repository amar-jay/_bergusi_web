import { LoaderIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
  refetch: () => {};
  setCurrentPage: Dispatch<SetStateAction<string>>;
  lastUpdated: string;
}
export function MainNav({
  className,
  refetch,
  setCurrentPage,
  lastUpdated,
  ...props
}: MainNavProps) {
  return (
    <nav
      className={cn("w-full flex items-center justify-between", className)}
      {...props}
    >
      <div className={cn("flex items-center space-x-4 lg:space-x-6")}>
        <span
          onClick={() => setCurrentPage("main")}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Overview
        </span>
        <span
          onClick={() => setCurrentPage("settings")}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Settings
        </span>
      </div>
      <div className="mr-6 flex flex-row gap-3">
        <span>{lastUpdated}</span>
        <LoaderIcon
          className="w-6 h-6 text-primary hover:ring-card cursor-pointer rounded-lg"
          onClick={refetch}
        />
      </div>
    </nav>
  );
}
