"use client";
import React, { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import AddNoteDialog from "@/components/AddEditNoteDialog";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import AiChatBoxButton from "@/components/AiChatBoxButton";

const NavBar = () => {
  const [showAddEditNoteDialog, setShowEditDialog] = useState(false);

  const { theme } = useTheme();
  return (
    <>
      <div className="p-4 shadow">
        <div className="max-w-7xl m-auto flex flex-wrap items-center justify-between gap-3">
          <Link href="/notes" className="flex items-center  gap-1">
            <Image
              src={logo}
              width={50}
              height={50}
              alt="FlowBrain Logo"
            ></Image>
            <span className="font-bold">FlowBrain</span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggleButton></ThemeToggleButton>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                baseTheme: theme === "dark" ? dark : undefined,
                elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
              }}
            ></UserButton>
            <Button onClick={() => setShowEditDialog(!showAddEditNoteDialog)}>
              <Plus className="mr-2"></Plus>
              Add Note
            </Button>
            <AiChatBoxButton></AiChatBoxButton>
          </div>
        </div>
      </div>
      <AddNoteDialog
        open={showAddEditNoteDialog}
        setOpen={setShowEditDialog}
      ></AddNoteDialog>
    </>
  );
};

export default NavBar;
