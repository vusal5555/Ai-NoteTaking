import React from "react";
import { auth } from "@clerk/nextjs";
import prisma from "@/lib/db/prisma";
import Note from "@/components/Note";

export const metadata = {
  title: "Notes",
};

const Notes = async () => {
  const { userId } = auth();

  if (!userId) {
    throw Error("userId undefined");
  }

  const allNotes = await prisma.note.findMany({ where: { userId } });

  return (
    <div className="container m-auto grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      {allNotes.map((note) => (
        <Note key={note.id} note={note}></Note>
      ))}

      {allNotes.length === 0 && (
        <div className="col-span-full text-center">Nothing around here</div>
      )}
    </div>
  );
};

export default Notes;
