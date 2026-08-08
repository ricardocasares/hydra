img1("dmol.webp");
cam0(0);
cut(-4);
smt(0.5);
show(1);


// lights plate + inverted darks plate; midtones between the two
// thresholds stay black — the K plate comes free from the source
src(s0)
    // .brightness(10)
    // .contrast(tan)
    .invert()
    .posterize(10, 4)
    .saturate(0)
    .color([0, 1, 1], [1, 0, 1], [1, 1, 0])
    // .mask(shape([2, 3]).modulateScale(noise(0,[1, 0, 3, 100])))
    .mask(shape(3).rotate(() => bass() * 2).scale(1.5))
    // .mask(shape(4).modulateScale(osc(1,bass)))
    // .modulatePixelate(osc(lo, .5))
    // .modulateScale(voronoi(rip,.2))
    // .modulateRotate(noise(rip, () => t))
    // .modulateRepeat(voronoi(rip, 1))
    // .repeat(2)
    // .scale([1,1,1,3])
    // .kaleid([6, 10])
    // .rotate(t)
    // .modulate(src(s1))
    // .kaleid(0)
    // .modulateScrollX(osc(rip,1))
    // .rotate(t)
    .out();
