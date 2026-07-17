import { Navbar } from "../components/navbar/Navbar";
import { PromptBox } from "../components/home/PromptBox";
import { ExecutionPanel } from "../components/home/ExecutionPanel";

export function Home() {
  return /*html*/`
${Navbar()}

<main class="mx-auto max-w-4xl px-6 py-10">

    <div class="mb-10">

        <h1 class="text-3xl font-semibold tracking-tight">
            Your Browser. Your AI Operator.
        </h1>

        <p class="mt-2 text-sm text-zinc-400">
            Describe a task and let Orbit execute it using a real browser.
        </p>

    </div>

    <div class="space-y-6">

        ${PromptBox()}

        ${ExecutionPanel()}

    </div>

</main>
`;
}