// immediately invoked function variable
// to remove global scope pollution we use IIFE
(function chai() {
    //named IIFE
    console.log('DB CONNECTED');
}) /*definition*/ (); /*execution*/ 
/* here ; is must coz without it the end of scope wont be defined and the second part will not execute*/

( (name) => {
    //unnamed iife
    console.log(` DB CONNECTED ${name}`);
}) ('piyush')