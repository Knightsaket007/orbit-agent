export function Navbar() {
  return `
<header class="sticky top-0 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
    <div class="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">

        <h1 class="text-sm font-semibold tracking-tight">
            Orbit
        </h1>

        <div class="flex items-center gap-2 text-xs text-zinc-400">

            <span class="h-2 w-2 rounded-full bg-emerald-500"></span>

            Ready

        </div>

    </div>
</header>
`;
}