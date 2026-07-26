import { executeTask } from "../../services/task.service";

export function PromptBox() {

    queueMicrotask(() => {
        const button = document.querySelector("#execute-btn") as HTMLButtonElement;
        console.log("button", button)
        button?.addEventListener("click", async () => {

            const textarea = document.querySelector("#prompt") as HTMLTextAreaElement;

            const prompt = textarea.value.trim();

            if (!prompt) return;

            console.log(prompt);

            const result = await executeTask({
                prompt,
            });

            console.log(result);

        });
    })

 return ( /*html*/`
 <section class="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">

    <label class="mb-3 block text-sm font-medium text-zinc-200">
        Describe your task
    </label>

    <textarea id="prompt"
        class="h-40 w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm outline-none transition focus:border-zinc-600"
        placeholder="Search for the best Go JWT library..."
    ></textarea>

    <div class="mt-5 flex justify-end">

        <button id="execute-btn"
            class="rounded-md cursor-pointer bg-white px-5 py-1.5 text-xs  font-medium text-black transition hover:bg-zinc-200"
        >
            Execute
        </button>

    </div>

</section>
    
`);
}