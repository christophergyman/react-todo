"use client";
import data from "@/app/mocktasks.json";

function ListItems() {
  // Convert Json data to lists
  const listID = data.map((data) => <ul key={data.id}>{data.id}</ul>);
  const listTitles = data.map((data) => <ul key={data.id}>{data.title}</ul>);
  const listCompleted = data.map((data) => (
    <ul key={data.id}>{data.completed.toString()}</ul>
  ));

  // Return components
  return (
    <div className="flex">
      <div className="outline m-5">
        <p>#</p>
        {listID}
      </div>
      <div className="outline m-5">
        <p>Task:</p>
        {listTitles}
      </div>
      <div className="outline m-5">
        <p>Completed?:</p>
        {listCompleted}
      </div>
    </div>
  );
}

export default ListItems;
