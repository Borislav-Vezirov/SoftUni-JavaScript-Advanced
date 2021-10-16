function calculator() {
    let firstInput;
    let secondInput;
    let result;
    return  {

        init: (selector1, selector2, resultSelector) => {
            firstInput   = document.querySelector(selector1);
            secondInput  = document.querySelector(selector2);
            result       = document.querySelector(resultSelector);

        },
        add: () => {
            result.value = Number(firstInput.value) + Number(secondInput.value);
            
        },
        subtract:() => {
            result.value = Number(firstInput.value) - Number(secondInput.value);
            
        }
    }
}
const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 
