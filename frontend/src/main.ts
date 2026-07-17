import "./styles/style.css";
import { App } from "./App";
import { executeTask } from "./services/task.service";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = App();



const button = document.querySelector("#execute-btn") as HTMLButtonElement;
button.addEventListener("click", async () => {

    const textarea = document.querySelector("#prompt") as HTMLTextAreaElement;

    const prompt = textarea.value.trim();

    if (!prompt) return;

    console.log(prompt);

    const result = await executeTask({
        prompt,
    });

    console.log(result);

});