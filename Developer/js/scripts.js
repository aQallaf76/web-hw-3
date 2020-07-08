const languages = ["html", "css", "java script", "php", "swift", "java"];
const needed_languages = 3;
console.log("مرحبا بك في برنامج  توظيف المبرمجين");

let name = prompt("ما أسمك؟");
let age = parseInt(prompt("كم عمرك ؟"));
let experirnce = parseInt(prompt(" عدد سنوات الخبرة؟"));

console.log("لغات البرمجة : ");
// console.log("1." + languages[0]);
// console.log("2." + languages[1]);
// console.log("3." + languages[2]);
// console.log("4." + languages[3]);
// console.log("5." + languages[4]);
// console.log("6." + languages[5]);
for (let i = 1; i <= languages.length; i++) {
    console.log(i + ". " + languages[i - 1]);
}
let skill = prompt("اختر اللغة");

let skill2 = prompt(" اختر اللغة اخرى");

if (
    age > 25 &&
    age < 40 &&
    experirnce > 3 &&
    (skill == needed_languages || skill2 == needed_languages)) {
    console.log("مقبول");

} else {
    console.log("مرفوض");
}

// --------------------------------------------
function logger(temperatures) {

    for (let i = 0; i < temperatures.length; i++) {
        console.log(temperatures[i]);
    }
}

let input_array = [32, 70, 99, 106];
let result_array = [];

function tocel(temperatures) {
    for (let i = 0; i < temperatures.length; i++) {
        result_array.push(parseInt((input_array[i] - 32) * (5 / 9)));
    }
    return result_array;
}

tocel(input_array);

let hot = [];
let min_value = 30;

function hottestdays(temperatures, min_value) {
    for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] > min_value) {
            hot.push(temperatures[i]);
        }
    }
    return hot;
}


let feh_temp_array = [32, 70, 99, 106];
let threshold = 70;
let hot = [];
let result_array = [];



function loghottestdays(input_array,) {
    logger(tocel(hottestdays(input_array, min_value), result_array));

}