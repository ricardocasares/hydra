v0("otros");
cut(0);
smt(0);
bp(90);
show(1);

shape([1, 2, 3, 4])
  .saturate(0)
  // .repeat(range(1, 50, 5), range(1, 50, 5))
  .scrollX([-0.5, 0.5], 0.1)
  // .scale(20)
  .color(c(), m(), y())
  .diff(
    src(s0)
      .saturate(0)
      .color(y(), c(), m())
      .posterize(10, 10)
      .pixelate(hill(100, 300, 20), hill(100, 300, 20))
  )
  // .sub(
  // src(o0)
  .modulateKaleid(osc([10, 20, 30]))
  .kaleid(20)
  .rotate(() => time)
  // )
  .out();
