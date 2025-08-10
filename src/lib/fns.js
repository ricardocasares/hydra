// init video
export const check = (s, p) => (cb) => s?.src?.src?.includes?.(p) ? null : cb();
export const v0 = (p) => check(s0, p)(() => s0.initVideo(`/${p}.mp4`));
export const v1 = (p) => check(s1, p)(() => s1.initVideo(`/${p}.mp4`));
export const v2 = (p) => check(s2, p)(() => s2.initVideo(`/${p}.mp4`));
// init image
export const img0 = (p) => check(s0, p)(() => s0.initImage(`/${p}`));
export const img1 = (p) => check(s1, p)(() => s1.initImage(`/${p}`));
export const img2 = (p) => check(s2, p)(() => s2.initImage(`/${p}`));
// init cam
export const cam0 = (n) => s0.initCam(n);
export const cam1 = (n) => s1.initCam(n);
export const cam2 = (n) => s2.initCam(n);
// set playback rate
export const rate0 = (r) => (s0.src.playbackRate = r);
export const rate1 = (r) => (s1.src.playbackRate = r);
export const rate2 = (r) => (s2.src.playbackRate = r);
// seek to time
export const seek0 = (t) => (s0.src.currentTime = t);
export const seek1 = (t) => (s1.src.currentTime = t);
export const seek2 = (t) => (s2.src.currentTime = t);
// CMY colors
export const c = () => [0, 1, 1];
export const m = () => [1, 0, 1];
export const y = () => [1, 1, 0];
// pixelate
export const px = (x) => [x, x];
// audio fns
export const bp = (n) => (bpm = n);
export const cut = (n) => a.setCutoff(n);
export const smt = (n) => a.setSmooth(n);
export const cos = () => Math.cos(a.fft[0]);
export const sin = () => Math.sin(a.fft[0]);
export const tan = () => Math.tan(a.fft[0]);
export const ncos = () => Math.cos(a.fft[0]) * -1;
export const nsin = () => Math.sin(a.fft[0]) * -1;
export const ntan = () => Math.tan(a.fft[0]) * -1;
export const r = () => Math.tan(Math.PI * a.fft[0]);
export const g = () => Math.sin(Math.PI * a.fft[3]);
export const b = () => Math.sin(Math.PI * a.fft[2]);
export const lo = () => 1 / (a.fft[0] || 1);
export const mid = () => 1 / (a.fft[1] || 1);
export const hi = () => 1 / (a.fft[3] || 1);
// utils
export const neg = (n) => n * -1;
export function range(a, b, step = 1) {
  if (step < 1) step = 1;

  const length = Math.floor((b - a) / step) + 1;
  return Array.from(
    { length: length > 0 ? length : 0 },
    (_, i) => a + i * step
  );
}

export const hill = (a, b, step) => [
  ...range(a, b, step),
  ...range(a, b - 1, step).reverse(),
];
