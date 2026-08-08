v0("krk");
bp(122);
show(1);

cut(3)
smt(0.86)

// seek0(40)

// Powers suppress room noise and make kicks, snares, and hats hit harder.
const audioPower = (bin, exponent, gain = 1) => () =>
  Math.min(1, Math.pow(Math.max(0, a.fft[bin] * gain), exponent));

const kick = audioPower(0, 2, 1.25);
const rhythm = audioPower(1, 2, 1.15);
const hats = audioPower(3, 3, 1.4);

const registration = () => 0.003 + kick() * 0.035;

const plate = () =>
  src(s0)
    .saturate(0)
    .contrast(() => 1.2 + kick() * 0.7)
    .posterize(5, 0.65)
    .scale(() => 1.03 + kick() * 0.14)
    .rotate(() => Math.sin(time * 0.2) * 0.012 + rhythm() * 0.025);

const cyan = () =>
  plate()
    .luma(() => 0.55 - kick() * 0.18, 0.07)
    .color(...c())
    .scrollX(() => -registration());

const magenta = () =>
  plate()
    .invert()
    .luma(() => 0.58 - rhythm() * 0.16, 0.07)
    .color(...m())
    .scrollX(registration)
    .scrollY(() => rhythm() * 0.018);

const yellow = () =>
  plate()
    .thresh(() => 0.62 - hats() * 0.3, 0.06)
    .luma(0.5, 0.02)
    .color(...y())
    .scrollY(() => -registration() * 0.7)
    .scale(() => 1.01 + hats() * 0.06)

// K plate: black scan cuts become thicker on sharp high-frequency hits.
const black = () =>
  osc(24, 0.015, 0)
    .rotate(pi(0.5))
    .thresh(bass)
    .luma(0.5, 0.01)
    .color(0, 0, 0);

solid(0, 0, )
  .layer(cyan())
  .layer(magenta())
  .layer(yellow())
  // .mask(
  //   shape([2, 3, 4, 884])
  //     .scale(lo)
  //     .modulate(osc(Math.PI * 8, .2).thresh())
  // )
  // .layer(black())
  // .mask(shape([2,3,4]).modulateScale(osc(0,.3)))
  // .repeat(4)
  // .rotate(t)
  // .kaleid([1,2,3,4,5])
  .out();
