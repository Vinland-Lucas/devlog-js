// you can write js here
console.log('exo-2');

let isTesting = false;

const myDate = new Date(); // new Date('May 26, 2023 18:00:00') ou new Date('May 29, 2023 08:00:00')
console.log(myDate);

const isNotWeekEnd = "C'est pas encore le week-end bogoss";

const isWeekEnd = "C'EST LE WEEK-END";

let today;
let options = { weekday: 'long'};

let hours;

if (isTesting == false) {
    today = myDate.getDay();
    hours = myDate.getHours();  
} else {
    today = prompt("On est quel jour ?");
    hours = prompt("Quelle heure est-il ?");
}

if (today == 5 && hours > 17 || today== 1 && hours < 9) {
    console.log(isWeekEnd, "!!!" )
} else if (today > 0 && today < 6 ) {
    console.log(isNotWeekEnd, ":(");
} 
else {
    console.log(isWeekEnd,"!!!");
}




