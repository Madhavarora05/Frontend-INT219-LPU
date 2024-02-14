function mul_table(N, i) {
    if (i <= 10) {
        console.log(N + " * " + i + " = " + N * i);
        mul_table(N, i + 1);
    }
}

var N = 5;
mul_table(N, 1);
