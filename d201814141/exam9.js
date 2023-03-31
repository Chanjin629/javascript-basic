function sum(a){
    let sum =0;
    for(i =0; i<a.length; i++){
        for(j=0; j<a[i].length; j++){
            sum = sum + a[i][j];
        }
    }
    return sum;
}
let a1 = [[1, 2], [3, 4, 5],];
let a2 = [[1], [2, 3, 4], [5, 6]];
console.log(sum(a1));
console.log(sum(a2));
