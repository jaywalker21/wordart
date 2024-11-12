export { default as WordArtWidget } from "./WordArt.svelte";

declare global {
  namespace svelte.JSX {
    interface IntrinsicElements {
      "wordart-widget": {
        name?: string;
      };
    }
  }
}
