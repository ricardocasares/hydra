// 01 invocación — CMYK séance, cyberpunk print rig
// the b&w animation is pure contrast: thresh carves it into hard ink
// plates, and beat-locked arrays (bpm 102) swap inks + punch scale on
// the downbeat. stepped arrays = the impacts; feedback = the ghost.

v0("invocacion");
bp(102);
cut(-4);
smt(0.5);
show(1);
// seek0(0);


// lights plate + inverted darks plate; midtones between the two
// thresholds stay black — the K plate comes free from the source
src(s0)
    // .brightness(10)
    .contrast(tan)
    .invert()
    // .posterize(1, 10)
    .saturate(0)
    .color([0, 1, 1], [1, 0, 1], [1, 1, 0])
    // .mask(shape([2, 3]).modulateScale(noise(0,[1, 0, 3, 100])))
    // .mask(shape(3).rotate(() => bass() * 2).scale(1.5))
    .mask(shape(4).modulateScale(osc(1,bass)))
    // .modulatePixelate(osc(lo, .5))
    .modulateScale(voronoi(rip,.2))
    .modulateRotate(noise(rip, () => t))
    .modulateRepeat(voronoi(rip, 1))
    .repeat(2)
    .kaleid([3,4, 6, 10])
    // .scale([1,1,1,3])
    // .kaleid(0)
    // .modulateScrollX(osc(rip,1))
    // .rotate(t)
    .out();
