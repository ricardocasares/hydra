v0("scorpion");
cut(-2);
smt(0.99);
bp(75);

src(s0)
  .saturate(0)
  .mask(shape([2, 3, 4, 5]).rotate(t))
  .color(nsin, tan, ntan)
  .posterize(10, 4)
  .modulateScale(osc(tan, 1))
  // Enhanced effects
  .scale(() => 1 + nsin() * 0.3)
  .rotate(() => nsin() * 0.1)
  .repeat(
    2,
    2,
    () => nsin() * 0.1,
    () => tan() * 0.1
  )
  .blend(
    osc(5, 0.1, 0.8)
      .color(0.8, 0.3, 0.9)
      .rotate(() => time * 0.05),
    0.3
  )
  .modulateHue(noise(3), 0.5)
  // .pixelate(150, 150)
  // .kaleid([1, 2, 3, 4])

  // Alternative sections - uncomment for different vibes:

  // Dreamy section
  // .modulate(voronoi(5, 0.3, 0.2), 0.2)
  // .saturate(1.5)
  // .brightness(0.1)

  // Glitchy section
  // .pixelate(50, 50)
  // .shift(0.1, 0.05, -0.1, 0.02)
  // .repeat(4, 1)

  // Psychedelic section
  .kaleid(4)
  .colorama(0.5)
  .contrast(1.2)

  .out();
