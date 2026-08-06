v0('cichoz');
bp(90);
show(1);
cut(-2);
smt(0.0)

// seek0(0)

src(s0)
    // .invert()
    .saturate(0)
    .posterize(10, 2)
    .color([0,1,1].ease(), [1,0,1].ease(), [1,1,0].ease())
    .scale([1,1,1,3].smooth())
    // .modulateScale(osc(bass, 0))
    .out();
