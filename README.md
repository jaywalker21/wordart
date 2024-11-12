# @codeweaver/wordart

A customizable, animated word art web component built with Svelte. Perfect for adding eye-catching text animations to your web applications.

![WordArt Demo](./wordart_demo_.gif)

## Features

- 🎨 Multiple stylish fonts from Google Fonts
- 🌈 Customizable colors with smooth transitions
- ⚡ Smooth wave animations
- 📏 Adjustable size and animation speed
- 🔠 Optional automatic uppercase conversion
- 🎯 Zero dependencies (except Svelte)
- 📦 Lightweight and performant
- 🌐 Works in any web application

## Installation & Usage

### NPM Package

```bash
npm install @codeweaver/wordart
```

```javascript
// Import in your JavaScript/TypeScript file
import "@codeweaver/wordart";

// Use in your HTML
<wordart-widget name="Hello World"></wordart-widget>;
```

### Direct Script Usage

#### Method 1: UMD Build (Recommended for basic usage)

```html
<!-- Load Svelte first -->
<script src="https://unpkg.com/svelte@4"></script>
<!-- Load our component -->
<script src="https://unpkg.com/@codeweaver/wordart@1.0.0/wordart.umd.js"></script>

<!-- Use the component -->
<wordart-widget
  name="Hello World"
  size="3"
  speed="2"
  color1="#ff3e00"
  color2="#40b3ff"
></wordart-widget>
```

#### Method 2: ES Module

```html
<script type="module">
  import "@codeweaver/wordart/wordart.es.js";
</script>

<wordart-widget name="Hello World"></wordart-widget>
```

#### Method 3: Using specific version from CDN

```html
<!-- Latest version -->
<script src="https://unpkg.com/@codeweaver/wordart"></script>

<!-- Specific version -->
<script src="https://unpkg.com/@codeweaver/wordart@1.0.0/wordart.umd.js"></script>
```

### Framework Integration

#### Svelte

```svelte
<script>
  import '@codeweaver/wordart';
</script>

<wordart-widget name="Hello Svelte!"></wordart-widget>
```

#### React

```jsx
import "@codeweaver/wordart";

function App() {
  return (
    <wordart-widget name="Hello React!" size="3" speed="2"></wordart-widget>
  );
}
```

#### Vue

```vue
<template>
  <wordart-widget name="Hello Vue!" size="3" speed="2"></wordart-widget>
</template>

<script>
import "@codeweaver/wordart";

export default {
  name: "App",
};
</script>
```

### Complete Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WordArt Demo</title>
    <!-- Required Dependencies -->
    <script src="https://unpkg.com/svelte@4"></script>
    <script src="https://unpkg.com/@codeweaver/wordart@1.0.0/wordart.umd.js"></script>
  </head>
  <body>
    <h1>WordArt Demo</h1>

    <!-- Basic Usage -->
    <wordart-widget
      name="Hello World"
      size="3"
      speed="2"
      color1="#ff3e00"
      color2="#40b3ff"
      shouldConvertToUpperCase="false"
    ></wordart-widget>

    <!-- Interactive Example -->
    <script>
      // You can dynamically update properties
      const widget = document.querySelector("wordart-widget");

      // Update text after 2 seconds
      setTimeout(() => {
        widget.setAttribute("name", "Dynamic Update!");
        widget.setAttribute("color1", "#00ff00");
      }, 2000);
    </script>
  </body>
</html>
```

### Properties

| Property                   | Type    | Default                 | Description                   |
| -------------------------- | ------- | ----------------------- | ----------------------------- |
| `name`                     | string  | `""`                    | Text to be displayed          |
| `size`                     | string  | `"3"`                   | Font size in rem units        |
| `speed`                    | string  | `"2"`                   | Animation duration in seconds |
| `color1`                   | string  | `"#ff3e00"`             | Primary color                 |
| `color2`                   | string  | `"#40b3ff"`             | Secondary color               |
| `font`                     | string  | `"Rubik Doodle Shadow"` | Font family                   |
| `shouldConvertToUpperCase` | boolean | `false`                 | Convert text to uppercase     |

### Available Fonts

- Rubik Doodle Shadow (default)
- Bungee Shade
- Nabla
- Pixelify Sans
- Rubik Vinyl

### Font Dependencies

The widget uses Google Fonts. If you're using CSP (Content Security Policy), make sure to allow:

```html
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
```

## Development

Clone and install dependencies:

```bash
git clone https://github.com/jaywalker21/wordart.git
cd wordart
npm install
```

Available scripts:

```bash
# Start development server with demo
npm run dev

# Build the library
npm run build:lib

# Build the demo site
npm run build:demo

# Preview the built demo
npm run preview:demo

# Type checking
npm run check
```

## Project Structure

```
.
├── src/
│   ├── lib/               # Library source code
│   │   ├── WordArt.svelte # Main component
│   │   └── index.ts      # Library entry point
│   ├── demo/             # Demo site source
│   │   └── App.svelte    # Demo page
│   └── main.ts           # Demo entry point
├── dist/                 # Built library output
├── demo-dist/           # Built demo site
└── package.json
```

## Browser Support

Supports all modern browsers that implement the Custom Elements v1 specification:

- Chrome
- Firefox
- Safari
- Edge

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

- Built with [Svelte](https://svelte.dev)
- Fonts from [Google Fonts](https://fonts.google.com)
- Created by [Jay](https://github.com/jaywalker21)

---

Made with ❤️ using Claude
