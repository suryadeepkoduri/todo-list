import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/darkmode/mode-toggle";
import { ThemeProvider } from "@/components/darkmode/theme-provider";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Outlet } from "react-router";

export default function Page() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4 justify-between">
            <SidebarTrigger className="-ml-1" />
            <ModeToggle className="" />
          </header>
          <Outlet />
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}
