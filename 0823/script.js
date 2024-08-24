// 
const height = document.getElementById('height'); 
const weight = document.getElementById('weight'); 
const doCalculate = document.getElementById('doCalculate'); 
const reset = document.getElementById('reset'); 
Math.PI ;
let calculated = document.getElementById('calculate'); 
const result = document.getElementById('result');


// 초기화! 
reset.addEventListener("click", doAgain);

function removed(){
    element.remove();
}


function doAgain(){
    height.value = ""; 
    weight.value = ""; 
    doCalculate.disabled = false; 
    doCalculate.style.background ="rgb(117, 152, 137)";
    removed(); 
}



doCalculate.addEventListener("click", startCalculating);



function startCalculating(){
    let weightValue = parseFloat(weight.value); 
    let heightValue = parseFloat(height.value);
    let resultIs = weightValue/(heightValue * heightValue)*10000;
    printResult = resultIs.toFixed(2) ; 
    console.log(printResult); 

    if(printResult < 18.5){
        console.log('저체중');
        let element = ' <div id="result"> <p>"저체중"</p> <p>체지방 지수는 <span id="named"></span>입니다.</p> </div>' ;
        calculated.insertAdjacentHTML("afterend",element);
        doCalculate.disabled = true
        doCalculate.style.background ="#666"; 
    }else if(18.5 <= printResult <  23){
        console.log('정상')
        let element = ' <div id="result"> <p>"정상"</p> <p>체지방 지수는 <span id="named"></span>입니다.</p> </div>' ;
        calculated.insertAdjacentHTML("afterend",element);
        doCalculate.disabled = true
    }else if(23 <= printResult < 25){
        console.log('과체중')
        let element = ' <div id="result"> <p>"과체중"</p> <p>체지방 지수는 <span id="named"></span>입니다.</p> </div>' ;
        calculated.insertAdjacentHTML("afterend",element);
        doCalculate.disabled = true
    }else if(printResult >= 25){
        console.log('비만')
        let element = ' <div id="result"> <p>"비만"</p> <p>체지방 지수는 <span id="named"></span>입니다.</p> </div>' ;
        calculated.insertAdjacentHTML("afterend",element);
        doCalculate.disabled = true
    }else{
        console.log('잘못된 입력입니다.')
    }
}




// result.innerHTML = ' <div id="result" <p>"비만"</p> <p>체지방 지수는 "" 입니다.</p> </div>' ;

// const calculate = Document.getElementById('calculate');
// document.calculate.appendChild('result'); 
