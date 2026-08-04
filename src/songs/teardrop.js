// teardrop — cyberpunk CMYK
// misregistered print plates + rolling CRT scanlines + neon feedback
// smoothness rules: high fft smoothing, no tan()/stepped arrays,
// continuous mappings only, frame feedback for motion blur

v0("tram");
bp(75);
cut(0);
smt(0.96);

// smoothed band levels (~0..1)
const bass = () => a.fft[0];
const mids = () => a.fft[1];
const high = () => a.fft[3];

// bass pulls the plates apart (print misregistration)
const split = () => 0.002 + bass() * 0.008;

// one grayscale "ink plate" of the frame
const plate = (r, g, b) =>
  src(s0)
    .saturate(0)
    .posterize(10,3)
    // .pixelate([200,200])
    .contrast(1.35)
    // slow pendulum drift + bass breathing
    .rotate(() => Math.sin(time * 0.07) * 0.04)
    .scale(() => 1.06 + bass() * 0.1)
    .color(r, g, b);

plate(...c())
  .saturate(0)
  .scrollX(() => -split())
  .add(plate(...m()).scrollX(split), 0.85)
  .add(plate(...y()).scrollY(() => split() * 0.75), 0.6)
  // digital shimmer from the mids
  .modulate(voronoi(8, 0.15, 0.4), () => mids() * 0.05)
  // flat neon ink zones
  .posterize(6, 0.7)
  // rolling CRT scanlines
  .mult(osc(150, 0.01).rotate(pi(0.5)).brightness(0.4), 0.25)
  // highs flash the whole tube
  .brightness(() => high() * 0.05)
  .contrast(1.15)
  // feedback trails = motion blur
  .blend(o0, 0.65)
  .out();
