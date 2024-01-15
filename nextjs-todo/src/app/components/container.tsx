"use client";
import NavBar from "./navbar";
import ListItems from "./listitems";
import CompletedButton from "./completedbutton";
import { useEffect, useState } from "react";

function LargeContainer() {
  // Convert json list to <ul>

  return (
    // container
    <div className="outline w-screen-80% h-fit m-10">
      <NavBar />
      <ListItems />
    </div>
  );
}

export default LargeContainer;
