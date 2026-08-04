v0("krk");
cut(-2);
smt(0.4);
bp(122);
show(1);

// src(s0)
//   .saturate(0)
//   // .color(r,g,b)
//   .posterize(1000, 10)
//   .modulateScale(osc(hi, 0, tan).thresh())
//   // .pixelate([1500,1500])
//   .kaleid([2, 4, 6])
//   // .rotate(() => t() * 0.1)
//   .out();

// osc(100, tan, hi)
//   .thresh(0.5)
//   .modulate(noise(sin, cos))
//   .color(nsin, tan, r)
//   .kaleid([3, 6, 12])
//   .rotate(() => t() * 0.2)
//   .scale(lo)
//   .blend(src(s0).saturate(0))
//   .out();

src(s0)
  .saturate(0)
  // .colorama()
  .color(g, r, b)
  .posterize(range(2, 8), 4)
  // .modulateKaleid(osc(hi).thresh())
  .mask(shape([3, 4, 6, 8], 0.5, hi))
  .out();

// solid(r, g, b)
//   .add(osc(hi, tan, mid).thresh().kaleid(8))
//   .modulate(noise(cos, sin), 0.5)
//   .color(tan, nsin, cos)
//   .pixelate(px(50 + mid() * 150))
//   .rotate(() => t() * -0.15)
//   .out();

// shape([4, 6, 8], 0.3, lo)
//   .color(r, 0, tan)
//   .repeat(lo, hi)
//   .modulateRotate(osc(mid).thresh())
//   .scale(sin, cos)
//   .add(src(s0).saturate(0).thresh())
//   .out();
