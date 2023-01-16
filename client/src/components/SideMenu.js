import React, { useState } from "react";
import AddFolder from "../components/AddFolder";
import Folders from "../components/Folders";

function SideMenu() {
  return (
    <div class="bg-red-500 h-full w-56">
      <h1>Hello</h1>
      <div class="flex flex-col">
        <h1>Folders</h1>
        <AddFolder />
        <Folders />
      </div>
    </div>
  );
}

export default SideMenu;
