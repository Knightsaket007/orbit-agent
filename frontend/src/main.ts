import "./styles/style.css";
import { App } from "./App";
import { executeTask } from "./services/task.service";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = App();
