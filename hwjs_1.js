// вывести в консоль item_1
let item_1 = 5
console.log(item_1)

// вывести в консоль item_2
let item_2 = 3
console.log(item_2)

// вывести в консоль item_3
let item_3 = item_1 + item_2
console.log(item_3)

// вывести в консоль item_4
let item_4 = 'Yolochka'
console.log(item_4)

// вывести в консоль сумму/умножение item_3 item_4
console.log(item_3 + item_4)
console.log(item_3 * item_4)

// присвоить переменную item_3
let item_5 = item_3

// вывести в консоль тип данных item_6
let item_6 = 15
let item_6_type = typeof(item_6)
console.log('item_6 == ' + item_6, ', item_6_type == ' + item_6_type);


// вывести в консоль тип данных item_7
let item_7 = String(item_6)
let item_7_type = typeof(item_7)
console.log('item_7 == ' + item_6, ', item_7_type == ' +  item_7_type);


let age_1 = 10
let age_2 = 18
let age_3 = 60
if (age_1 < age_2){
    console.log('You dont have access cause your age is ' + age_1 + ' its less then')
}
else if (age_1 >=  age_2 && age_1 < age_3){
    console.log('Welcome!')
}
else if (age_1  > age_3){
    console.log('Keep calm and look Culture channel')
}
else{
    console.log('Technical work')
} 

