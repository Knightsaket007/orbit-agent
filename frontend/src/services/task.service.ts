import type { TaskRequest } from "../types/task";

export async function executeTask(prompt: TaskRequest) {
  const response = await fetch("http://localhost:4100/api/task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify( prompt ),
  });

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return response.json();
}