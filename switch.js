 const day = new Date();
var day1 = day.getDate()
console.log(day1);

console.log(new Date().toLocaleString('en-us', {  weekday: 'long' }));
switch(day1){
    case 1:
        console.log('today is monday')
    break;

    case 2:
        console.log('today is tuesday')
    break;

    case 3:
        console.log('today is wednesday')
    break;

    case 4:
        console.log('today is thursday')
    break;

    case 5:
        console.log('today is friday')
    break;

    case 6:
        console.log('today is saturday')
    break;

    case 7:
        console.log('today is sunday')
    break;

    default: 
    console.log('can not find the day')

    
}