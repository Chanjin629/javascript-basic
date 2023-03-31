function removes(arr){
    for (let i = 0; i < arr.length; ++i) { 
        if(arr[i]%3==0){
          arr.splice(i,1)
          i--;
        }
      }
    return arr;
} 

console.log(removes([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(removes([11, 12, 13, 14, 15]));