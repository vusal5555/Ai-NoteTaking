import React from "react";
import NavBar from "./NavBar";

const NoteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar></NavBar>
      <main className="p-4 container m-auto">{children}</main>
    </div>
  );
};

export default NoteLayout;
