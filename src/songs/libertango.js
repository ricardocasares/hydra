v0("piazzolla");
cut(-2);
smt(0.3);
bp(160);
show(1);
// seek0(90); // bandoneon
// seek0(397); // cara
const o = osc(100).thresh().modulate(noise(tan)).rotate(t);

src(s0)
  .saturate(0)
  .colorama(mid)
  .color(ntan, tan, ntan)
  .posterize(lo, lo)
  // .modulateScale(osc(hi))
  // .pixelate(350, 350)
  // .mask(shape([2, 3, 4, 100]))
  // .modulateKaleid(osc(0).kaleid(range(1, 100)))
  // .rotate(t)
  .out();
