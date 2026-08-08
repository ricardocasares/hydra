v0("climax");
cut(0);
smt(0.95);
bp(120);
show(1)
// seek0(10)

src(s0)
  .saturate(0)
  // .invert()
  .posterize(10,2)
  .color([0,1,1].ease(), [1,0,1].ease(), [1,1,0].ease())
  // .scale([1, 1.2, 0.8, 1.5])
  // .pixelate(hill(100, 300, 20), hill(100, 300, 20))
  .mask(shape([2, 3, 4, 100]).scale(() => r() * 2).rotate(() => time).modulate(osc(Math.PI * 20, 2).thresh()))
  .repat(10)
  .kaleid([2, 5, 10, 20])
  // .rotate(t)
  .out();
