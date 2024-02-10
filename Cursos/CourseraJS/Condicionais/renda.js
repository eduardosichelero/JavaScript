var age = 10;
if (age >= 65) {
    console.log("O senhor recebe sua renda da sua pensão")
} else if (age < 65 && age >= 18) {
    console.log("todo mes o senhor recebe um salario.")
} else if( age < 18 ) {
    console.log ( " Você recebe uma mesada")
} else {
    console.log("O valor da variável idade não é numérico")
}


// Comando com switch
var day = 'Sunday';
switch(day) {
   case 'Monday':
       console.log('Read a book');
       break;
   case 'Tuesday':
       console.log('Watch a movie');
       break;
   case 'Wednesday':
       console.log('Read a book');
       break;
   case 'Thursday':
       console.log('Play basketball');
       break;
   case 'Friday':
       console.log('Socialize');
       break;
   case 'Saturday':
       console.log('Chill');
       break;
   case 'Sunday':
       console.log('Have barbecue');
       break;
   default:
       //this block will run if no condition matches
       console.log('There is no such day');
}
