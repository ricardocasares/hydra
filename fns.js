// init video
v = (s, p) => s.initVideo(`https://localhost:3000/${p}.mp4`);
// init image
img = (s, p) => s.initImage(`https://localhost:3000/${p}`);
// init cam
cam = (s, n) => s.initCam(n);
// set playbac rate
rate = (s, r) => (s.src.playbackRate = r);
// seek to time
seek = (s, t) => (s.src.currentTime = t);
// CMY colors
c = () => [0, 1, 1];
m = () => [1, 0, 1];
y = () => [1, 1, 0];
// pixelate
px = (x) => [x, x];
// audio fns
cos = () => Math.cos(a.fft[0]);
sin = () => Math.sin(a.fft[0]);
tan = () => Math.tan(a.fft[0]);
cut = (n) => a.setCutoff(n);
smt = (n) => a.setSmooth(n);
tan = () => Math.tan(a.fft[0]);
sin = () => Math.sin(a.fft[0]);
cos = () => Math.cos(a.fft[0]);
