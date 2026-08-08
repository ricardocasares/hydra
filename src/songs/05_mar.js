v0('mar');
bp(134);
show(1);
cut(0);
smt(0.5)

seek0(0)

src(s0)
    // .invert()
    .contrast(tan)
    .saturate(0)
    .contrast(4)
    .posterize(10, 4)
    .color([0,1,1].ease(), [1,0,1].ease(), [1,1,0].ease())
    .modulateScale(osc(2, .5), rip)
    .out();
