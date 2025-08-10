v("flashback");
a.setCutoff(3);
a.setSmooth(0.5);
a.show();
bpm = 110;
cam0(0);

src(s0)
  .saturate(0)
  .color(r, g, () => b() * -1)
  //   .mask(
  //     shape([2, 3, 4, 100])
  //       .scale(() => r() * 2)
  //       .rotate(() => time)
  //       .modulate(osc(Math.PI * 20, 2).thresh())
  //   )
  //   .kaleid([2, 50, 10])
  .out();
