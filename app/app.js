const moment = require('moment');
const chalk = require('chalk');

let now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
let dayOfYear = moment().format("DDDo");
let secOfDay = moment().format("SSSSSS");
let dls = moment().isDST();;
let ly = moment().format();

function checkDst(){
  if(dls) {
    console.log('It ' + chalk.blue('is') + ' Daylight Savings Time');
  } else {
    console.log('It ' + chalk.blue('is not') + ' Daylight Savings Time');
  }
};

function checkLy(){
  if(ly) {
    console.log('It ' + chalk.red('is') + ' a leap year');
  } else {
    console.log('It ' + chalk.red('is not') + ' a leap year');
  }
};

console.log('Today is ' + chalk.cyan(now));
console.log('It is the ' + chalk.yellow(dayOfYear) + ' day of the year');
console.log('It is ' + chalk.green(secOfDay) + ' seconds into the day');
checkDst();
checkLy();
