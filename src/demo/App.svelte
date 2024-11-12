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
    <footer>
      <a
        href="https://github.com/jaywalker21/wordart"
        target="_blank"
        rel="noopener"
      >
        GitHub Repository
      </a>
      <a
        href="https://www.npmjs.com/package/@codeweaver/wordart"
        target="_blank"
        rel="noopener"
      >
        NPM Package
      </a>
    </footer>
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

  <!-- Add Inter font -->
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<style>
  :global(body) {
    font-family:
      "Inter",
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      sans-serif;
    color: #2c3e50;
    line-height: 1.6;
  }

  :global(select) {
    font-family: "Inter", sans-serif;
    font-size: 0.95rem;
    padding: 0.625rem;
    border-radius: 6px;
    border: 1px solid #e2e8f0;
    min-width: 200px;
    background: white;
    cursor: pointer;
    transition: border-color 0.2s ease;
  }

  :global(select:hover) {
    border-color: #cbd5e1;
  }

  :global(select:focus) {
    outline: none;
    border-color: #ff3e00;
    box-shadow: 0 0 0 3px rgba(255, 62, 0, 0.1);
  }

  :global(option) {
    padding: 8px;
    font-family: "Inter", sans-serif;
  }

  main {
    padding: 3rem 2rem;
    max-width: 800px;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    color: #1a202c;
    font-family: "Rubik Doodle Shadow", system-ui;
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
  }

  .demo-container {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .controls {
    background: #f8fafc;
    padding: 2rem;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    border: 1px solid #e2e8f0;
  }

  .control-group {
    display: flex;
    gap: 1.25rem;
    align-items: center;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 500;
    color: #4a5568;
    font-size: 0.95rem;
  }

  .checkbox-label {
    cursor: pointer;
    user-select: none;
    padding: 0.25rem 0;
  }

  input[type="text"] {
    width: 100%;
    padding: 0.625rem;
    font-size: 0.95rem;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    font-family: "Inter", sans-serif;
    transition: all 0.2s ease;
  }

  input[type="text"]:focus {
    outline: none;
    border-color: #ff3e00;
    box-shadow: 0 0 0 3px rgba(255, 62, 0, 0.1);
  }

  input[type="checkbox"] {
    width: 1rem;
    height: 1rem;
    border-radius: 4px;
    accent-color: #ff3e00;
  }

  input[type="range"] {
    width: 200px;
    accent-color: #ff3e00;
  }

  input[type="color"] {
    width: 3rem;
    height: 2rem;
    padding: 0;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    cursor: pointer;
  }

  .demo-widget {
    padding: 3rem 2rem;
    border: 2px dashed #e2e8f0;
    border-radius: 12px;
    background: white;
  }

  .code-example {
    background: #f8fafc;
    padding: 1.75rem;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
  }

  .code-example h3 {
    margin: 0 0 1rem 0;
    font-size: 1.1rem;
    color: #2d3748;
    font-weight: 600;
  }

  pre {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 0;
    border: 1px solid #e2e8f0;
  }

  code {
    font-family: "SF Mono", Menlo, Monaco, Consolas, monospace;
    font-size: 0.9rem;
    white-space: pre-wrap;
    color: #2d3748;
  }

  footer {
    margin-top: 3rem;
    padding-top: 1.5rem;
    border-top: 1px solid #e2e8f0;
    display: flex;
    gap: 2rem;
    justify-content: center;
  }

  footer a {
    color: #4a5568;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.2s ease;
  }

  footer a:hover {
    color: #ff3e00;
    background: rgba(255, 62, 0, 0.1);
    text-decoration: none;
  }

  footer :global(svg) {
    transition: transform 0.2s ease;
  }

  footer a:hover :global(svg) {
    transform: scale(1.1);
  }
</style>
