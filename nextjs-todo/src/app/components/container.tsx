"use client";
import NavBar from "./navbar";
import TaskItem from "./task-item";
import { useEffect, useState } from "react";
import data from "@/app/mocktasks.json";

function LargeContainer() {
  // Parse json data
  const message: string = "hello";

  return (
    // container
    <div className="outline w-screen-80% h-fit m-10">
      <NavBar />
      <div className="mx-6">
        <TaskItem title={message} />
      </div>
    </div>
  );
}

export default LargeContainer;
