s0.initVideo("https://localhost:3000/flashback.mp4")
a.setCutoff(3)
a.setSmooth(.5)
a.show()
bpm = 110

r = () => Math.tan(Math.PI * a.fft[0])
g = () => Math.sin(Math.PI * a.fft[4])
b = () => Math.sin(Math.PI * a.fft[2])


src(s0)
	.saturate(0)
	.color(r, g, () => b() * -1)
	.mask(shape([2, 3, 4, 100])
		.scale(() => r() * 2)
		.rotate(() => time)
		.modulate(osc(Math.PI * 20, 2)
			.thresh()))
	.kaleid([2, 50, 10])
	.out()