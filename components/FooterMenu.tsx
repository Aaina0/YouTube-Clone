import Home from "@/app/(main)/page";
import {
  FileVideo,
  LucideAlignCenterVertical,
  MonitorPlay,
  PlusCircle,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";

function FooterMenu() {
  return (
    <footer className="bg-white dark:bg-black md:hidden text-[8px] h-14 fixed w-full flex items-center justify-around bottom-0 left-0 z-20">
      <div className="flex flex-col items-center">
        <Home />
        <span>Home</span>
      </div>

      <div className="flex flex-col items-center">
        <FileVideo />
        <span>Shorts</span>
      </div>
      <PlusCircle />
      <div className="flex flex-col items-center">
        <MonitorPlay />
        <span>Subscriptions</span>
      </div>
      <Link href={`/channels/`} className="flex flex-col items-center">
        <Avatar className="w-6 h-6">
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <span>You</span>
      </Link>
    </footer>
  );
}

export default FooterMenu;
