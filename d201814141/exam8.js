function move(a) {
    a.splice(0,0,a[a.length-1])
    a.splice(a.length-1,1)
    return a;
}
let a = [1, 2, 3, 4, 5];
for (let i = 0; i < 3; ++i) {
  move(a);
  console.log(a);
}
