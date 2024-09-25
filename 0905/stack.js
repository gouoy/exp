// 문자열을 역순으로 꺼내 반대로 출력하기 
const stack = 'rainbow' ;

const arr = Array.from(stack); 
// 문자열은 완전한 배열은 아니라서, 배열로 변경해줘야 한다
const newArr = []; 

for (let i = arr.length - 1; i >= 0; i--){
    newArr.push(arr[i]); 
    console.log(newArr.join(""));
}
// let result = newArr.concat();
// console.log(result)
console.log(`stack is : ${typeof stack}`);
console.log(`newArr is: ${typeof newArr}`)
console.log(`now newArr is : ${typeof String(newArr)}`)