v0("otros"); // Using cantina video as base - fits the tango theme
cut(0);
smt(0);
bp(90); // 90 BPM for milonga rhythm
show(1);

// Main milonga visual - passionate and rhythmic
// src(s0)
//   .saturate(0)
//   .color(r, ntan, sin) // Warm reds and golds for tango passion
//   // .colorama(() => mid() * 0.8) // Subtle color shifting with mid frequencies
//   .posterize(range(3, 8), range(2, 6)) // Dynamic posterization
//   // .modulateRotate(osc(() => hi() * 2, 0, tan).thresh(0.6), () => lo() * 0.3) // Rotate with high frequencies
//   // .kaleid([2, 4, 8]) // Kaleidoscope effect for dance-like symmetry
//   // .rotate(() => t() * 0.05 + tan() * 0.1) // Slow rotation with bass accent
//   .scale(hi) // Gentle scaling with audio
//   .out();

shape([2, 3, 4])
  .saturate(0)
  // .scale(10)
  .color(c(), m(), y())
  .diff(
    src(s0)
      .saturate(0)
      .color(y(), c(), m())
      .posterize(10, 10)
      .pixelate(hill(100, 300, 20), hill(100, 300, 20))
  )
  .rotate(lo)
  .modulateKaleid(osc(20))
  .out();

// solid(
//   () => r() * 0.8,
//   () => tan() * 1.2,
//   () => nsin() * 0.3
// )
//   .add(
//     osc(() => hi() * 100 + 20, tan, mid)
//       .thresh(() => 0.3 + lo() * 0.4)
//       .kaleid(range(2, 16))
//   )
//   .modulate(
//     noise(
//       () => cos() * 3,
//       () => sin() * 3
//     ),
//     () => mid() * 0.4
//   )
//   .modulateScale(
//     osc(() => lo() * 5 + 1, 0, tan),
//     () => lo() * 0.6 + 0.2
//   )
//   .color(
//     () => tan() * 1.5,
//     nsin,
//     () => r() * 0.7
//   )
//   .blend(src(s0).saturate(0).posterize(10, 10), 0.5)
//   .rotate(() => time * 0.15 + sin() * 0.3)
//   .scale(() => 0.8 + cos() * 0.3)
//   .out();
