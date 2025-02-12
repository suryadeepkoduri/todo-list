import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/darkmode/mode-toggle";
import { ThemeProvider } from "@/components/darkmode/theme-provider";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Outlet } from "react-router";

export default function Page() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4 justify-between">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarTrigger className="-ml-1" />
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>
                    Open/close sidebar{" "}
                    <span className="relative bg-muted px-[0.3rem] py-[0.1rem] rounded text-sm font-semibold">
                      M
                    </span>
                  </p>
                </TooltipContent>
              </Tooltip>
              <ModeToggle />
            </TooltipProvider>
          </header>
          <Outlet />
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}
