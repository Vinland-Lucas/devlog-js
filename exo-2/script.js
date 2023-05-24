// you can write js here
console.log('exo-2');

const myDate = new Date(); // new Date('May 26, 2023 18:00:00') ou new Date('May 29, 2023 08:00:00')
console.log(myDate);

const isNotWeekEnd = "C'est pas encore le week-end bogoss";

const isWeekEnd = "C'EST LE WEEK-END";

let today = myDate.getDay();
let options = { weekday: 'long'};
console.log(today)

if (today > 0 && today < 6) {
    
    console.log("On est que", new Intl.DateTimeFormat('fr-FR', options).format(myDate), ":(", isNotWeekEnd);
} else {
    console.log("On est", new Intl.DateTimeFormat('fr-FR', options).format(myDate), "!!!", isWeekEnd);
}


