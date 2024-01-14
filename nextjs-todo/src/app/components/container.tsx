import NavBar from "./navbar";
import TaskItem from "./task-item";

function LargeContainer() {
  return (
    // container
    <div className="outline w-screen-80% h-fit m-10">
      <NavBar />
      <div className="mx-6">
        <TaskItem />
      </div>
    </div>
  );
}

export default LargeContainer;
