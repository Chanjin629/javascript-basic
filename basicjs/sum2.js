//문자열

let a = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be." ;

function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}

const str = solution(a);

console.log(str);

let result = str.replace(/ /g, '');
console.log(result);

let arr = str.split(" ");

console.log(arr);

//10초이따 종료
let count = 0;
function printTime(msg) { 
  console.log(msg, new Date()); 
  count ++;
  if(count == 10){
  clearInterval(id);
}
}

let id = setInterval(printTime, 1000, "1초 간격");

