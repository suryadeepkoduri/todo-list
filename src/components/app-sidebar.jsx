import * as React from "react";
import { Calendar, CalendarDays, Inbox, Plus } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { NavLink } from "react-router";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function AppSidebar({ ...props }) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Avatar>
          <AvatarImage
            src="https://github.com/suryadeepkoduri.png"
            alt="@suryadeepkoduri"
          />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
      </SidebarHeader>
      <SidebarContent className="gap-0">
        <SidebarGroup>
          <Dialog>
            <DialogTrigger>
              <Button className="w-full">
                <Plus />
                Add Task
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <form>
                  <div className="flex flex-col gap-3">
                    <Input placeholder="Task"/>
                    <Textarea placeholder="Description" />
                  </div>
                </form>
              </DialogHeader>
              <DialogFooter>
                <Button>Add Task</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <div className="mt-3">
            <NavLink to="/inbox">
              {({ isActive }) => (
                <SidebarMenuButton tooltip="Inbox" isActive={isActive}>
                  <div className="flex gap-2 items-center">
                    <Inbox size={18} />
                    <span>Inbox</span>
                  </div>
                </SidebarMenuButton>
              )}
            </NavLink>

            <NavLink to="/today">
              {({ isActive }) => (
                <SidebarMenuButton
                  asChild
                  tooltip="Today's Tasks"
                  isActive={isActive}
                >
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>Today</span>
                  </div>
                </SidebarMenuButton>
              )}
            </NavLink>

            <NavLink to="/upcoming">
              {({ isActive }) => (
                <SidebarMenuButton
                  asChild
                  tooltip="Upcoming Tasks"
                  isActive={isActive}
                >
                  <div className="flex items-center gap-2">
                    <CalendarDays size={18} />
                    <span>Upcoming</span>
                  </div>
                </SidebarMenuButton>
              )}
            </NavLink>
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
