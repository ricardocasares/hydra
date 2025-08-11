# Copilot Instructions for Hydra Video Synth

This guide provides essential instructions for using GitHub Copilot with the Hydra video synth API. Reference the [Hydra API documentation](https://hydra.ojack.xyz/api/) for full details.

## Getting Started

- Hydra is a live-coding video synth for creating visuals in the browser using JavaScript.
- The API exposes functions for manipulating sources, shapes, colors, modulation, and more.

## Key Concepts

- **Sources**: Start with a source (e.g., `osc()`, `shape()`, `voronoi()`, `solid()`).
- **Chaining**: Methods can be chained for complex effects, e.g., `osc().rotate().out()`.
- **Output**: Use `.out()` to send the result to the screen.

## Common Functions

- `osc(frequency, sync, offset)`: Oscillator source.
- `shape(sides, radius, smoothing)`: Polygonal shape.
- `voronoi(num, speed, blending)`: Voronoi pattern.
- `solid(r, g, b, a)`: Solid color.
- `src(o)`: Use another output as a source.
- `noise(scale, offset, alpha)`: Noise pattern.

## Transformations

- `.rotate(angle, speed)`: Rotate the image.
- `.scale(amount, xMult, yMult)`: Scale the image.
- `.pixelate(x, y)`: Pixelate effect.
- `.repeat(x, y, offsetX, offsetY)`: Repeat pattern.

## Color Manipulation

- `.color(r, g, b, a)`: Set color.
- `.invert()`: Invert colors.
- `.posterize(levels)`: Posterize effect.
- `.saturate(amount)`: Adjust saturation.

## Modulation & Blending

- `.modulate(src, amount)`: Modulate with another source.
- `.blend(src, amount)`: Blend with another source.
- `.add(src, amount)`: Add another source.
- `.diff(src, amount)`: Difference blend.
- `.layer(src)`: Layer sources.

## Output

- `.out([o])`: Output to screen or buffer.
- `.render([o])`: Render a specific output.

## Example

```js
osc(10, 0.1, 1.2).rotate(0.2, 0.1).color(1, 0.5, 0.2).out();
```

## Tips for Copilot

- Use function chaining for complex visuals.
- Experiment with parameters for unique effects.
- Reference the [Hydra API](https://hydra.ojack.xyz/api/) for all available functions and options.
