function calculator() {
    return  {
        init: (selector1, selector2, resultSelector) => {
            selector1      = document.querySelector('#num1').value;
            selector2      = document.querySelector('#num2').value;
            resultSelector = document.querySelector('#result').value;
            console.log(selector1);
            console.log(selector2);

        },
        add: () => {

        },
        subtract:() => {

        }
    }
}
let calc = calculator();
calc.init();