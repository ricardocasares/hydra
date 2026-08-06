v0('android');
bp(110);
show(1);
cut(-2);
smt(0.9)
// seek0(0)

src(s0)
    // .invert()
    .contrast(tan)
    .saturate(0)
    .posterize(10,2)
    .color([0,1,1].ease(), [1,0,1].ease(), [1,1,0].ease())
    // .scale([0.25, .5, .75, 1])
    // .mask(shape([2, 3]).modulateScale(noise(0,[1, 0, 3, 100])))
    // .rotate([0, 90, 180, 0])
    // .modulateScale(noise(bass, 1))
    .scale([1, 1, 1, 3])
    .pixelate([1920, 1920, 1920, 200], [1080, 1080, 1080, 120])
    .rotate([0, 0.03, 0, -0.03])
    // .modulateScrollX(osc(4, 0), rip)
    // .rotate(t)
    // .kaleid([1, 1, 1, 4])
    // .modulateRepeat(noise(bass, 1))
    .out();
