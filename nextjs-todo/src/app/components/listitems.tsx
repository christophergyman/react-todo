"use client";
import data from "@/app/mocktasks.json";
import { useEffect, useState } from "react";
import CompletedButton from "./completedbutton";

function ListItems() {
  //convert json to array
  const listItems = data.map((data) => (
    <ul key={data.id}>
      <div className="m-8 outline h-10 text-center pt-2">{data.title}</div>
    </ul>
  ));

  const listButtons = data.map((data) => (
    <ul key={data.id}>
      <div className="mt-8">
        <CompletedButton />
      </div>
    </ul>
  ));

  // Return components
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">{listItems}</div>
      <div className="flex flex-col">{listButtons}</div>
    </div>
  );
}

export default ListItems;
