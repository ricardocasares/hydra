v0("tram");
cut(0);
smt(.9);
bp(112);
show(1);

seek0(0);

src(s0)
  .saturate(0)
  .color(nsin, tan, ntan)
  .posterize(10, 4)
  // .modulateScale(osc(sin, cos))
  // .pixelate(100, 100)
  // .mask(shape([2,4,8]))
  // .repeat(4)
  // .kaleid([100, 2, 3, 4])
  // .rotate(t)
  .out();
