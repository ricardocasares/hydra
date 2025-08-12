// init video
export const check = (s, p) => (cb) => s?.src?.src?.includes?.(p) ? null : cb(); // Check if video is already loaded, avoid reloading same video
export const v0 = (p) => check(s0, p)(() => s0.initVideo(`/${p}.mp4`)); // Initialize video on source 0
export const v1 = (p) => check(s1, p)(() => s1.initVideo(`/${p}.mp4`)); // Initialize video on source 1
export const v2 = (p) => check(s2, p)(() => s2.initVideo(`/${p}.mp4`)); // Initialize video on source 2
// init image
export const img0 = (p) => check(s0, p)(() => s0.initImage(`/${p}`)); // Initialize image on source 0
export const img1 = (p) => check(s1, p)(() => s1.initImage(`/${p}`)); // Initialize image on source 1
export const img2 = (p) => check(s2, p)(() => s2.initImage(`/${p}`)); // Initialize image on source 2
// init cam
export const cam0 = (n) => s0.initCam(n); // Initialize camera on source 0
export const cam1 = (n) => s1.initCam(n); // Initialize camera on source 1
export const cam2 = (n) => s2.initCam(n); // Initialize camera on source 2
// set playback rate
export const rate0 = (r) => (s0.src.playbackRate = r); // Set playback speed for source 0 video
export const rate1 = (r) => (s1.src.playbackRate = r); // Set playback speed for source 1 video
export const rate2 = (r) => (s2.src.playbackRate = r); // Set playback speed for source 2 video
// seek to time
export const seek0 = (t) => (s0.src.currentTime = t); // Jump to specific time in source 0 video
export const seek1 = (t) => (s1.src.currentTime = t); // Jump to specific time in source 1 video
export const seek2 = (t) => (s2.src.currentTime = t); // Jump to specific time in source 2 video
// CMY colors
export const c = () => [0, 1, 1]; // Return cyan color values [R, G, B]
export const m = () => [1, 0, 1]; // Return magenta color values [R, G, B]
export const y = () => [1, 1, 0]; // Return yellow color values [R, G, B]
// pixelate
export const px = (x) => [x, x]; // Return array of same value for x,y pixelation
// audio fns
export const show = (b) => (b ? a.show() : a.hide()); // Show or hide audio analyzer
export const bp = (n) => (bpm = n); // Set BPM value
export const cut = (n) => a.setCutoff(n); // Set audio cutoff frequency
export const smt = (n) => a.setSmooth(n); // Set audio smoothing amount
export const cos = () => Math.cos(a.fft[0]); // Cosine of bass frequency
export const sin = () => Math.sin(a.fft[0]); // Sine of bass frequency
export const tan = () => Math.tan(a.fft[0]); // Tangent of bass frequency
export const ncos = () => Math.cos(a.fft[0]) * -1; // Negative cosine of bass frequency
export const nsin = () => Math.sin(a.fft[0]) * -1; // Negative sine of bass frequency
export const ntan = () => Math.tan(a.fft[0]) * -1; // Negative tangent of bass frequency
export const r = () => Math.tan(Math.PI * a.fft[0]); // Red channel based on bass
export const g = () => Math.sin(Math.PI * a.fft[3]); // Green channel based on high freq
export const b = () => Math.sin(Math.PI * a.fft[2]); // Blue channel based on mid freq
export const lo = () => 1 / (a.fft[0] || 1); // Inverse of bass frequency (low)
export const mid = () => 1 / (a.fft[1] || 1); // Inverse of mid frequency
export const hi = () => 1 / (a.fft[3] || 1); // Inverse of high frequency
// utils
export const pi = (n = 1) => Math.PI * n; // Return PI multiplied by n (default 1)
export const t = () => time; // Return current time
export const t2 = () => time / 2; // Return current time /2
export const t4 = () => time / 4; // Return current time /4
export const neg = (n) => n * -1; // Return negative value of n
export function range(a, b, step = 1) {
  // Generate array of numbers from a to b with step
  if (step < 0.1) step = 1;

  const length = Math.floor((b - a) / step) + 1;
  return Array.from(
    { length: length > 0 ? length : 0 },
    (_, i) => a + i * step
  );
}

export const hill = (a, b, step) => [
  // Generate array that goes up then down (hill shape)
  ...range(a, b, step),
  ...range(a, b - 1, step).reverse(),
];
