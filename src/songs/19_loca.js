v0("bando");
cut(0);
smt(0.9);
bp(137);
show(1);
cam1(0);
// seek0(0);

const o = osc(800).thresh().modulate(noise(rip)).rotate(t);

src(s1)
  // .invert()
  .saturate(0)
  .colorama(bass)
  .color(r,g,b)
  .posterize(10,4)
  // .mask(
  //   shape([2, 3, 4, 884])
  //     .scale(lo)
  //     .modulate(osc(Math.PI * 8, .2).thresh())
  // )
  // .repeat(10)
  // .rotate(t)
  // .modulateKaleid(osc(0).kaleid(range(1, 100)))
  // .mult(o)
  .out();
