v0('chopin');
bp(160);
show(1);
cut(-2);
smt(0)

// seek0(15)

src(s0)
    .saturate(0)
    .posterize(10, 2)
    .color([0,1,1].ease(), [1,0,1].ease(), [1,1,0].ease())
    // .scale([1,2,1,3])
    .out();
