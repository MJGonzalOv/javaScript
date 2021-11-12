let edad = 20;

if (edad < 18){
    console.log('Tu edad es menor')
}else{
    console.log('eres mayor')
}
//switch
let fruit = 'Manzana';
switch (fruit){
    case 'manzana':
        console.log('eres manzana'); 
    break;
    case 'piña':
        console.log('eres piña');
    break;
    default:
        console.log('no estas');
    break;
}
/* For */

for(let i = 1; i < 5; i++){
    console.log(i)
}
//while
let i = 0
while(i<10){
    console.log(i++);
}

//dowhile
do{
    console.log(i++)
}
while(i<4);