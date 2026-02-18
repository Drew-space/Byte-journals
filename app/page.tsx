"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export default function Home() {
  const tasks = useQuery(api.tasks.getAllTask);
  return (
    <>
      <h1>All task in database</h1>
      {tasks?.map((task) => (
        <div key={task._id}>
          <h2>
            {task.text} = is task completed:{" "}
            {task.isCompleted ? "yes" : "no"}{" "}
          </h2>
          <p></p>
        </div>
      ))}
    </>
  );
}
