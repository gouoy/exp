const Row = 4;
const Col = 4; 
let box = [] ; 
function makeTable(){
    for(let i=0; i<Row ; i++){
        let row = [];  // 행을 생성 
        for(let j=0; j<Col ; j++){
           row.push(`${i}${j}`)
        }
        box.push(row);
    }
    return box;
}

console.log(makeTable());