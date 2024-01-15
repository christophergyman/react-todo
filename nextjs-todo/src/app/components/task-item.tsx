"use client";
import { useState } from "react";

function TaskItem({ title }: { title?: string }) {
  title = title || "default text";
  return (
    <div className="font-bold">
      <p>{title}</p>
    </div>
  );
}

export default TaskItem;
