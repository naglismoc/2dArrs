
dePow(64);
function dePow(num) {
    let resArr = [];
    for (let i = 1; i < num; i++) { // i = 4;
        console.log("i = " + i);
        let posRes = i;
        for (let a = 1; a < num; a++) {
            posRes *= i;
            if (posRes > num) {
                break;
            }
            if (posRes == num) {
                resArr.push([i, a + 1]);
                console.log(i, a + 1);
                if (a == 1) {
                    i = num;
                }
                break;
            }
        }
    }
    console.log(resArr);
}