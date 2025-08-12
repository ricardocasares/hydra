v0("scorpion");
// v0("rifle");
cut(2);
smt(0.95);
bp(120);

src(s0)
  .saturate(0)
  .color(r, g, ntan)
  .scale([1, 1.2, 0.8, 1.5])
  .pixelate(hill(100, 300, 20), hill(100, 300, 20))
  .mask(
    shape([2, 3, 4, 100])
      .scale(() => r() * 2)
      .rotate(() => time)
      .modulate(osc(Math.PI * 20, 2).thresh())
  )
  // .kaleid([2, 5, 10, 20])
  // .rotate(t)
  // .posterize([3, 8, 5, 12])
  .out();
