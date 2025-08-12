v0("climax");
cut(-2);
smt(0.99);
bp(112);

src(s0)
  .saturate(0)
  .color(nsin, tan, ntan)
  .posterize(10, 4)
  .modulateScale(osc(tan, 1))
  .pixelate(150, 150)
  // .kaleid([1, 2, 3, 4])
  .out();
