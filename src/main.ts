import App from "./demo/App.svelte";

const app = new App({
  target: document.getElementById("app") as HTMLElement,
});

export default app;
