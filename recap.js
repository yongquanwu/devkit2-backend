let x = 12.0;

x = "yong";

//console.log(x);

//console.log(`Value of x : ${x}`);
/*console.log(
    "Value of x: " + x + ", Value of y: " + y + ", and " + x + "/" + y + " = ",
    +(x / y)
  );
  console.log(`Value of x: ${x}, Value of y: ${y},
   and ${x}/${y}=${x / y}`);
   both same value but 2nd more readable
*/ 

/*conditional statements
let age =17;
if(age >18){
    console.log("you can vote!");
} else{
    console.log("you can't vote.");
}
*/
//functions
/*
function print_sum(a, b) {
    console.log(`a: ${a}`);
    console.log(`b: ${b}`);
  
    console.log(`a + b = ${a + b}`);
  }

  print_sum(2, 3);
*/
/*
function add(a, b) {
    return a + b;
  }
  
  var sum = add(2, 3);
  
  console.log(`Sum: ${sum}`);
*/
  // anonymous functions
// function_to_print_sum(4, 4);
//operation is callback function
  function print_after_operation(a, b, operation) {
    var result = operation(a, b);
    console.log("Result: " + result);
  }
  
  function add(a, b) {
    return a + b;
  }
  
  function product(a, b) {
    return a * b;
  }
 print_after_operation(3, 4, add);
 print_after_operation(3, 4, product);
 print_after_operation(3, 4, (a, b) => {
    return a - b;
  }); //function call only exist in line 73