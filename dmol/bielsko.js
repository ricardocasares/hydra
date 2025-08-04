v(s0, "tram");
v(s1, "piernas");
rate(s0, 1);

src(s0)
  .saturate(0)
  .color(tan, tan, 1)
  .posterize(10, 3)
  .pixelate(150, 150)
  //.kaleid([1,2,3,4])
  //.invert()
  //.mask(shape([2,3,4,100]).scale(1.5))
  //.mask(src(s1))
  .out();
