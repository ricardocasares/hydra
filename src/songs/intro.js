v0("flashback");
img1("dmol.webp");
smt(0.0);
cut(0);

show(1);

src(s1)
    .modulate(src(s0).modulate(osc(0)))
    .out();
