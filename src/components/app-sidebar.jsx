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
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { NavLink } from "react-router";

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
              <div className="flex align-middle justify-center m-auto">
                <div className="flex flex-col items-center">
                  <svg
                    fill="#000000"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32.811 32.811"
                    xmlSpace="preserve"
                    height="200"
                    className="dark:fill-white"
                  >
                    <g>
                      <path
                        d="M0,1.356v16.743h5.249v7.154v3.617v2.586h3.61v-2.586h15.423v2.586h3.606V18.098h4.923V1.356H0z M31.136,2.281
		l-7.764,14.658h-4.783l7.762-14.658C26.351,2.281,31.136,2.281,31.136,2.281z M23.016,2.245l-7.766,14.66h-4.785l7.767-14.66
		C18.232,2.245,23.016,2.245,23.016,2.245z M1.31,2.429l5.617-0.017L1.281,12.99L1.31,2.429z M7.468,17.06H2.684l7.763-14.658h4.785
		L7.468,17.06z M24.282,25.252H8.859v-7.154h15.423C24.282,18.098,24.282,25.252,24.282,25.252z M32.149,16.811l-5.616-0.006
		l5.646-10.576L32.149,16.811z"
                      />
                      <path
                        d="M0,1.356v16.743h5.249v7.154v3.617v2.586h3.61v-2.586h15.423v2.586h3.606V18.098h4.923V1.356H0z M31.136,2.281
		l-7.764,14.658h-4.783l7.762-14.658C26.351,2.281,31.136,2.281,31.136,2.281z M23.016,2.245l-7.766,14.66h-4.785l7.767-14.66
		C18.232,2.245,23.016,2.245,23.016,2.245z M1.31,2.429l5.617-0.017L1.281,12.99L1.31,2.429z M7.468,17.06H2.684l7.763-14.658h4.785
		L7.468,17.06z M24.282,25.252H8.859v-7.154h15.423C24.282,18.098,24.282,25.252,24.282,25.252z M32.149,16.811l-5.616-0.006
		l5.646-10.576L32.149,16.811z"
                      />
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </g>
                  </svg>
                  <p className="text-3xl font-semibold">Coming Soon!! </p>
                </div>
              </div>
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
