 const calc = document.getElementById('display');
 
 function appendtoDisplay(input){
    calc.value += input;
 }

 function clearDisplay(){
    calc.value = '';
 }

 function calculate(){
    try{
    calc.value = eval(calc.value);
    } catch(error){
        calc.value = 'Error';
    }
 }

 function deleteDisplay(){
    calc.value = calc.value.slice(0, -1);
 }

 function percentage() {
    calc.value = (parseFloat(calc.value) / 100).toString();
  }