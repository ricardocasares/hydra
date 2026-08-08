v0("flashback");
cut(2);
smt(0.5);
bp(120);

// seek0(0)

src(s0)
  // .invert(0)
  .saturate(0)
  .color(r, g, () => b() * -1)
  .mask(
    shape([2, 3, 4, 884])
      .scale(lo)
      .modulate(osc(Math.PI * 8, .2).thresh())
  )
  .repeat(4)
  .kaleid([2, 20, 50])
  .rotate(t)
  .repeat(10)
  .mask(shape([2,3,4]))
  // .rotate(t)
  .out();
