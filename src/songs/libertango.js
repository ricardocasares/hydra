v0("piazzolla");
cut(0);
smt(0);
bp(160);
show(1);
// rate0(1);

const o = osc(100).thresh().modulate(noise(tan)).rotate(t);

src(s0)
  .saturate(0)
  .color(ntan, ntan, tan)
  .posterize(lo, lo)
  // .mask(o)
  // .pixelate(350, 350)
  .mask(shape([2, 3, 4, 100]))
  // .kaleid(0)
  .out();
