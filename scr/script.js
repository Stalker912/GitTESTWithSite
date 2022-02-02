//Переменные

// var Name = "Nameasdasda" // Неиспользовать так как устарело
// const ConstName = "ConstName" // string
// let Age = 20 // number
// const IsProgrammer = true // bool

//Некоторые функции

//console.log(Name) // Вывод в консоль браузрена (Пкм -> Исследовать -> Консоль)
//alert("TEST Java variables")
//const LastName = prompt("Enter your lastname:" ) // Ввод числа через уведомнение
//console.log("Your full name is " + Name + " " + LastName)

//Операторы

// const a = 10
// const b = 5
// console.log("a = 10, b = 5")
// console.log("+ " + (a + b))
// console.log("- " + (a - b))
// console.log("* " + a * b)
// console.log("/ " + a / b)

// Типы данных

//let IsProgrammer = true
//console.log(typeof IsProgrammer)

// Приоритет операоров смотреть на mdn (mazilla development network)

// функции

// function GetSquare(Value)
// {
//     return Value * Value
// }

// function logFullName(Name, SecondName)
// {
//     console.log("Full name is " + Name + ' ' + SecondName)
// }

//Массивы

// const Cars = [ "Mazda", "Mersedes", "Ford", "Porsche"]

// Циклы

// Через индексы
// for(let i = 0; i < Cars.length; i++)
// {
//     console.log(i + " element of Cars is " + Cars[i])
// }
// Как forEach
// console.log("Car mass:")
// for(let car of Cars)
// {
//     console.log(car)
// }

// Оbjects
const Person = 
{
    FistName: "Hello",
    LastName: "Word",
    BirthYear: 2001,
    Languages: ["Russian", "English", "Japan"],
    IsSingle: true,
    GetFullName: function()
    {
        return this.FistName + " " + this.LastName
    }
}
console.log(Person)
console.log(Person.FistName)