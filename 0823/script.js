// 
const height = document.getElementById('height'); 
const weight = document.getElementById('weight'); 
const doCalculate = document.getElementById('doCalculate'); 
const reset = document.getElementById('reset'); 
Math.PI ;
let calculated = document.getElementById('calculate'); 
const result = document.getElementById('result');

const notFound = document.getElementById('verkeerd');

// 초기화! 
reset.addEventListener("click", doAgain);

function doAgain(){
    height.value = ""; 
    weight.value = ""; 
    doCalculate.disabled = false; 
    doCalculate.style.background ="rgb(117, 152, 137)";
    result.style.display = "none";
    notFound.style.display = 'none';
}



doCalculate.addEventListener("click", startCalculating);

function startCalculating(){
    let weightValue = parseFloat(weight.value); 
    let heightValue = parseFloat(height.value);
    let resultIs = weightValue/(heightValue * heightValue)*10000;
    let printResult = resultIs.toFixed(2);

    const status = document.getElementById('status');
    const valued = document.getElementById('named');
    
    function reDeco(){
        doCalculate.disabled = true;
        doCalculate.style.background ="#666"; 
    }

    if(isNaN(printResult)){
        notFound.style.display = "flex"; 
        reDeco();
    } else if(printResult < 18.5){
        result.style.display="flex";
        valued.textContent = printResult ; 
        status.textContent = "귀하는 저체중이며," ; 
        reDeco();
    } else if(printResult < 23){
        result.style.display="flex";
        valued.textContent = printResult ; 
        status.textContent = "귀하는 정상이며," ; 
        reDeco(); 
    } else if(printResult < 25){
        result.style.display="flex";
        valued.textContent = printResult ; 
        status.textContent = "귀하는 과체중이며," ; 
        reDeco(); 
    } else {
        result.style.display="flex";
        valued.textContent = printResult ; 
        status.textContent = "귀하는 비만이며," ; 
        reDeco(); 
    }
}




// result.innerHTML = ' <div id="result" <p>"비만"</p> <p>체지방 지수는 "" 입니다.</p> </div>' ;

// const calculate = Document.getElementById('calculate');
// document.calculate.appendChild('result'); 