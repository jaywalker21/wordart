<svelte:options customElement="wordart-widget" />

<script lang="ts">
  export let name: string = "";
  export let size: string = "3";
  export let speed: string = "2";
  export let color1: string = "#ff3e00";
  export let color2: string = "#40b3ff";
  export let shouldConvertToUpperCase: boolean = false;
  export let font: string = "Rubik Doodle Shadow";

  let letters: string[] = [];
  $: {
    letters = shouldConvertToUpperCase
      ? name.toUpperCase().split("")
      : name.split("");
  }

  $: style = `
    --wordart-size: ${size}rem;
    --wordart-speed: ${speed}s;
    --wordart-color1: ${color1};
    --wordart-color2: ${color2};
    --wordart-font: ${font};
  `;
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Nabla&family=Pixelify+Sans&family=Rubik+Doodle+Shadow&family=Rubik+Vinyl&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="wordart" {style}>
  {#each letters as letter, i}
    <span class="letter" style:animation-delay={`${i * 0.1}s`}>
      {letter}
    </span>
  {/each}
</div>

<style>
  .wordart {
    font-family: var(--wordart-font, "Rubik Doodle Shadow"), system-ui;
    font-size: var(--wordart-size, 3rem);
    font-weight: bold;
    display: flex;
    justify-content: center;
    padding: 2rem;
    perspective: 500px;
  }

  .letter {
    display: inline-block;
    animation: wave var(--wordart-speed, 2s) ease-in-out infinite;
    transform-origin: center;
    margin: 0 2px;
  }

  @keyframes wave {
    0%,
    100% {
      transform: translateY(0) rotate(0deg);
      color: var(--wordart-color1, #ff3e00);
    }
    25% {
      transform: translateY(-20px) rotate(10deg) scale(1.2);
      color: var(--wordart-color2, #40b3ff);
    }
    75% {
      transform: translateY(10px) rotate(-10deg) scale(0.8);
      color: var(--wordart-color1, #ff3e00);
    }
  }
</style>
