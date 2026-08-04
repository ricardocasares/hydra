// 01 invocación — CMYK séance, cyberpunk print rig
// the b&w animation is pure contrast: thresh carves it into hard ink
// plates, and beat-locked arrays (bpm 102) swap inks + punch scale on
// the downbeat. stepped arrays = the impacts; feedback = the ghost.

v0("invocacion");
bp(102);
cut(-2);
smt(0.9);
show(1);
// seek0(0);


// lights plate + inverted darks plate; midtones between the two
// thresholds stay black — the K plate comes free from the source
src(s0)
    .color([0, 1, 1], [1, 0, 1], [1, 1, 0]) // C → M → Y, one ink per beat
    .mask(shape([2, 3, 4]).modulateScale(voronoi(rip, 1)))
    // .mask(shape(3).rotate(rip).scale(1.5))
    // .modulatePixelate(osc(0, rip))
    // .modulateScale(noise(rip,1))
    // .modulateRotate(noise(rip, () => t))
    // .modulateRepeat(voronoi(rip, 1))
    // .repeat(2)
    // .kaleid([3,4, 6, 10])
    // .kaleid(0)
    // .modulateScrollX(osc(rip,1))
    // .rotate(t)
    .out();
