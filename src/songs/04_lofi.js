v0('lofi');
bp(110);
show(1);
cut(-2);
smt(0.5)
// seek0(80)

src(s0)
    // .invert()
    .contrast(tan)
    .saturate(0)
    .posterize(10, () => bass() * 4)
    .color([0,1,1].ease(), [1,0,1].ease(), [1,1,0].ease())
    // .mask(shape(3).modulateRotate(osc(0)).modulateScale(osc(rip)))
    // .scale([1, 1.25, 1.5, 2])
    // .modulateScrollX(osc(4, 0), rip)
    // .modulateScale(noise(4, 0), rip)
    // .mask(shape([2, 3]).modulateScale(noise(0,[1, 0, 3, 100])))
    // .modulateScale(noise(bass, 1))
    .scale([1, 1, 1, 3])
    // .pixelate(200)
    // .rotate([0, 0.03, 0, -0.03])
    // .repeat(4)
    // .scale(1)
    // .kaleid([1, 1, 1, 4])
    // .modulateRepeat(noise(0, bass), bass)
    .out();
