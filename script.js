'use strict';

const money = prompt("Ваш бюджет на месяц?");
const time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget : money,
    timeData : time,
    expenses : new Object(),
    optionalExpenses : new Object(),
    income : [],
    savings : false,
}

for (let i = 0; i < 2; i++){
    let answerOne = prompt("Введите обязательную статью расходов в этом месяце");
    let answerTwo = prompt("Во сколько обойдется?");
    appData.expenses[`${answerOne}`] = answerTwo;
}
    
const dailyBudget = Math.round(appData.budget / 30);
alert(`Your daily budget is ${dailyBudget}`);
console.log(appData);