import type { TaskRequest } from "../types/task";

export async function executeTask(task: TaskRequest) {
  console.log(task);

  return {
    status: "received",
  };
}