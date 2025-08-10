v0("climax");
cut(0);
bp(120);

src(s0)
  .saturate(0)
  .color(
    () => Math.tan(a.fft[4]) * 1,
    () => Math.atan(a.fft[0]) * 1,
    () => Math.atan(a.fft[0]) * -1
  )
  .posterize(10, 2)
  // .pixelate(150, 150)
  // .kaleid([1, 2, 3, 4])
  // .invert()
  // .mask(shape([2, 3, 4, 100]).scale(1.5))
  // .mask(src(s1))
  .out();
