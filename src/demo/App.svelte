<script lang="ts">
  let text = "Hello World";
  let size = "3";
  let speed = "2";
  let color1 = "#ff3e00";
  let color2 = "#40b3ff";
  let isUpperCase = false;
  let selectedFont = "Rubik Doodle Shadow";

  const fonts = [
    "Rubik Doodle Shadow",
    "Bungee Shade",
    "Nabla",
    "Pixelify Sans",
    "Rubik Vinyl",
  ];
</script>

<main>
  <h1>WordArt Demo</h1>

  <div class="demo-container">
    <div class="controls">
      <div class="control-group">
        <label>
          Text:
          <input
            type="text"
            bind:value={text}
            placeholder="Type something..."
          />
        </label>
      </div>

      <div class="control-group">
        <label>
          Font:
          <select bind:value={selectedFont}>
            {#each fonts as font}
              <option value={font} style="font-family: {font}">{font}</option>
            {/each}
          </select>
        </label>
      </div>

      <div class="control-group">
        <label class="checkbox-label">
          <input type="checkbox" bind:checked={isUpperCase} />
          Convert to uppercase
        </label>
      </div>

      <div class="control-group">
        <label>
          Size:
          <input type="range" bind:value={size} min="1" max="6" step="0.5" />
          {size}rem
        </label>
      </div>

      <div class="control-group">
        <label>
          Animation Speed:
          <input type="range" bind:value={speed} min="0.5" max="5" step="0.5" />
          {speed}s
        </label>
      </div>

      <div class="control-group">
        <label>
          Color 1:
          <input type="color" bind:value={color1} />
        </label>

        <label>
          Color 2:
          <input type="color" bind:value={color2} />
        </label>
      </div>
    </div>

    <div class="demo-widget">
      <wordart-widget
        name={text}
        {size}
        {speed}
        {color1}
        {color2}
        shouldConvertToUpperCase={isUpperCase}
        font={selectedFont}
      />
    </div>

    <div class="code-example">
      <h3>Usage Example:</h3>
      <pre><code
          >{`<wordart-widget
  name="${text}"
  size="${size}"
  speed="${speed}"
  color1="${color1}"
  color2="${color2}"
  shouldConvertToUpperCase="${isUpperCase}"
  font="${selectedFont}"
></wordart-widget>`}</code
        ></pre>
    </div>
  </div>
</main>

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

<style>
  :global(select) {
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    min-width: 200px;
  }

  :global(option) {
    padding: 8px;
  }

  main {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    color: #333;
    font-family: "Rubik Doodle Shadow", system-ui;
  }

  .demo-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .controls {
    background: #f5f5f5;
    padding: 1.5rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .control-group {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .checkbox-label {
    cursor: pointer;
    user-select: none;
  }

  input[type="text"] {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  input[type="checkbox"] {
    width: 1rem;
    height: 1rem;
  }

  input[type="range"] {
    width: 200px;
  }

  .demo-widget {
    padding: 2rem;
    border: 2px dashed #ccc;
    border-radius: 8px;
  }

  .code-example {
    background: #f5f5f5;
    padding: 1.5rem;
    border-radius: 8px;
  }

  pre {
    background: #fff;
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
    margin: 0;
  }

  code {
    font-family: monospace;
    white-space: pre-wrap;
  }
</style>
