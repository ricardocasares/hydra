v0("flashback");
cut(3);
smt(0.5);
bp(120);

src(s0)
  .saturate(0)
  .color(r, g, () => b() * -1)
  .mask(
    shape([2, 3, 4, 100])
      .scale(() => r() * 2)
      .rotate(() => time)
      .modulate(osc(Math.PI * 20, 2).thresh())
  )
  .kaleid([2, 5, 10, 20])
  .out();
