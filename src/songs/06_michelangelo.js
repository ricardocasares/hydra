v0('michelangelo');
bp(111);
show(1);
cut(-2);
smt(0.5)

// seek0(0)

src(s0)
    .invert()
    .saturate(0)
    .posterize(10, 3)
    // .pixelate([1920,1920])
    .color([0,1,1].ease(), [1,0,1].ease(), [1,1,0].ease())
    .scale([1,2,1,3])
    // .kaleid(2)
    // .rotate(t)
    .out();
