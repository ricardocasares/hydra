v0("libertango");
cut(-2);
smt(0.3);
bp(160);
// show(1);
// seek0(0);
// seek0(255); // bandoneon
// seek0(191); // cara
const o = osc(100).thresh().modulate(noise(tan)).rotate(t);

src(s0)
  .saturate(0)
  .colorama(cos)
  .color(ntan, tan, ntan)
  .posterize(lo, sin)
  // .modulateScale(osc(hi))
  .pixelate(350, 350)
  // .mask(shape([2, 3, 4, 100]))
  // .modulateKaleid(osc(0).kaleid(range(1, 100)))
  // .rotate(t)
  .out();
