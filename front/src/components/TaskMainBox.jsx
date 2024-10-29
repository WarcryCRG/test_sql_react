import { useState } from "react";
import { TaskCrudBox } from "./TaskCrudBox"
import { TaskViewer } from "./TaskViewer";

export const TaskMainBox = () => {

  return (
    <main>
        <TaskCrudBox />
        <TaskViewer />
    </main>
  )
}
