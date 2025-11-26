// Immediately invoked function  Expressions (IIFE)

(function chai(){
    // Named IIFE
    console.log('DB Connect.')
})();


// () first paranthesis for function definition and second () execution call
/*(() => {
    console.log('DB Connected Two')
}) () 
this give an error because we not use ";" after execution call
*/

(() => {
    console.log('DB Connected Two')
}) (); 

((name) => {
    console.log(`DB Connected Two ${name}`)
}) ("sumit"); 

(function aurcode()  {
    console.log('DB Connected Two')
}) () 



