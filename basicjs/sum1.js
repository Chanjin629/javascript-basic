//랜덤 숫자 floor()
for (let i = 0; i < 30; ++i) { 
    let a = Math.floor(Math.random() * 11 + 10);
    console.log(a); 
  }

//배열 오름차순 정렬
let a =[];
for (let i = 0; i < 100; ++i) { 
  a[i] = Math.floor(Math.random() *100 + 1);
}

function compareNumber(i, j) { 
  return i - j; 
}

a.sort(compareNumber);
console.log(a);

//배열 생성후 짝수 제거
let arr =[];
for (let i = 0; i < 100; ++i) { 
  arr[i] = Math.floor(Math.random() *100 + 1);
}
console.log(a);

for (let i = 0; i < 100; ++i) { 
  if(arr[i]%2==0){
    arr.splice(i,1)
    i--;
  }
}

console.log(arr);


//
function sort(a1) { 
    return  a.sort().reverse();
  } 
  let a1 = [ "one", "two", "three", "four", "five" ]; 
  sort(a1);
  console.log(a1);