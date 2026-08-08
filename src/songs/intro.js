v0("flashback");
img1("dmol.webp");
smt(0.4);
cut(4);

show(1);

src(s1)
    .modulate(src(s0).modulate(osc(rip)))
    // .color(r,g,b)
    .posterize(10,4)
    // .scale([1,1,1,2])
    // .modulate(voronoi())
    // .kaleid([2,3,4,5])
    // .mask(shape([2,3,4]).modulateScale(osc(bass)).modulate(noise()))
    .out();
